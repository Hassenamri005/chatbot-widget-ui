'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap\");\n\n/* Import Material Symbols Outlined font */\n@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n\n/* Import Material Symbols Rounded font */\n@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0');\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Poppins\", sans-serif;\n}\n\n@keyframes color {\n    0% {\n        background-position: 0 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0 50%;\n    }\n}\n\n.chatbot-toggler {\n    position: fixed;\n    bottom: 40px;\n    right: 40px;\n    outline: none;\n    border: none;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background: #4aa017;\n    transition: all 0.2s ease;\n    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),\n        0 32px 64px -48px rgba(0, 0, 0, 0.5);\n\n    &:hover {\n        background: #4aa017;\n    }\n\n    svg path {\n        fill: #fff;\n    }\n\n    @media (max-width: 991px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 767px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 575px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 375px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 320px) {\n        bottom: 20px;\n        right: 20px;\n    }\n}\n\nbody.show-chatbot .chatbot-toggler {\n    transform: rotate(90deg);\n    background: #4aa017;\n}\n\n.chatbot-toggler span {\n    color: #fff;\n    position: absolute;\n    font-size: 1.2rem;\n    font-weight: 600;\n    transition: all 0.2s ease;\n}\n\n.chatbot-toggler span:last-child,\nbody.show-chatbot .chatbot-toggler span:first-child {\n    opacity: 0;\n}\n\nbody.show-chatbot .chatbot-toggler span:last-child {\n    opacity: 1;\n}\n\n.chatbot {\n    position: fixed;\n    right: 70px;\n    bottom: 80px;\n    overflow: hidden;\n    width: 340px;\n    height: 520px;\n    transform: scale(0.5);\n    opacity: 0;\n    pointer-events: none;\n    background: #fff;\n    transform-origin: bottom right;\n    border-radius: 15px;\n    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),\n        0 32px 64px -48px rgba (0, 0, 0, 0.5);\n    transition: all 0.1s ease;\n}\n\nbody.show-chatbot .chatbot {\n    opacity: 1;\n    pointer-events: auto;\n    transform: scale(1);\n}\n\n/* ChatBot */\n.chatbot header {\n    background: #4aa017;\n    position: relative;\n    color: #fff;\n    padding: 15px 0;\n    text-align: center;\n    border-radius: 15px 15px 0 0;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.chatbot header span {\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    display: none;\n    cursor: pointer;\n    transform: translateY(-50%);\n}\n\n@media screen and (max-width: 992px) {\n    .chatbot header span {\n        display: block;\n    }\n}\n\n.chatbot header span svg {\n    height: 20px;\n    width: 20px;\n    fill: #fff;\n}\n\n.chatbot header span:hover {\n    opacity: 0.8;\n}\n\n.chatbot header span:first-child {\n    right: 55px;\n}\n\n.chatbot header span:last-child {\n    right: 15px;\n}\n\n.chatbot header h2 {\n    color: #fff;\n    font-size: 1.4rem;\n    font-weight: 600;\n    letter-spacing: 0.5px;\n}\n\n.chatbot .chatbox {\n    overflow-y: auto;\n    padding: 15px 10px 8px;\n    height: 400px;\n    background: #fff;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.chatbox .chat {\n    display: flex;\n    list-style: none;\n    margin: -1px 0 0;\n}\n\n.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {\n    width: 6px;\n}\n\n.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {\n    background: #fff;\n    border-radius: 25px;\n}\n\n.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {\n    background: #ccc;\n    border-radius: 25px;\n}\n\n.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb:hover {\n    background: #b3b3b3;\n}\n\n.chatbox .incoming span {\n    height: 30px;\n    width: 30px;\n    color: #fff;\n    align-self: flex-end;\n    background: #4aa017;\n    text-align: center;\n    line-height: 32px;\n    border-radius: 5px;\n    margin: 0 8px 2px 0;\n}\n\n.chatbox .outgoing {\n    margin: 20px 0;\n    justify-content: flex-end;\n    font-size: 0.8rem;\n}\n\n.chatbox .chat p {\n    color: #fff;\n    font-size: 0.9rem;\n    max-width: 75%;\n    padding: 5px 10px;\n    border-radius: 10px 10px 0 10px;\n    background: #4aa017;\n    line-height: 1.3;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.chatbox .incoming p {\n    color: black;\n    font-size: 0.9rem;\n    background: #f2f2f2;\n    border-radius: 10px 10px 10px 0;\n    text-align: left;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.chatbox .chat p.error {\n    color: #721c24;\n    background: #f8d7da;\n}\n\n.chatbox .chat p.error::before {\n    content: \"!\";\n    color: #721c24;\n    font-weight: 600;\n    margin-right: 5px;\n}\n\n.chatbox .chat p.error::after {\n    content: \"!\";\n    color: #721c24;\n    font-weight: 600;\n    margin-left: 5px;\n}\n\n.chatbox .chat p.error {\n    color: #721c24;\n    background: #f8d7da;\n}\n\n@media (max-width: 375px) and (-webkit-min-device-pixel-ratio: 2),\n(max-width: 375px) and (min-device-pixel-ratio: 2) {\n    .chatbox .chat p.error {\n        background: #f8d7da;\n        color: #721c24;\n    }\n}\n\n.chatbot .chat-input {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    gap: 5px;\n    background: #fff;\n    padding: 5px 20px;\n    border-top: 1px solid #ccc;\n}\n\n.chat-input textarea {\n    height: 55px;\n    width: 100%;\n    border: none;\n    outline: none;\n    font-size: 0.95rem;\n    resize: none;\n    padding: 16px 15px 16px 0;\n    border-radius: 5px;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.chat-input span {\n    align-self: flex-end;\n    height: 40px;\n    line-height: 55px;\n    color: #4aa017;\n    font-size: 1.35rem;\n    cursor: pointer;\n    visibility: hidden;\n    transition: 0.3s ease;\n    justify-content: flex-end;\n    height: 100%;\n}\n\n.chat-input textarea:valid~span {\n    visibility: visible;\n}\n\n@media (max-width: 767px) {\n    .chatbot {\n        width: 100%;\n        height: 100%;\n        border-radius: 0;\n        bottom: 0;\n        right: 0;\n    }\n\n    .chatbot header {\n        border-radius: 0;\n    }\n\n    .chatbot .chat-input {\n        position: relative;\n    }\n\n    .chatbot .chat-input textarea {\n        padding: 16px 15px 16px 0;\n    }\n\n    .chatbot .chat-input span {\n        height: 55px;\n        line-height: 55px;\n        font-size: 1.35rem;\n    }\n}\n\n@media (max-width: 575px) {\n    .chatbot {\n        width: 100%;\n        height: 100%;\n        border-radius: 0;\n        bottom: 0;\n        right: 0;\n    }\n\n    .chatbot header {\n        border-radius: 0;\n    }\n\n    .chatbot .chat-input {\n        position: relative;\n    }\n\n    .chatbot .chat-input textarea {\n        padding: 16px 15px 16px 0;\n    }\n\n    .chatbot .chat-input span {\n        height: 55px;\n        line-height: 55px;\n        font-size: 1.35rem;\n    }\n}";
styleInject(css_248z);

