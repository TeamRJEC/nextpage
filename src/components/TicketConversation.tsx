"use client";
import { useState } from "react";

interface Message {
  id: number;
  author: "user" | "support";
  text: string;
}

const initialMessages: Message[] = [
  { id: 1, author: "user", text: "Hi, I need help with my order." },
  { id: 2, author: "support", text: "Sure, what seems to be the issue?" },
  { id: 3, author: "user", text: "I received the wrong item." },
  { id: 4, author: "support", text: "I'm sorry about that! We will send you the correct item right away." },
];

export default function TicketConversation() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages([...messages, { id: Date.now(), author: "user", text: trimmed }]);
    setInput("");
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[75%] rounded-md p-2 text-sm ${m.author === "user" ? "self-end bg-blue-500 text-white" : "self-start bg-gray-200 text-gray-900"}`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-gray-200 p-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded border border-gray-300 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button
          onClick={sendMessage}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
