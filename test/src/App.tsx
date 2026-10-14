import { useRef, useState } from "react";
// Installed from npm (https://www.npmjs.com/package/chatbot-widget-ui) so
// this app consumes the published library like any other project would.
import { ChatBotWidget } from "chatbot-widget-ui";
import { streamGenerate, type MairieConfig } from "./api";
import { renderMarkdown } from "./markdown";

interface Message {
  role: string;
  content: string;
}

// crypto.randomUUID() only exists in secure contexts (HTTPS or localhost).
// When the app is served over plain HTTP from an IP/hostname (e.g. during
// local network testing), it's undefined even though `crypto` itself is
// present. Fall back to crypto.getRandomValues, which is available in
// insecure contexts too, to build an equivalent v4 UUID.
const generateId = (): string => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10
    const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
  // Last-resort, non-cryptographic fallback.
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// Mairie de Buc (78530).
const MAIRIE_BUC: MairieConfig = {
  mairie_nom: "Mairie de Buc",
  mairie_adresse: "3 rue des Frères Robin, CS 90236, 78530 Buc",
  maire_nom: "Stéphane Grasset",
};

const App = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: renderMarkdown("Comment puis-je vous aider ?"),
    },
  ]);

  // Session id for the conversation: the backend keeps history keyed on
  // this thread_id. Generated once per page load and never persisted, so a
  // refresh simply starts a fresh conversation (as intended).
  const threadIdRef = useRef<string>(generateId());

  // Messages are rendered via useInnerHTML below, so anything reaching
  // state here — user input, bot replies, the widget's own error text —
  // goes through renderMarkdown first: it HTML-escapes the raw text before
  // applying formatting, so nothing typed by a user (or returned by the
  // bot) can inject arbitrary markup.
  const handleNewMessage = (message: Message) => {
    setMessages((prev) => [...prev, { ...message, content: renderMarkdown(message.content) }]);
  };

  const handleBotResponse = (response: string) => {
    setMessages((prev) => [...prev, { role: "assistant", content: renderMarkdown(response) }]);
  };

  // Streams the reply from the real backend; ChatBotWidget updates the
  // bubble live as chunks come in via onChunk.
  const streamApi = (message: string, onChunk: (textSoFar: string) => void) =>
    streamGenerate(threadIdRef.current, message, MAIRIE_BUC, onChunk);

  return (
    <div>
      {/* Chatbot is configured for the mairie de Buc (see MAIRIE_BUC), but
          villedebuc.fr sends "X-Frame-Options: SAMEORIGIN" and refuses to
          be embedded from any other origin — that header can't be worked
          around from this page. saintpierrelesnemours.fr doesn't set one,
          so it's used here purely for a realistic page-context preview;
          the chatbot itself stays outside the iframe (fixed-position,
          rendered by this app) so it keeps working normally on top of it. */}
      <iframe
        src="https://saintpierrelesnemours.fr/fr/"
        title="Saint-Pierre-lès-Nemours site preview"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
      />
      <ChatBotWidget
        streamApi={streamApi}
        onBotResponse={handleBotResponse}
        handleNewMessage={handleNewMessage}
        messages={messages}
        useInnerHTML
        primaryColor="#3498db"
        inputMsgPlaceholder="Écrivez votre message..."
        chatbotName="Mairie de Buc"
        isTypingMessage="En train d'écrire..."
        IncommingErrMsg="Oups ! Une erreur est survenue. Veuillez réessayer."
      />
    </div>
  );
};

export default App;
