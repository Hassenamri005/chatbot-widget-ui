import React from "react";
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
declare const ChatBotWidget: ({ callApi, chatbotName, isTypingMessage, IncommingErrMsg, primaryColor, inputMsgPlaceholder, chatIcon, botIcon, botFontStyle, typingFontStyle, handleNewMessage, onBotResponse, messages, useInnerHTML, }: ChatWidgetIOProps) => React.JSX.Element;
export default ChatBotWidget;
