import React, { useState, useRef, useEffect } from "react";
import styles from './style.module.css';

interface Message {
  role: string;
  content: string;
}

interface ChatWidgetIOProps {
  callApi: (message: string) => Promise<string>;
  chatbotName?: string;
  isTypingMessage?: string;
  IncommingErrMsg?: string;
  primaryColor?: string;
  inputMsgPlaceholder?: string;
  chatIcon?: React.ReactNode;
  botIcon?: React.ReactNode;
  botFontStyle?: React.CSSProperties;
  typingFontStyle?: React.CSSProperties;
  handleNewMessage?: (message: Message) => void;
  onBotResponse?: (response: string) => void;
  messages?: Message[];
  useInnerHTML?: boolean;
}

const ChatBotWidget = ({
  callApi,
  chatbotName = "Chatbot",
  isTypingMessage = "Typing...",
  IncommingErrMsg = "Oops! Something went wrong. Please try again.",
  primaryColor = "#eb4034",
  inputMsgPlaceholder = "Send a Message",
  chatIcon = <ChatIcon />,
  botIcon = <BotIcon />,
  botFontStyle = {},
  typingFontStyle = {},
  handleNewMessage,
  onBotResponse,
  messages = [],
  useInnerHTML = false,
}: ChatWidgetIOProps) => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const chatInputRef = useRef<HTMLTextAreaElement | null>(null);
  const chatboxRef = useRef<HTMLUListElement | null>(null);

  const handleChat = async () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage("");
    if (chatInputRef.current) {
      chatInputRef.current.style.height = "auto";
    }

    // Display outgoing message
    const outgoingMessage = { role: "user", content: trimmedMessage };
    handleNewMessage?.(outgoingMessage);

    try {
      setTyping(true);

      // Use the custom API call function
      const botResponse = await callApi(trimmedMessage);

      // Call the callback function with the bot's response
      onBotResponse?.(botResponse);
    } catch (error) {
      // Display error message if API call fails
      const errorMessage = { role: "error", content: IncommingErrMsg };
      handleNewMessage?.(errorMessage);
    } finally {
      setTyping(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(event.target.value);

    const el = chatInputRef.current;
    if (!el) return;

    // Reset height to auto before calculating new height
    el.style.height = "auto";

    // Adjust the height dynamically based on content
    el.style.height = `${Math.min(el.scrollHeight, 80)}px`;
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && window.innerWidth > 800) {
      event.preventDefault();
      handleChat();
    }
  };

  const toggleChatbot = () =>
    setIsOpen((open) => {
      if (open) setIsMaximized(false); // reset so it reopens at normal size
      return !open;
    });

  const closeChat = () => {
    setIsOpen(false);
    setIsMaximized(false);
  };

  const toggleMaximize = () => setIsMaximized((maximized) => !maximized);

  useEffect(() => {
    // Scroll to bottom of chatbox when messages change
    chatboxRef.current?.scrollTo({
      top: chatboxRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const canSend = userMessage.trim().length > 0 && !typing;

  return (
    <div
      className="chatbot-container"
      style={{ ["--cbw-primary" as string]: primaryColor } as React.CSSProperties}
    >
      <button
        type="button"
        className={`${styles.chatbotToggler} ${isOpen ? styles.open : ""}`}
        onClick={toggleChatbot}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <span className={styles.togglerIcon}>{chatIcon}</span>
        <span className={`${styles.togglerIcon} ${styles.togglerIconClose}`}>
          <CloseIcon />
        </span>
      </button>

      <div
        className={`${styles.chatbot} ${isOpen ? styles.open : ""} ${
          isMaximized ? styles.maximized : ""
        }`}
        role="dialog"
        aria-label={`${chatbotName} chat window`}
        aria-hidden={!isOpen}
      >
        <header>
          <div className={styles.headerInfo}>
            <span className={styles.headerAvatar}>{botIcon}</span>
            <h2>{chatbotName}</h2>
          </div>
          <div className={styles.headerActions}>
            <button
              type="button"
              className={styles.maximizeBtn}
              onClick={toggleMaximize}
              aria-label={isMaximized ? "Restore chat size" : "Maximize chat"}
              aria-pressed={isMaximized}
            >
              {isMaximized ? <CollapseIcon /> : <ExpandIcon />}
            </button>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeChat}
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>
        </header>
        <ul className={styles.chatbox} ref={chatboxRef} aria-live="polite">
          {messages.map((msg, index) => {
            const isUser = msg.role === "user";
            const isError = msg.role === "error";
            const prevMsg = messages[index - 1];
            const grouped = !!prevMsg && (prevMsg.role === "user") === isUser;

            return (
              <li
                key={index}
                className={`${styles.chat} ${
                  isUser ? styles.outgoing : styles.incoming
                } ${grouped ? styles.grouped : ""}`}
              >
                {!isUser && <span className={styles.avatar}>{botIcon}</span>}
                <p
                  className={`${styles.bubble} ${
                    isError ? styles.errorBubble : ""
                  }`}
                  style={!isUser ? botFontStyle : undefined}
                  {...(useInnerHTML
                    ? { dangerouslySetInnerHTML: { __html: msg.content } }
                    : { children: msg.content })}
                />
              </li>
            );
          })}
          {typing && (
            <li className={`${styles.chat} ${styles.incoming}`}>
              <span className={styles.avatar}>{botIcon}</span>
              <p
                className={`${styles.bubble} ${styles.typingBubble}`}
                style={typingFontStyle}
              >
                {isTypingMessage}
                <span className={styles.typingDots} aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
              </p>
            </li>
          )}
        </ul>
        <div className={styles.chatInput}>
          <textarea
            ref={chatInputRef}
            placeholder={inputMsgPlaceholder}
            spellCheck="false"
            required
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            maxLength={500}
            rows={1}
            aria-label={inputMsgPlaceholder}
          />
          <button
            type="button"
            className={styles.sendBtn}
            onClick={handleChat}
            disabled={!canSend}
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8c-1.06 0-2.07-.2-3-.57L4.5 20l1.07-3.5A7.96 7.96 0 0 1 4 12Z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const CollapseIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 3 3 10.5l7.5 2.9L13.5 21 21 3Z"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path d="M10.5 13.4 21 3" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
  </svg>
);

const BotIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x={4} y={8} width={16} height={12} rx={4} stroke="currentColor" strokeWidth={1.8} />
    <path d="M12 8V5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    <circle cx={12} cy={3.5} r={1.2} fill="currentColor" />
    <circle cx={9} cy={14} r={1.3} fill="currentColor" />
    <circle cx={15} cy={14} r={1.3} fill="currentColor" />
    <path d="M9 17.5c1 .8 5 .8 6 0" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
);

export default ChatBotWidget;
