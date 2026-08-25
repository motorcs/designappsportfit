import { useState } from "react";
import { chats, faq } from "./data";
import { HandIcon, ChevronRight } from "./icons";

export function ChatScreen() {
  const [tab, setTab] = useState<"chats" | "questions">("chats");

  return (
    <>
      <div className="screen-header">
        <h1>Сообщения</h1>
      </div>
      <div className="msg-tabs">
        <button
          className={`msg-tab ${tab === "chats" ? "active" : ""}`}
          onClick={() => setTab("chats")}
        >
          Чаты
        </button>
        <button
          className={`msg-tab ${tab === "questions" ? "active" : ""}`}
          onClick={() => setTab("questions")}
        >
          Вопросы
        </button>
      </div>
      {tab === "chats" ? (
        <div className="chat-list">
          {chats.map((c) => (
            <button key={c.name} className="chat-item">
              <div className="chat-avatar">
                <HandIcon />
              </div>
              <div className="chat-body">
                <p className="chat-name">{c.name}</p>
                <p className="chat-preview">{c.preview}</p>
              </div>
              <span className="chat-time">{c.time}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="chat-list">
          {faq.map((f) => (
            <button key={f} className="faq-item">
              {f}
              <ChevronRight />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
