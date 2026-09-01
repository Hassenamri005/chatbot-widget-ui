## Overview

![Chatbot Demo](./chatbot.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]() [![npm version](https://img.shields.io/badge/npm-v10.9.0-green)](https://www.npmjs.com/package/chatbot-widget-ui) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

**Authors**: [Hassen Amri](https://www.linkedin.com/in/hassenamri005/), [Raed Lazreg](https://www.linkedin.com/in/raid-lazreg-61378127a/), [Taha Berguiga](https://www.linkedin.com/in/taha-berguiga/)

**NPM Package Link:**
[chatbot-widget-ui](https://www.npmjs.com/package/chatbot-widget-ui)

**Package Github Repository Link:**
[chatbot-widget-ui](https://github.com/Hassenamri005/chatbot-widget-ui)

**chatbot-widget-ui** is a library for creating a `React.js` chatbot widget UI, built with `TypeScript`. It offers extensive customization features for building interactive chatbot experiences and **supports integration with any LLM API to generate dynamic responses**.

**Features**:

- Implemented using `React.js` and `TypeScript` for robustness and type safety.
- Provides a customizable user interface for integrating chatbot functionality into web applications.
- Offers various configuration options to tailor the chatbot widget's appearance and behavior.
- **Supports integration with any LLM API for generating dynamic responses.**
- Displays a bot icon with error messages.
- Allows customization of the "is typing" message font style.

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
  onBotResponse={handleBotResponse}
  handleNewMessage={handleNewMessage}
  messages={messages}
  primaryColor="#3498db"
  inputMsgPlaceholder="Type your message..."
  chatbotName="Customer Support"
  isTypingMessage="Typing..."
  IncommingErrMsg="Oops! Something went wrong. Try again."
  chatIcon={<div>O</div>}
  botIcon={<div>B</div>}
  botFontStyle={{
    fontFamily: "Arial",
    fontSize: "14px",
    color: "red",
  }}
  typingFontStyle={{
    fontFamily: "Arial",
    fontSize: "12px",
    color: "#888",
    fontStyle: "italic",
  }}
  useInnerHTML={true}
/>
```

### Usage Example

```javascript
import React, { useState } from "react";
import { ChatBotWidget } from "chatbot-widget-ui";

const App = () => {
  // Save all messages conversation
  // Example: [{'role': 'user', 'content': 'hello'}, {'role': 'assistant', 'content': 'Hello, how can I assist you today!'}, ...]
    const [messages, setMessages] = useState<any[]>([
    {
      role: "user",
      content: "hello",
    },
    {
      role: "assistant",
      content: "hi!",
    },
    {
      role: "user",
      content: "who are you",
    },
  ]);

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

  const handleBotResponse = (response: string) => {
    // Handle the bot's response here
    console.log("Bot Response:", response);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: response },
    ]);
  };

  const handleNewMessage = (message: any) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div>
      <ChatBotWidget
          callApi={customApiCall}
          onBotResponse={handleBotResponse}
          handleNewMessage={handleNewMessage}
          messages={messages}
          primaryColor="#3498db"
          inputMsgPlaceholder="Type your message..."
          chatbotName="Customer Support"
          isTypingMessage="Typing..."
          IncommingErrMsg="Oops! Something went wrong. Try again."
          chatIcon={<div>O</div>}
          botIcon={<div>B</div>}
          botFontStyle={{
            fontFamily: "Arial",
            fontSize: "14px",
            color: "red",
          }}
          typingFontStyle={{
            fontFamily: "Arial",
            fontSize: "12px",
            color: "#888",
            fontStyle: "italic",
          }}
          useInnerHTML={true}
        />
    </div>
  );
};

export default App;
```

## Chatbot Component Props

| Prop Name             | Type     | Default Value                                     | Description                                                                         |
| --------------------- | -------- | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `callApi`             | function | N/A                                               | Sends an API request to retrieve text completion.                                   |
| `chatbotName`         | string   | `"Chatbot"`                                       | The name/title of the chatbot displayed in the header.                              |
| `isTypingMessage`     | string   | `"Typing..."`                                     | The message displayed when the chatbot is typing a response.                        |
| `IncommingErrMsg`     | string   | `"Oops! Something went wrong. Please try again."` | The error message displayed when an API request fails.                              |
| `primaryColor`        | string   | `"#eb4034"`                                       | The primary color used for styling elements like headers, buttons, and backgrounds. |
| `inputMsgPlaceholder` | string   | `"Send a Message"`                                | The placeholder text shown in the chat input textarea.                              |
| `chatIcon`            | any      | `ChatIcon()` (ReactElement)                       | The icon displayed in the chatbot toggler button.                                   |
| `botIcon`             | any      | `BotIcon()` (ReactElement)                        | The icon displayed with bot messages and error messages.                            |
| `botFontStyle`        | object   | `{}`                                              | The font style for bot messages.                                                    |
| `typingFontStyle`     | object   | `{}`                                              | The font style for the "is typing" message.                                         |
| `handleNewMessage`    | function | N/A                                               | Processes new messages and updates the conversation state.                          |
| `onBotResponse`       | function | N/A                                               | Processes new messages and updates the conversation state.                          |
| `messages`            | array    | `[]`                                              | The array of messages to display in the chat.                                       |
| `useInnerHTML`        | Booloean | false                                             | Determines whether HTML content in messages should be rendered as inner HTML.       |
|  |

## Deployment

```bash
nvm install 16

nvm use 16

npm run rollup-build-lib

npm login

npm publish --access public
```

## Update dist

Note: Only after updating dist content can other project receive updates

```bash
nvm use 16

npm run rollup-build-lib
```

## Encounter issue

```bash
nvm use 16
rm -rf package-lock.json node_modules
npm install
```
