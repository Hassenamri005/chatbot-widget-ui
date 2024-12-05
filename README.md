## Overview

![Chatbot Demo](./chatbot.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]() [![npm version](https://img.shields.io/badge/npm-v10.9.0-green)](https://www.npmjs.com/package/chatbot-widget-ui) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

**Authors**: [Hassen Amri](https://www.linkedin.com/in/hassenamri005/), [Raed Lazreg](https://www.linkedin.com/in/raid-lazreg-61378127a/), [Taha Berguiga](https://www.linkedin.com/in/taha-berguiga/)

**NPM Package Link:**
[chatbot-widget-ui](https://www.npmjs.com/package/chatbot-widget-ui)

**Package Github Repository Link:**
[chatbot-widget-ui](https://github.com/Hassenamri005/chatbot-widget-ui)

**chatbot-widget-ui** is a library for creating a `React.js` chatbot widget UI, built with `TypeScript`. It offers extensive customization features for building interactive chatbot experiences and **`supports` integration with any LLM API to generate dynamic responses**.

**Features**:

- Implemented using `React.js` and `TypeScript` for robustness and type safety.
- Provides a customizable user interface for integrating chatbot functionality into web applications.
- Offers various configuration options to tailor the chatbot widget's appearance and behavior.
- **`Supports` integration with any `LLM API` for generating dynamic responses.**

## Usage

The library enables easy integration of chatbot features into React.js applications, enhancing user interaction and experience.

1. Install the latest version:

```bash
npm install chatbot-widget-ui@latest
```

2. Import the library:

```javascript
import { ChatBotWidget } from "chatbot-widget-ui";
```

3. Use the `ChatBotWidget` component:

```javascript
<ChatBotWidget
  callApi={customApiCall}
  primaryColor="#3498db"
  inputMsgPlaceholder="Type your message..."
  chatbotName="Customer Support"
  isTypingMessage="Typing..."
  IncommingErrMsg="Oops! Something went wrong. Try again."
  handleNewMessage={setMessages}
  chatIcon={<div>O</div>}
/>
```

### Usage Example

```javascript
import React from "react";
import { ChatBotWidget } from "chatbot-widget-ui";

const App = () => {
  // save all messages conversation
  // Example: [{'type': 'user', 'text': 'hello'}, {'type': 'bot', 'text': 'Hello, how can i assist you today!'}, ...]
  const [messages, setMessages] = useState<string[]>([]);

  const customApiCall = async (message: string): Promise<string> => {
    const response = await fetch("https://example.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userMessage: message }),
    });
    const data = await response.json();
    return data.content;
  };

  return (
    <div>
      <ChatBotWidget
        callApi={customApiCall}
        primaryColor="#3498db"
        inputMsgPlaceholder="Type your message..."
        chatbotName="Customer Support"
        isTypingMessage="Typing..."
        IncommingErrMsg="Oops! Something went wrong. Try again."
        handleNewMessage={setMessages}
        chatIcon={<div>O</div>}
      />
    </div>
  );
};

export default App;
```

## Chatbot Component Props

| Prop Name             | Type       | Default Value                                     | Description                                                                         |
| --------------------- | ---------- | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `callApi`             | function   | N/A                                               | Sends an API request to retrieve text completion.                                   |
| `chatbotName`         | string     | `"Chatbot"`                                       | The name/title of the chatbot displayed in the header.                              |
| `isTypingMessage`     | string     | `"Typing..."`                                     | The message displayed when the chatbot is typing a response.                        |
| `IncommingErrMsg`     | string     | `"Oops! Something went wrong. Please try again."` | The error message displayed when an API request fails.                              |
| `primaryColor`        | string     | `"#eb4034"`                                       | The primary color used for styling elements like headers, buttons, and backgrounds. |
| `inputMsgPlaceholder` | string     | `"Send a Message"`                                | The placeholder text shown in the chat input textarea.                              |
| `chatIcon`            | any        | `ChatIcon()` (ReactElement)                       | The icon displayed in the chatbot toggler button.                                   |
| `handleNewMessage`    | `function` | N/A                                               | Placeholder for a function to process new messages.                                 |
