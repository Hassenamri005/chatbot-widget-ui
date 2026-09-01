import { useState } from "react";
// Imported straight from the library source so this app always reflects
// the current state of the widget without needing a build/publish step.
import { ChatBotWidget } from "../../src/components";

interface Message {
  role: string;
  content: string;
}

const App = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "user", content: "hello" },
    { role: "assistant", content: "hi! I'm the local test build of the widget." },
  ]);

  // Fake "API call" so the demo works without a backend: it just echoes
  // the message back after a short delay. Swap this out for a real
  // fetch() call to try the widget against your own API.
  const callApi = async (message: string): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return `You said: "${message}"`;
  };

  const handleNewMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleBotResponse = (response: string) => {
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
  };

  return (
    <div>
      <h1>chatbot-widget-ui — local test</h1>
      <ChatBotWidget
        callApi={callApi}
        onBotResponse={handleBotResponse}
        handleNewMessage={handleNewMessage}
        messages={messages}
        primaryColor="#3498db"
        inputMsgPlaceholder="Type your message..."
        chatbotName="Customer Support"
        isTypingMessage="Typing..."
        IncommingErrMsg="Oops! Something went wrong. Try again."
      />
    </div>
  );
};

export default App;
