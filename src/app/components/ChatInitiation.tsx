import { getGreetingMessage } from "@/app/utils/greeting";
import BotAvatar from "@/app/components/BotAvatar";

const ChatInitiation = () => {
  return (
    <div className="text-center mb-2 text-white">
      <div className="flex justify-center mb-3">
        <BotAvatar width="w-15" height="h-15" />
      </div>
      <h2 className="text-lg md:text-2xl font-semibold">
        {getGreetingMessage()}
      </h2>
      <h2 className="text-lg md:text-2xl font-semibold">
        Ask me anything you want to know about me!
      </h2>
    </div>
  );
};

export default ChatInitiation;
