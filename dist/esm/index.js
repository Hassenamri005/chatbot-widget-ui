import React, { useState, useRef, useEffect } from 'react';

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

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap\");\n\n/* Import Material Symbols Outlined font */\n@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n\n/* Import Material Symbols Rounded font */\n@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0');\n\n@keyframes style-module_color__9atXt {\n    0% {\n        background-position: 0 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0 50%;\n    }\n}\n\n.style-module_chatbotToggler__UG1t1 {\n    position: fixed;\n    bottom: 70px;\n    right: 40px;\n    outline: none;\n    border: none;\n    height: 40px;\n    width: 40px;\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background: #4aa017;\n    transition: all 0.2s ease;\n    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),\n        0 32px 64px -48px rgba(0, 0, 0, 0.5);\n\n    &:hover {\n        background: #4aa017;\n    }\n\n    svg path {\n        fill: #fff;\n    }\n\n    @media (max-width: 991px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 767px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 575px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 375px) {\n        bottom: 20px;\n        right: 20px;\n    }\n\n    @media (max-width: 320px) {\n        bottom: 20px;\n        right: 20px;\n    }\n}\n\nbody.style-module_showChatbot__GTMg6 .style-module_chatbotToggler__UG1t1 {\n    transform: rotate(90deg);\n    background: #4aa017;\n}\n\n.style-module_chatbotToggler__UG1t1 span {\n    color: #fff;\n    position: absolute;\n    font-size: 1.2em;\n    font-weight: 600;\n    transition: all 0.2s ease;\n}\n\n.style-module_chatbotToggler__UG1t1 span:last-child,\nbody.style-module_showChatbot__GTMg6 .style-module_chatbotToggler__UG1t1 span:first-child {\n    opacity: 0;\n}\n\nbody.style-module_showChatbot__GTMg6 .style-module_chatbotToggler__UG1t1 span:last-child {\n    opacity: 1;\n}\n\n.style-module_chatbot__vxZf3 {\n    position: fixed;\n    right: 70px;\n    bottom: 80px;\n    overflow: hidden;\n    width: 340px;\n    height: 520px;\n    transform: scale(0.5);\n    opacity: 0;\n    pointer-events: none;\n    background: #fff;\n    transform-origin: bottom right;\n    border-radius: 15px;\n    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),\n        0 32px 64px -48px rgba(0, 0, 0, 0.5);\n    transition: all 0.1s ease;\n}\n\nbody.style-module_showChatbot__GTMg6 .style-module_chatbot__vxZf3 {\n    opacity: 1;\n    pointer-events: auto;\n    transform: scale(1);\n}\n\n/* ChatBot */\n.style-module_chatbot__vxZf3 header {\n    background: #4aa017;\n    position: relative;\n    color: #fff;\n    padding: 15px 0;\n    text-align: center;\n    border-radius: 15px 15px 0 0;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.style-module_chatbot__vxZf3 header span {\n    position: absolute;\n    right: 15px;\n    top: 50%;\n    display: none;\n    cursor: pointer;\n    transform: translateY(-50%);\n}\n\n@media screen and (max-width: 992px) {\n    .style-module_chatbot__vxZf3 header span {\n        display: block;\n    }\n}\n\n.style-module_chatbot__vxZf3 header span svg {\n    height: 20px;\n    width: 20px;\n    fill: #fff;\n}\n\n.style-module_chatbot__vxZf3 header span:hover {\n    opacity: 0.8;\n}\n\n.style-module_chatbot__vxZf3 header span:first-child {\n    right: 55px;\n}\n\n.style-module_chatbot__vxZf3 header span:last-child {\n    right: 15px;\n}\n\n.style-module_chatbot__vxZf3 header h2 {\n    color: #fff;\n    font-size: 1.4em;\n    font-weight: 600;\n    letter-spacing: 0.5px;\n}\n\n.style-module_chatbot__vxZf3 .style-module_chatbox__8B0hv {\n    overflow-y: auto;\n    padding: 15px 10px 100px;\n    /* Increased bottom padding */\n    height: 400px;\n    background: #fff;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.style-module_chatbox__8B0hv .style-module_chat__NBxBu {\n    display: flex;\n    list-style: none;\n    margin: -1px 0 0;\n}\n\n.style-module_chatbot__vxZf3 :where(.style-module_chatbox__8B0hv, textarea)::-webkit-scrollbar {\n    width: 6px;\n}\n\n.style-module_chatbot__vxZf3 :where(.style-module_chatbox__8B0hv, textarea)::-webkit-scrollbar-track {\n    background: #fff;\n    border-radius: 25px;\n}\n\n.style-module_chatbot__vxZf3 :where(.style-module_chatbox__8B0hv, textarea)::-webkit-scrollbar-thumb {\n    background: #ccc;\n    border-radius: 25px;\n}\n\n.style-module_chatbot__vxZf3 :where(.style-module_chatbox__8B0hv, textarea)::-webkit-scrollbar-thumb:hover {\n    background: #b3b3b3;\n}\n\n.style-module_chatbox__8B0hv .style-module_incoming__7r3wQ span {\n    height: 30px;\n    width: 30px;\n    color: #fff;\n    align-self: flex-end;\n    background: #4aa017;\n    text-align: center;\n    line-height: 32px;\n    border-radius: 5px;\n    margin: 0 8px 2px 0;\n}\n\n.style-module_chatbox__8B0hv .style-module_outgoing__eI-Kd {\n    margin: 20px 0;\n    justify-content: flex-end;\n}\n\n.style-module_chatbox__8B0hv .style-module_chat__NBxBu p {\n    color: #fff;\n    font-size: 0.9em;\n    max-width: 75%;\n    padding: 5px 10px;\n    border-radius: 10px 10px 0 10px;\n    background: #4aa017;\n    line-height: 1.3;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.style-module_chatbox__8B0hv .style-module_incoming__7r3wQ p {\n    color: black;\n    font-size: 0.9em;\n    background: #f2f2f2;\n    border-radius: 10px 10px 10px 0;\n    text-align: left;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n}\n\n.style-module_chatbox__8B0hv .style-module_chat__NBxBu p.style-module_error__FFVpQ {\n    color: #721c24;\n    background: #f8d7da;\n}\n\n.style-module_chatbox__8B0hv .style-module_chat__NBxBu p.style-module_error__FFVpQ::before {\n    content: \"!\";\n    color: #721c24;\n    font-weight: 600;\n    margin-right: 5px;\n}\n\n.style-module_chatbox__8B0hv .style-module_chat__NBxBu p.style-module_error__FFVpQ::after {\n    content: \"!\";\n    color: #721c24;\n    font-weight: 600;\n    margin-left: 5px;\n}\n\n.style-module_chatbox__8B0hv .style-module_chat__NBxBu p.style-module_error__FFVpQ {\n    color: #721c24;\n    background: #f8d7da;\n}\n\n@media (max-width: 375px) and (-webkit-min-device-pixel-ratio: 2),\n(max-width: 375px) and (min-device-pixel-ratio: 2) {\n    .style-module_chatbox__8B0hv .style-module_chat__NBxBu p.style-module_error__FFVpQ {\n        background: #f8d7da;\n        color: #721c24;\n    }\n}\n\n.style-module_chatbot__vxZf3 .style-module_chatInput__ap6uI {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    gap: 5px;\n    background: #fff;\n    padding: 5px 20px;\n    border-top: 1px solid #ccc;\n}\n\n.style-module_chatInput__ap6uI textarea {\n    height: 55px;\n    max-height: 150px;\n    /* Prevents excessive growth */\n    width: 100%;\n    border: none;\n    outline: none;\n    font-size: 0.95em;\n    resize: none;\n    padding: 16px 15px 16px 8px;\n    border-radius: 5px;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n    overflow-y: auto;\n    /* Enables scrolling when needed */\n}\n\n.style-module_chatInput__ap6uI span {\n    align-self: flex-end;\n    height: 40px;\n    line-height: 55px;\n    color: #4aa017;\n    font-size: 1.35em;\n    cursor: pointer;\n    visibility: hidden;\n    transition: 0.3s ease;\n    justify-content: flex-end;\n    height: 100%;\n}\n\n.style-module_chatInput__ap6uI textarea:valid~span {\n    visibility: visible;\n}\n\n@media (max-width: 767px) {\n    .style-module_chatbot__vxZf3 {\n        width: 100%;\n        height: 100%;\n        border-radius: 0;\n        bottom: 0;\n        right: 0;\n    }\n\n    .style-module_chatbot__vxZf3 header span.style-module_close-btn__NBFEH {\n        display: block !important;\n        /* Ensure the close button is visible */\n        right: 15px;\n        top: 50%;\n        transform: translateY(-50%);\n        cursor: pointer;\n    }\n\n    .style-module_chatbot__vxZf3 header {\n        border-radius: 0;\n    }\n\n    .style-module_chatbot__vxZf3 .style-module_chatInput__ap6uI {\n        position: relative;\n    }\n\n    .style-module_chatbot__vxZf3 .style-module_chatInput__ap6uI textarea {\n        padding: 16px 15px 16px 0;\n    }\n\n    .style-module_chatbot__vxZf3 .style-module_chatInput__ap6uI span {\n        height: 55px;\n        line-height: 55px;\n        font-size: 1.35em;\n    }\n}\n\n@media (max-width: 575px) {\n    .style-module_chatbot__vxZf3 {\n        width: 100%;\n        height: 100%;\n        border-radius: 0;\n        bottom: 0;\n        right: 0;\n    }\n\n    .style-module_chatbot__vxZf3 header {\n        border-radius: 0;\n    }\n\n    .style-module_chatbot__vxZf3 .style-module_chatInput__ap6uI {\n        position: relative;\n    }\n\n    .style-module_chatbot__vxZf3 .style-module_chatInput__ap6uI textarea {\n        padding: 16px 15px 16px 0;\n    }\n\n    .style-module_chatbot__vxZf3 .style-module_chatInput__ap6uI span {\n        height: 55px;\n        line-height: 55px;\n        font-size: 1.35em;\n    }\n}";
var styles = {"chatbotToggler":"style-module_chatbotToggler__UG1t1","showChatbot":"style-module_showChatbot__GTMg6","chatbot":"style-module_chatbot__vxZf3","chatbox":"style-module_chatbox__8B0hv","chat":"style-module_chat__NBxBu","incoming":"style-module_incoming__7r3wQ","outgoing":"style-module_outgoing__eI-Kd","chatInput":"style-module_chatInput__ap6uI"};
styleInject(css_248z);

