"use client";
import { useState } from "react";

interface Message {
  id: number;
  text: string;
  category: string;
}

export default function TicketConversation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Refunds");

  const addMessage = () => {
    if (!text.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), text: text.trim(), category },
    ]);
    setText("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.length === 0 ? (
          <p className="text-sm text-gray-500">No requests yet.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-lg border p-2 bg-white shadow-sm"
            >
              <p className="text-xs font-semibold text-gray-700">
                {msg.category}
              </p>
              <p className="text-gray-900">{msg.text}</p>
            </div>
          ))
        )}
      </div>
      <div className="border-t bg-gray-50 p-2 flex gap-2">
        <select
          className="border rounded p-1 text-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Refunds</option>
          <option>Order Status</option>
          <option>Admin Support</option>
        </select>
        <input
          className="flex-1 border rounded p-1 text-sm"
          placeholder="Enter request..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="rounded bg-blue-600 text-white px-3 text-sm"
          onClick={addMessage}
        >
          Add
        </button>
      </div>
    </div>
  );
}
