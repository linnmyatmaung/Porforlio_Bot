import { useEffect, useRef } from "react";
import { Message } from "@/app/types/message";
import MessageBubble from "./MessageBubble";

type Props = {
    messages: Message[];
};

const MessageList: React.FC<Props> = ({ messages }) => {
    const bottomRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
  
    return (
      <div className="flex-1 overflow-y-auto px-2 mb-4 glass-scrollbar">
        <div className="flex flex-col space-y-4 pb-4">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    );
  };
  

export default MessageList;
