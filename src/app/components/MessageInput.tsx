'use client'
import { Send } from "lucide-react";

type MessageInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="w-full sticky rounded-full bg-white/10 backdrop-blur-md p-2 flex items-center border border-white/20 shadow-lg">
      <input
        type="text"
        placeholder="Ask me anything..."
        className="flex-1 bg-transparent text-white outline-none px-4 py-2 placeholder-white/50"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <button
          onClick={onSend}
          className="w-12 h-12 cursor-pointer flex items-center justify-center text-white bg-purple-500/30 rounded-full backdrop-blur-md hover:bg-purple-500/50 transition-all duration-300"
        >
          <Send size={20} />
        </button>
      )}
    </div>
  );
};

export default MessageInput;
