import { Message } from "@/app/types/message";
import BotAvatar from "./BotAvatar";
import { roboto } from "@/app/ui/fonts";
import Skeleton from "./Skeleton";
import TypeWritter from "./TypeWritter";

type MessageBubbleProps = {
  message: Message;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  if (message.sender === "system") return null;

  const isBot = message.sender === "bot";

  return (
    <div className={`flex ${roboto.className} ${message.sender === "user" ? "justify-end" : "justify-start"} w-full`}>
      <div
        className={`flex justify-start items-start rounded-2xl py-3 px-4 mx-2 my-1
          ${isBot
            ? "bg-white/10 backdrop-blur-2xl text-white border-white/20"
            : "bg-purple-500/20 backdrop-blur-2xl text-white border-purple-300/30"}
          border shadow-lg
          max-w-xs md:max-w-md lg:max-w-lg
          break-words overflow-hidden
        `}
      >
        {message.loading && isBot ? (
          <Skeleton />
        ) : (
          <div className="flex flex-col md:flex-row space-x-2 items-start w-full overflow-hidden">
            {isBot && <BotAvatar />}
            <div className="overflow-hidden break-words">
              {isBot ? (
                <TypeWritter html={message.text} speed={20} />

              ) : (
                <p className="whitespace-pre-wrap break-words overflow-wrap-anywhere">{message.text}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;