const ChatBotWidget = ({ callApi, chatbotName = "Chatbot", isTypingMessage = "Typing...", IncommingErrMsg = "Oops! Something went wrong. Please try again.", primaryColor = "#eb4034", inputMsgPlaceholder = "Send a Message", chatIcon = React.createElement(ChatIcon, null), botIcon = React.createElement(BotIcon, null), botFontStyle = {}, typingFontStyle = {}, handleNewMessage, onBotResponse, messages = [], useInnerHTML = false, }) => {
    const [userMessage, setUserMessage] = useState("");
    const [typing, setTyping] = useState(false);
    const chatInputRef = useRef(null);
    const chatboxRef = useRef(null);
    const handleChat = () => __awaiter(void 0, void 0, void 0, function* () {
        const trimmedMessage = userMessage.trim();
        if (!trimmedMessage)
            return;
        setUserMessage("");
        // Display outgoing message
        const outgoingMessage = { role: "user", content: trimmedMessage };
        handleNewMessage === null || handleNewMessage === void 0 ? void 0 : handleNewMessage(outgoingMessage);
        try {
            setTyping(true);
            // Use the custom API call function
            const botResponse = yield callApi(trimmedMessage);
            // Call the callback function with the bot's response
            onBotResponse === null || onBotResponse === void 0 ? void 0 : onBotResponse(botResponse);
        }
        catch (error) {
            // Display error message if API call fails
            const errorMessage = { role: "error", content: IncommingErrMsg };
            handleNewMessage === null || handleNewMessage === void 0 ? void 0 : handleNewMessage(errorMessage);
        }
        finally {
            setTyping(false);
        }
    });
    const handleInputChange = (event) => {
        setUserMessage(event.target.value);
        // Reset height to auto before calculating new height
        chatInputRef.current.style.height = "auto";
        // Adjust the height dynamically based on content
        chatInputRef.current.style.height = `${Math.min(chatInputRef.current.scrollHeight, 80)}px`;
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey && window.innerWidth > 800) {
            event.preventDefault();
            handleChat();
        }
    };
    const toggleChatbot = () => {
        document.body.classList.toggle(styles.showChatbot);
    };
    useEffect(() => {
        const closeBtn = document.querySelector(".close-btn");
        if (closeBtn) {
            const handleClose = () => toggleChatbot();
            // Add event listeners for both click and touch events
            closeBtn.addEventListener("click", handleClose);
            closeBtn.addEventListener("touchend", handleClose);
            // Cleanup function to remove the event listeners
            return () => {
                closeBtn.removeEventListener("click", handleClose);
                closeBtn.removeEventListener("touchend", handleClose);
            };
        }
    }, []);
    useEffect(() => {
        // Scroll to bottom of chatbox when messages change
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, [messages]);
    return (React.createElement("div", { className: "chatbot-container", style: {
            background: primaryColor,
            backgroundColor: primaryColor,
        } },
        React.createElement("button", { className: styles.chatbotToggler, onClick: toggleChatbot, style: { background: primaryColor } },
            React.createElement("span", { className: "material-symbols-rounded" }, chatIcon),
            React.createElement("span", { className: "material-symbols-outlined" }, "Close")),
        React.createElement("div", { className: styles.chatbot },
            React.createElement("header", { style: { background: primaryColor } },
                React.createElement("h2", null, chatbotName),
                React.createElement("span", { className: "close-btn material-symbols-outlined", onClick: toggleChatbot }, "close")),
            React.createElement("ul", { className: styles.chatbox, ref: chatboxRef },
                messages.map((msg, index) => (React.createElement("li", { key: index, className: `${styles.chat} ${msg.role === "user" ? styles.outgoing : styles.incoming}` },
                    msg.role !== "user" && (React.createElement("span", { className: "material-symbols-outlined" }, botIcon)),
                    React.createElement("p", Object.assign({ style: msg.role === "assistant"
                            ? botFontStyle
                            : msg.role === "error"
                                ? botFontStyle
                                : { background: primaryColor } }, (useInnerHTML
                        ? { dangerouslySetInnerHTML: { __html: msg.content } }
                        : { children: msg.content })))))),
                typing && (React.createElement("li", { key: Date.now(), className: `${styles.chat} ${styles.incoming}` },
                    React.createElement("span", { className: "material-symbols-outlined" }, botIcon),
                    React.createElement("p", { style: typingFontStyle }, isTypingMessage)))),
            React.createElement("div", { className: styles.chatInput },
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
const BotIcon = () => {
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

export { ChatBotWidget };
