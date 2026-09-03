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

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap\");\n\n@keyframes style-module_cbwPopIn__hXwvF {\n    from {\n        opacity: 0;\n        transform: translateY(12px) scale(0.98);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0) scale(1);\n    }\n}\n\n@keyframes style-module_cbwBounce__g8i7y {\n\n    0%,\n    60%,\n    100% {\n        transform: translateY(0);\n        opacity: 0.4;\n    }\n\n    30% {\n        transform: translateY(-3px);\n        opacity: 1;\n    }\n}\n\n.style-module_chatbotToggler__UG1t1 {\n    position: fixed;\n    bottom: 24px;\n    right: 24px;\n    z-index: 1000;\n    outline: none;\n    border: none;\n    height: 60px;\n    width: 60px;\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    color: #fff;\n    background: var(--cbw-primary, #eb4034);\n    transition: transform 0.25s ease, box-shadow 0.25s ease;\n    box-shadow: 0 10px 24px -6px rgba(0, 0, 0, 0.35);\n    box-shadow: 0 10px 24px -6px color-mix(in srgb, var(--cbw-primary, #eb4034) 55%, transparent);\n    font-family: \"Poppins\", sans-serif;\n}\n\n.style-module_chatbotToggler__UG1t1:hover {\n    transform: translateY(-2px) scale(1.04);\n}\n\n.style-module_chatbotToggler__UG1t1:active {\n    transform: translateY(0) scale(0.96);\n}\n\n.style-module_chatbotToggler__UG1t1.style-module_open__wk2iz {\n    transform: rotate(90deg);\n}\n\n.style-module_chatbotToggler__UG1t1.style-module_open__wk2iz:hover {\n    transform: rotate(90deg) translateY(-2px) scale(1.04);\n}\n\n.style-module_togglerIcon__dWA6z {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n    transition: opacity 0.2s ease, transform 0.2s ease;\n}\n\n.style-module_togglerIconClose__H1lw4 {\n    opacity: 0;\n    transform: scale(0.5) rotate(-90deg);\n}\n\n.style-module_chatbotToggler__UG1t1.style-module_open__wk2iz .style-module_togglerIcon__dWA6z:not(.style-module_togglerIconClose__H1lw4) {\n    opacity: 0;\n    transform: scale(0.5) rotate(90deg);\n}\n\n.style-module_chatbotToggler__UG1t1.style-module_open__wk2iz .style-module_togglerIconClose__H1lw4 {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n}\n\n@media (max-width: 575px) {\n    .style-module_chatbotToggler__UG1t1 {\n        bottom: 16px;\n        right: 16px;\n        height: 52px;\n        width: 52px;\n    }\n}\n\n.style-module_togglerHidden__p0mzJ {\n    display: none;\n}\n\n.style-module_chatbot__vxZf3 {\n    position: fixed;\n    right: 24px;\n    bottom: 96px;\n    z-index: 999;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    width: 380px;\n    max-width: calc(100vw - 32px);\n    height: 600px;\n    max-height: calc(100vh - 120px);\n    opacity: 0;\n    pointer-events: none;\n    background: #fff;\n    transform: translateY(16px) scale(0.96);\n    transform-origin: bottom right;\n    border-radius: 20px;\n    border: 1px solid rgba(15, 23, 42, 0.06);\n    box-shadow: 0 24px 48px -12px rgba(15, 23, 42, 0.22), 0 8px 24px -8px rgba(15, 23, 42, 0.12);\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    font-family: \"Poppins\", sans-serif;\n}\n\n.style-module_chatbot__vxZf3.style-module_open__wk2iz {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0) scale(1);\n    animation: style-module_cbwPopIn__hXwvF 0.22s ease;\n}\n\n.style-module_chatbot__vxZf3.style-module_maximized__Iz0vk {\n    width: 100vw;\n    height: 100vh;\n    max-width: 100vw;\n    max-height: 100vh;\n    right: 0;\n    bottom: 0;\n    border-radius: 0;\n    transition: opacity 0.2s ease, transform 0.2s ease, width 0.25s ease,\n        height 0.25s ease, max-width 0.25s ease, max-height 0.25s ease,\n        right 0.25s ease, bottom 0.25s ease, border-radius 0.25s ease;\n}\n\n/* ChatBot header */\n.style-module_chatbot__vxZf3 header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    flex: none;\n    background: var(--cbw-primary, #eb4034);\n    color: #fff;\n    padding: 16px 16px 16px 18px;\n}\n\n.style-module_headerInfo__ANTjR {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    min-width: 0;\n}\n\n.style-module_headerAvatar__Zvyi8 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    width: 34px;\n    height: 34px;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.18);\n    color: #fff;\n}\n\n.style-module_chatbot__vxZf3 header h2 {\n    margin: 0;\n    color: #fff;\n    font-size: 1.05em;\n    font-weight: 600;\n    letter-spacing: 0.2px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.style-module_headerActions__pPu-F {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    flex: none;\n}\n\n.style-module_closeBtn__gzNIo,\n.style-module_maximizeBtn__VT0xf {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: transparent;\n    color: #fff;\n    cursor: pointer;\n    opacity: 0.85;\n    transition: background 0.15s ease, opacity 0.15s ease;\n}\n\n.style-module_closeBtn__gzNIo:hover,\n.style-module_maximizeBtn__VT0xf:hover {\n    opacity: 1;\n    background: rgba(255, 255, 255, 0.16);\n}\n\n.style-module_chatbox__8B0hv {\n    flex: 1 1 auto;\n    overflow-y: auto;\n    scrollbar-width: thin;\n    scrollbar-color: #cbd5e1 transparent;\n    margin: 0;\n    padding: 16px 14px;\n    display: flex;\n    flex-direction: column;\n    background: #fafafa;\n}\n\n.style-module_chat__NBxBu {\n    display: flex;\n    align-items: flex-end;\n    list-style: none;\n    margin-top: 14px;\n    max-width: 100%;\n}\n\n.style-module_chat__NBxBu.style-module_grouped__LDa-Y {\n    margin-top: 4px;\n}\n\n.style-module_chatbox__8B0hv::-webkit-scrollbar,\n.style-module_chatInput__ap6uI textarea::-webkit-scrollbar {\n    width: 6px;\n}\n\n.style-module_chatbox__8B0hv::-webkit-scrollbar-track,\n.style-module_chatInput__ap6uI textarea::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n.style-module_chatbox__8B0hv::-webkit-scrollbar-thumb,\n.style-module_chatInput__ap6uI textarea::-webkit-scrollbar-thumb {\n    background: #cbd5e1;\n    border-radius: 25px;\n}\n\n.style-module_chatbox__8B0hv::-webkit-scrollbar-thumb:hover,\n.style-module_chatInput__ap6uI textarea::-webkit-scrollbar-thumb:hover {\n    background: #94a3b8;\n}\n\n.style-module_avatar__U-ufJ {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    height: 28px;\n    width: 28px;\n    color: var(--cbw-primary, #eb4034);\n    background: color-mix(in srgb, var(--cbw-primary, #eb4034) 14%, #fff);\n    border-radius: 50%;\n    margin: 0 8px 0 0;\n}\n\n.style-module_incoming__7r3wQ.style-module_grouped__LDa-Y .style-module_avatar__U-ufJ {\n    visibility: hidden;\n}\n\n.style-module_outgoing__eI-Kd {\n    justify-content: flex-end;\n}\n\n.style-module_bubble__gohsH {\n    margin: 0;\n    color: #fff;\n    font-size: 0.9em;\n    max-width: 78%;\n    padding: 9px 13px;\n    border-radius: 16px 16px 16px 4px;\n    background: var(--cbw-primary, #eb4034);\n    line-height: 1.4;\n    word-break: break-word;\n    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);\n}\n\n.style-module_incoming__7r3wQ .style-module_bubble__gohsH {\n    color: #1f2430;\n    background: #f0f1f5;\n    border-radius: 16px 16px 16px 4px;\n}\n\n.style-module_outgoing__eI-Kd .style-module_bubble__gohsH {\n    background: var(--cbw-primary, #eb4034);\n    border-radius: 16px 16px 4px 16px;\n}\n\n.style-module_errorBubble__PaJbs {\n    color: #b3261e;\n    background: #fdecea !important;\n    border: 1px solid #f6c6c2;\n}\n\n.style-module_typingBubble__Dpd3r {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    color: #64748b;\n    font-style: italic;\n}\n\n.style-module_typingDots__sv6N6 {\n    display: inline-flex;\n    align-items: center;\n    gap: 3px;\n}\n\n.style-module_typingDots__sv6N6 i {\n    display: block;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    background: currentColor;\n    animation: style-module_cbwBounce__g8i7y 1s infinite ease-in-out;\n}\n\n.style-module_typingDots__sv6N6 i:nth-child(2) {\n    animation-delay: 0.15s;\n}\n\n.style-module_typingDots__sv6N6 i:nth-child(3) {\n    animation-delay: 0.3s;\n}\n\n.style-module_streamCursor__T2Sy1 {\n    display: inline-block;\n    width: 2px;\n    height: 1em;\n    margin-left: 2px;\n    background: currentColor;\n    vertical-align: text-bottom;\n    animation: style-module_cbwBlink__rM3oS 0.9s steps(1) infinite;\n}\n\n@keyframes style-module_cbwBlink__rM3oS {\n    0%, 49% {\n        opacity: 1;\n    }\n    50%, 100% {\n        opacity: 0;\n    }\n}\n\n.style-module_chatInput__ap6uI {\n    flex: none;\n    display: flex;\n    align-items: flex-end;\n    gap: 8px;\n    background: #fff;\n    padding: 10px 12px;\n    border-top: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.style-module_chatInput__ap6uI textarea {\n    height: 40px;\n    max-height: 100px;\n    flex: 1 1 auto;\n    border: 1px solid rgba(15, 23, 42, 0.1);\n    outline: none;\n    font-family: inherit;\n    font-size: 0.9em;\n    resize: none;\n    padding: 10px 14px;\n    border-radius: 20px;\n    background: #f5f6f8;\n    overflow-y: auto;\n    transition: border-color 0.15s ease, background 0.15s ease;\n}\n\n.style-module_chatInput__ap6uI textarea:focus {\n    background: #fff;\n    border-color: var(--cbw-primary, #eb4034);\n}\n\n.style-module_sendBtn__CgRBw {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: none;\n    width: 40px;\n    height: 40px;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--cbw-primary, #eb4034);\n    color: #fff;\n    cursor: pointer;\n    transition: transform 0.15s ease, opacity 0.15s ease;\n}\n\n.style-module_sendBtn__CgRBw:hover:not(:disabled) {\n    transform: scale(1.06);\n}\n\n.style-module_sendBtn__CgRBw:active:not(:disabled) {\n    transform: scale(0.94);\n}\n\n.style-module_sendBtn__CgRBw:disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n}\n\n@media (max-width: 767px) {\n    .style-module_chatbot__vxZf3 {\n        width: 100%;\n        max-width: 100%;\n        height: 100%;\n        max-height: 100%;\n        border-radius: 0;\n        border: none;\n        bottom: 0;\n        right: 0;\n    }\n\n    .style-module_chatbot__vxZf3 header {\n        border-radius: 0;\n    }\n\n    .style-module_chatbotToggler__UG1t1.style-module_open__wk2iz {\n        display: none;\n    }\n\n    .style-module_maximizeBtn__VT0xf {\n        display: none;\n    }\n}\n";
var styles = {"chatbotToggler":"style-module_chatbotToggler__UG1t1","open":"style-module_open__wk2iz","togglerIcon":"style-module_togglerIcon__dWA6z","togglerIconClose":"style-module_togglerIconClose__H1lw4","togglerHidden":"style-module_togglerHidden__p0mzJ","chatbot":"style-module_chatbot__vxZf3","maximized":"style-module_maximized__Iz0vk","headerInfo":"style-module_headerInfo__ANTjR","headerAvatar":"style-module_headerAvatar__Zvyi8","headerActions":"style-module_headerActions__pPu-F","closeBtn":"style-module_closeBtn__gzNIo","maximizeBtn":"style-module_maximizeBtn__VT0xf","chatbox":"style-module_chatbox__8B0hv","chat":"style-module_chat__NBxBu","grouped":"style-module_grouped__LDa-Y","chatInput":"style-module_chatInput__ap6uI","avatar":"style-module_avatar__U-ufJ","incoming":"style-module_incoming__7r3wQ","outgoing":"style-module_outgoing__eI-Kd","bubble":"style-module_bubble__gohsH","errorBubble":"style-module_errorBubble__PaJbs","typingBubble":"style-module_typingBubble__Dpd3r","typingDots":"style-module_typingDots__sv6N6","streamCursor":"style-module_streamCursor__T2Sy1","sendBtn":"style-module_sendBtn__CgRBw"};
styleInject(css_248z);

