import React from "react";
import "./style.css";
interface ChatWidgetIOProps {
    callApi: (message: string) => Promise<string>;
    chatbotName?: string;
    isTypingMessage?: string;
    IncommingErrMsg?: string;
    primaryColor?: string;
    inputMsgPlaceholder?: string;
    chatIcon?: any;
    botIcon?: any;
    botFontStyle?: React.CSSProperties;
    typingFontStyle?: React.CSSProperties;
    handleNewMessage?: (message: any) => void;
    onBotResponse?: (response: string) => void;
    messages?: any[];
}
declare const ChatBotWidget: ({ callApi, chatbotName, isTypingMessage, IncommingErrMsg, primaryColor, inputMsgPlaceholder, chatIcon, botIcon, botFontStyle, typingFontStyle, handleNewMessage, onBotResponse, messages, }: ChatWidgetIOProps) => React.JSX.Element;
export default ChatBotWidget;
