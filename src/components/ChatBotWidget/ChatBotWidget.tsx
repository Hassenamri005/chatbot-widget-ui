import React, { useState, useRef, useEffect } from "react";
import "./style.css"; // Import your stylesheet

interface ChatWidgetIOProps {
  apiKey: string;
  chatbotName?: string;
  isTypingMessage?: string;
  IncommingErrMsg?: string;
  primaryColor?: string;
  inputMsgPlaceholder?: string;
  chatIcon?: any;
  conversation?: any;
  handleNewMessage?: any;
}

const ChatBotWidget = ({
  apiKey,
  chatbotName = "Chatbot",
  isTypingMessage = "Typing...",
  IncommingErrMsg = "Oops! Something went wrong. Please try again.",
  primaryColor = "#eb4034",
  inputMsgPlaceholder = "Send a Message",
  chatIcon = ChatIcon(),
  conversation,
  handleNewMessage,
}: ChatWidgetIOProps) => {
  const [userMessage, setUserMessage] = useState<any>("");
  const [messages, setMessages] = useState<any>([]);
  const [typing, setTyping] = useState<any>(false);
  const chatInputRef = useRef<any>(null);
  const chatboxRef = useRef<any>(null);

  const handleChat = async () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage("");

    // Display outgoing message
    const outgoingChat = (
      <li key={Date.now()} className="chat outgoing">
        <p style={{ background: primaryColor }}>{trimmedMessage}</p>
      </li>
    );
    setMessages((prevMessages: any) => [...prevMessages, outgoingChat]);
    handleNewMessage((prevMessages: any) => [
      ...prevMessages,
      { type: "user", text: trimmedMessage },
    ]);

    try {
      setTyping(true);

      // Request to API for bot response
      const API_URL = "https://api.openai.com/v1/chat/completions";
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: trimmedMessage,
            },
          ],
        }),
      };

      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      const botResponse = data.choices[0].message.content.trim();

      // Display incoming bot message
      const incomingChat = (
        <li key={Date.now()} className="chat incoming">
          <span className="material-symbols-outlined">smart_toy</span>
          <p>{botResponse}</p>
        </li>
      );
      setMessages((prevMessages: any) => [...prevMessages, incomingChat]);
      handleNewMessage((prevMessages: any) => [
        ...prevMessages,
        { type: "bot", text: botResponse },
      ]);
    } catch (error) {
      // Display error message if API request fails
      const errorChat = (
        <li key={Date.now()} className="chat incoming error">
          <p>{IncommingErrMsg}</p>
        </li>
      );
      setMessages((prevMessages: any) => [...prevMessages, errorChat]);
    } finally {
      setTyping(false);
    }
  };

  const handleInputChange = (event: any) => {
    setUserMessage(event.target.value);
    chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey && window.innerWidth > 800) {
      event.preventDefault();
      handleChat();
    }
  };

  const toggleChatbot = () => {
    document.body.classList.toggle("show-chatbot");
  };

  useEffect(() => {
    const closeBtn: any = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", toggleChatbot);

    return () => {
      closeBtn.removeEventListener("click", toggleChatbot);
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom of chatbox when messages change
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      className="chatbot-container"
      style={{
        background: primaryColor,
        backgroundColor: primaryColor,
      }}
    >
      <button
        className="chatbot-toggler"
        onClick={toggleChatbot}
        style={{ background: primaryColor }}
      >
        <span className="material-symbols-rounded">{chatIcon}</span>
        <span className="material-symbols-outlined">Close</span>
      </button>
      <div className="chatbot">
        <header style={{ background: primaryColor }}>
          <h2>{chatbotName}</h2>
          <span
            className="close-btn material-symbols-outlined"
            onClick={toggleChatbot}
          >
            close
          </span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          {messages}
          {typing && (
            <li key={Date.now()} className="chat incoming">
              <p>{isTypingMessage}</p>
            </li>
          )}
        </ul>
        <div className="chat-input">
          <textarea
            ref={chatInputRef}
            placeholder={inputMsgPlaceholder}
            spellCheck="false"
            required
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            maxLength={500}
          />
          <span
            id="send-btn"
            className="material-symbols-outlined"
            onClick={handleChat}
            style={{
              color: primaryColor,
            }}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
};

const ChatIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={18}
        height={18}
        fill="#fff"
        stroke="#fff"
        viewBox="0 0 58 58"
      >
        <path
          d="M53 3.293H5c-2.722 0-5 2.278-5 5v33c0 2.722 2.278 5 5 5h27.681l-4.439-5.161a1 1 0 1 1 1.517-1.304l4.998 5.811L43 54.707v-8.414h10c2.722 0 5-2.278 5-5v-33c0-2.722-2.278-5-5-5z"
          style={{
            fill: "#fff",
          }}
        />
        <circle
          cx={15}
          cy={24.799}
          r={3}
          style={{
            fill: "#fff",
          }}
        />
        <circle
          cx={29}
          cy={24.799}
          r={3}
          style={{
            fill: "#fff",
          }}
        />
        <circle
          cx={43}
          cy={24.799}
          r={3}
          style={{
            fill: "#fff",
          }}
        />
      </svg>
    </>
  );
};

export default ChatBotWidget;