const ChatBotWidget = ({ callApi, streamApi, chatbotName = "Chatbot", isTypingMessage = "Typing...", IncommingErrMsg = "Oops! Something went wrong. Please try again.", primaryColor = "#eb4034", inputMsgPlaceholder = "Send a Message", chatIcon = React.createElement(ChatIcon, null), botIcon = React.createElement(BotIcon, null), botFontStyle = {}, typingFontStyle = {}, handleNewMessage, onBotResponse, messages = [], useInnerHTML = false, }) => {
    const [userMessage, setUserMessage] = React.useState("");
    const [typing, setTyping] = React.useState(false);
    const [streamingText, setStreamingText] = React.useState(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMaximized, setIsMaximized] = React.useState(false);
    const chatInputRef = React.useRef(null);
    const chatboxRef = React.useRef(null);
    const handleChat = () => __awaiter(void 0, void 0, void 0, function* () {
        const trimmedMessage = userMessage.trim();
        if (!trimmedMessage)
            return;
        setUserMessage("");
        if (chatInputRef.current) {
            chatInputRef.current.style.height = "auto";
        }
        // Display outgoing message
        const outgoingMessage = { role: "user", content: trimmedMessage };
        handleNewMessage === null || handleNewMessage === void 0 ? void 0 : handleNewMessage(outgoingMessage);
        try {
            setTyping(true);
            let botResponse;
            if (streamApi) {
                // Streaming: onChunk updates the live bubble as text arrives.
                botResponse = yield streamApi(trimmedMessage, (textSoFar) => setStreamingText(textSoFar));
            }
            else if (callApi) {
                botResponse = yield callApi(trimmedMessage);
            }
            else {
                throw new Error("ChatBotWidget: either the `callApi` or `streamApi` prop is required.");
            }
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
            setStreamingText(null);
        }
    });
    const handleInputChange = (event) => {
        setUserMessage(event.target.value);
        const el = chatInputRef.current;
        if (!el)
            return;
        // Reset height to auto before calculating new height
        el.style.height = "auto";
        // Adjust the height dynamically based on content
        el.style.height = `${Math.min(el.scrollHeight, 80)}px`;
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey && window.innerWidth > 800) {
            event.preventDefault();
            handleChat();
        }
    };
    const toggleChatbot = () => setIsOpen((open) => {
        if (open)
            setIsMaximized(false); // reset so it reopens at normal size
        return !open;
    });
    const closeChat = () => {
        setIsOpen(false);
        setIsMaximized(false);
    };
    const toggleMaximize = () => setIsMaximized((maximized) => !maximized);
    React.useEffect(() => {
        var _a;
        // Scroll to bottom of chatbox when messages change
        (_a = chatboxRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
            top: chatboxRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, typing, streamingText]);
    const canSend = userMessage.trim().length > 0 && !typing;
    return (React.createElement("div", { className: "chatbot-container", style: { ["--cbw-primary"]: primaryColor } },
        React.createElement("button", { type: "button", className: `${styles.chatbotToggler} ${isOpen ? styles.open : ""} ${isMaximized ? styles.togglerHidden : ""}`, onClick: toggleChatbot, "aria-label": isOpen ? "Close chat" : "Open chat", "aria-expanded": isOpen, "aria-hidden": isMaximized },
            React.createElement("span", { className: styles.togglerIcon }, chatIcon),
            React.createElement("span", { className: `${styles.togglerIcon} ${styles.togglerIconClose}` },
                React.createElement(CloseIcon, null))),
        React.createElement("div", { className: `${styles.chatbot} ${isOpen ? styles.open : ""} ${isMaximized ? styles.maximized : ""}`, role: "dialog", "aria-label": `${chatbotName} chat window`, "aria-hidden": !isOpen },
            React.createElement("header", null,
                React.createElement("div", { className: styles.headerInfo },
                    React.createElement("span", { className: styles.headerAvatar }, botIcon),
                    React.createElement("h2", null, chatbotName)),
                React.createElement("div", { className: styles.headerActions },
                    React.createElement("button", { type: "button", className: styles.maximizeBtn, onClick: toggleMaximize, "aria-label": isMaximized ? "Restore chat size" : "Maximize chat", "aria-pressed": isMaximized }, isMaximized ? React.createElement(CollapseIcon, null) : React.createElement(ExpandIcon, null)),
                    React.createElement("button", { type: "button", className: styles.closeBtn, onClick: closeChat, "aria-label": "Close chat" },
                        React.createElement(CloseIcon, null)))),
            React.createElement("ul", { className: styles.chatbox, ref: chatboxRef, "aria-live": "polite" },
                messages.map((msg, index) => {
                    const isUser = msg.role === "user";
                    const isError = msg.role === "error";
                    const prevMsg = messages[index - 1];
                    const grouped = !!prevMsg && (prevMsg.role === "user") === isUser;
                    return (React.createElement("li", { key: index, className: `${styles.chat} ${isUser ? styles.outgoing : styles.incoming} ${grouped ? styles.grouped : ""}` },
                        !isUser && React.createElement("span", { className: styles.avatar }, botIcon),
                        React.createElement("p", Object.assign({ className: `${styles.bubble} ${isError ? styles.errorBubble : ""}`, style: !isUser ? botFontStyle : undefined }, (useInnerHTML
                            ? { dangerouslySetInnerHTML: { __html: msg.content } }
                            : { children: msg.content })))));
                }),
                typing && streamingText && (
                // Streaming reply in progress: show the accumulated text with a
                // blinking cursor instead of the "typing..." placeholder.
                React.createElement("li", { className: `${styles.chat} ${styles.incoming}` },
                    React.createElement("span", { className: styles.avatar }, botIcon),
                    React.createElement("p", { className: styles.bubble, style: botFontStyle },
                        streamingText,
                        React.createElement("span", { className: styles.streamCursor, "aria-hidden": "true" })))),
                typing && !streamingText && (React.createElement("li", { className: `${styles.chat} ${styles.incoming}` },
                    React.createElement("span", { className: styles.avatar }, botIcon),
                    React.createElement("p", { className: `${styles.bubble} ${styles.typingBubble}`, style: typingFontStyle },
                        isTypingMessage,
                        React.createElement("span", { className: styles.typingDots, "aria-hidden": "true" },
                            React.createElement("i", null),
                            React.createElement("i", null),
                            React.createElement("i", null)))))),
            React.createElement("div", { className: styles.chatInput },
                React.createElement("textarea", { ref: chatInputRef, placeholder: inputMsgPlaceholder, spellCheck: "false", required: true, value: userMessage, onChange: handleInputChange, onKeyDown: handleKeyPress, maxLength: 500, rows: 1, "aria-label": inputMsgPlaceholder }),
                React.createElement("button", { type: "button", className: styles.sendBtn, onClick: handleChat, disabled: !canSend, "aria-label": "Send message" },
                    React.createElement(SendIcon, null))))));
};
const ChatIcon = () => (React.createElement("svg", { viewBox: "0 0 24 24", width: 22, height: 22, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8c-1.06 0-2.07-.2-3-.57L4.5 20l1.07-3.5A7.96 7.96 0 0 1 4 12Z", stroke: "currentColor", strokeWidth: 1.8, strokeLinejoin: "round", strokeLinecap: "round" })));
const CloseIcon = () => (React.createElement("svg", { viewBox: "0 0 24 24", width: 20, height: 20, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M6 6l12 12M18 6 6 18", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })));
const ExpandIcon = () => (React.createElement("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7", stroke: "currentColor", strokeWidth: 1.8, strokeLinejoin: "round", strokeLinecap: "round" })));
const CollapseIcon = () => (React.createElement("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7", stroke: "currentColor", strokeWidth: 1.8, strokeLinejoin: "round", strokeLinecap: "round" })));
const SendIcon = () => (React.createElement("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M21 3 3 10.5l7.5 2.9L13.5 21 21 3Z", stroke: "currentColor", strokeWidth: 1.8, strokeLinejoin: "round", strokeLinecap: "round" }),
    React.createElement("path", { d: "M10.5 13.4 21 3", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" })));
const BotIcon = () => (React.createElement("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("rect", { x: 4, y: 8, width: 16, height: 12, rx: 4, stroke: "currentColor", strokeWidth: 1.8 }),
    React.createElement("path", { d: "M12 8V5", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" }),
    React.createElement("circle", { cx: 12, cy: 3.5, r: 1.2, fill: "currentColor" }),
    React.createElement("circle", { cx: 9, cy: 14, r: 1.3, fill: "currentColor" }),
    React.createElement("circle", { cx: 15, cy: 14, r: 1.3, fill: "currentColor" }),
    React.createElement("path", { d: "M9 17.5c1 .8 5 .8 6 0", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" })));

exports.ChatBotWidget = ChatBotWidget;
