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
    handleNewMessage?: (messages: any) => void;
}
declare const ChatBotWidget: ({ callApi, chatbotName, isTypingMessage, IncommingErrMsg, primaryColor, inputMsgPlaceholder, chatIcon, handleNewMessage, }: ChatWidgetIOProps) => React.JSX.Element;
export default ChatBotWidget;