const ChatBotWidget = ({ callApi, chatbotName = "Chatbot", isTypingMessage = "Typing...", IncommingErrMsg = "Oops! Something went wrong. Please try again.", primaryColor = "#eb4034", inputMsgPlaceholder = "Send a Message", chatIcon = ChatIcon(), handleNewMessage, }) => {
    const [userMessage, setUserMessage] = React.useState("");
    const [messages, setMessages] = React.useState([]);
    const [typing, setTyping] = React.useState(false);
    const chatInputRef = React.useRef(null);
    const chatboxRef = React.useRef(null);
    const handleChat = () => __awaiter(void 0, void 0, void 0, function* () {
        const trimmedMessage = userMessage.trim();
        if (!trimmedMessage)
            return;
        setUserMessage("");
        // Display outgoing message
        const outgoingChat = (React.createElement("li", { key: Date.now(), className: "chat outgoing" },
            React.createElement("p", { style: { background: primaryColor } }, trimmedMessage)));
        setMessages((prevMessages) => [...prevMessages, outgoingChat]);
        handleNewMessage === null || handleNewMessage === void 0 ? void 0 : handleNewMessage((prevMessages) => [
            ...prevMessages,
            { type: "user", text: trimmedMessage },
        ]);
        try {
            setTyping(true);
            // Use the custom API call function
            const botResponse = yield callApi(trimmedMessage);
            // Display incoming bot message
            const incomingChat = (React.createElement("li", { key: Date.now(), className: "chat incoming" },
                React.createElement("span", { className: "material-symbols-outlined" }, "smart_toy"),
                React.createElement("p", null, botResponse)));
            setMessages((prevMessages) => [...prevMessages, incomingChat]);
            handleNewMessage === null || handleNewMessage === void 0 ? void 0 : handleNewMessage((prevMessages) => [
                ...prevMessages,
                { type: "bot", text: botResponse },
            ]);
        }
        catch (error) {
            // Display error message if API call fails
            const errorChat = (React.createElement("li", { key: Date.now(), className: "chat incoming error" },
                React.createElement("p", null, IncommingErrMsg)));
            setMessages((prevMessages) => [...prevMessages, errorChat]);
        }
        finally {
            setTyping(false);
        }
    });
    const handleInputChange = (event) => {
        setUserMessage(event.target.value);
        chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey && window.innerWidth > 800) {
            event.preventDefault();
            handleChat();
        }
    };
    const toggleChatbot = () => {
        document.body.classList.toggle("show-chatbot");
    };
    React.useEffect(() => {
        const closeBtn = document.querySelector(".close-btn");
        closeBtn.addEventListener("click", toggleChatbot);
        return () => {
            closeBtn.removeEventListener("click", toggleChatbot);
        };
    }, []);
    React.useEffect(() => {
        // Scroll to bottom of chatbox when messages change
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, [messages]);
    return (React.createElement("div", { className: "chatbot-container", style: {
            background: primaryColor,
            backgroundColor: primaryColor,
        } },
        React.createElement("button", { className: "chatbot-toggler", onClick: toggleChatbot, style: { background: primaryColor } },
            React.createElement("span", { className: "material-symbols-rounded" }, chatIcon),
            React.createElement("span", { className: "material-symbols-outlined" }, "Close")),
        React.createElement("div", { className: "chatbot" },
            React.createElement("header", { style: { background: primaryColor } },
                React.createElement("h2", null, chatbotName),
                React.createElement("span", { className: "close-btn material-symbols-outlined", onClick: toggleChatbot }, "close")),
            React.createElement("ul", { className: "chatbox", ref: chatboxRef },
                messages,
                typing && (React.createElement("li", { key: Date.now(), className: "chat incoming" },
                    React.createElement("p", null, isTypingMessage)))),
            React.createElement("div", { className: "chat-input" },
                React.createElement("textarea", { ref: chatInputRef, placeholder: inputMsgPlaceholder, spellCheck: "false", required: true, value: userMessage, onChange: handleInputChange, onKeyDown: handleKeyPress, maxLength: 500 }),
                React.createElement("span", { id: "send-btn", className: "material-symbols-outlined", onClick: handleChat, style: {
                        color: primaryColor,
                    } }, "send")))));
};
const ChatIcon = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", width: 18, height: 18, fill: "#fff", stroke: "#fff", viewBox: "0 0 58 58" },
            React.createElement("path", { d: "M53 3.293H5c-2.722 0-5 2.278-5 5v33c0 2.722 2.278 5 5 5h27.681l-4.439-5.161a1 1 0 1 1 1.517-1.304l4.998 5.811L43 54.707v-8.414h10c2.722 0 5-2.278 5-5v-33c0-2.722-2.278-5-5-5z", style: {
                    fill: "#fff",
                } }),
            React.createElement("circle", { cx: 15, cy: 24.799, r: 3, style: {
                    fill: "#fff",
                } }),
            React.createElement("circle", { cx: 29, cy: 24.799, r: 3, style: {
                    fill: "#fff",
                } }),
            React.createElement("circle", { cx: 43, cy: 24.799, r: 3, style: {
                    fill: "#fff",
                } }))));
};

exports.ChatBotWidget = ChatBotWidget;
