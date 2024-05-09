## Overview of my-chatbot-widget

![Chatbot Demo](./chatbot.png)

**my-chatbot-widget** is a React.js Chatbot Widget UI library developed using TypeScript, offering extensive customization options.

- **Authors**: [Hassen Amri](https://www.linkedin.com/in/hassenamri005/), [Raed Lazreg](https://www.linkedin.com/in/raid-lazreg-61378127a/), [Taha Berguiga](https://www.linkedin.com/in/taha-berguiga/)
- **License**: MIT

**Features**:

- Implemented using React.js and TypeScript for robustness and type safety.
- Provides a customizable user interface for integrating chatbot functionality into web applications.
- Offers various configuration options to tailor the chatbot widget's appearance and behavior.

## Usage

The library enables easy integration of chatbot features into React.js applications, enhancing user interaction and experience.

1. Install the latest version:

```bash
npm install my-chatbot-widget@latest
```

2. Import the library:

```javascript
import { ChatBotWidget } from "my-chatbot-widget";
```

3. Use the `ChatBotWidget` component:

```javascript
<ChatBotWidget
  apiKey="YOUR_OPENAI_API_KEY_HERE"
  chatIcon={<div>O</div>}
  chatbotName="Customer Support"
  isTypingMessage="Typing..."
  IncommingErrMsg="Oops! Something went wrong. Try again."
  primaryColor="#eb4034"
  inputMsgPlaceholder="Send a Message"
/>
```

### Usage Example

```javascript
import React from "react";
import { ChatBotWidget } from "my-chatbot-widget";

const App = () => {
  return (
    <div>
      <ChatBotWidget
        apiKey="YOUR_OPENAI_API_KEY_HERE"
        chatIcon={<div>O</div>}
        chatbotName="Customer Support"
        isTypingMessage="Typing..."
        IncommingErrMsg="Oops! Something went wrong. Try again."
        primaryColor="#eb4034"
        inputMsgPlaceholder="Send a Message"
      />
    </div>
  );
};

export default App;
```

## Chatbot Component Props

| Prop Name             | Type   | Default Value                                     | Description                                                                         |
| --------------------- | ------ | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `apiKey`              | string |                                                   | The API key required for the OpenAI API integration.                                |
| `chatbotName`         | string | `"Chatbot"`                                       | The name/title of the chatbot displayed in the header.                              |
| `isTypingMessage`     | string | `"Typing..."`                                     | The message displayed when the chatbot is typing a response.                        |
| `IncommingErrMsg`     | string | `"Oops! Something went wrong. Please try again."` | The error message displayed when an API request fails.                              |
| `primaryColor`        | string | `"#eb4034"`                                       | The primary color used for styling elements like headers, buttons, and backgrounds. |
| `inputMsgPlaceholder` | string | `"Send a Message"`                                | The placeholder text shown in the chat input textarea.                              |
| `chatIcon`            | any    | `ChatIcon()` (SVG component)                      | The icon displayed in the chatbot toggler button.                                   |

**License**:
The **my-chatbot-widget** is distributed under the MIT License, allowing for flexible usage and modification.
