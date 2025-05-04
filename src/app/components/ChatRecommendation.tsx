'use client'

import { useState } from "react";
import { RefreshCcw } from "lucide-react";
const prompts = [
    {
        id: 1,
        text: "Why is Avicii’s “The Nights” meaningful to you?",
    },
    {
        id: 2,
        text: "Who is your biggest inspiration in the anime world, and how does that reflect in your life?",
    },
    {
        id: 3,
        text: "Why are React and AWS your favorite technologies?",
    },
    {
        id: 5,
        text: "In what moments do you feel you’re truly “flying” in life?",
    },
    {
        id: 6,
        text: "What does living without regret mean to you in practice?",
    },
    {
        id: 7,
        text: "In what moments do you feel you’re truly “flying” in life?",
    },
    {
        id: 8,
        text: "Which traditional food from Myanmar do you always miss?",
    },
]

type CardProps = {
    onClick: (value: string) => void
}
const getRandomPrompts = (count: number): { id: number; text: string }[] => {
    const shuffled = prompts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const ChatRecommendation: React.FC<CardProps> = ({ onClick }) => {
    const [randomPrompts, setRandomPrompts] = useState(getRandomPrompts(4));
    const [isRefreshing, setIsRefreshing] = useState(false);

    const refreshPrompts = async () => {
        setIsRefreshing(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
        setRandomPrompts(getRandomPrompts(4));
        setIsRefreshing(false);
    };

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mt-1">
                {randomPrompts.map((prompt) => (
                    <div
                        key={prompt.id}
                        className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-2 cursor-pointer font-[500] hover:bg-white/20 transition-all duration-300"
                        onClick={() => onClick(prompt.text)}
                    >
                        <p className="text-sm text-center text-white">{prompt.text}</p>
                    </div>
                ))}
            </div>
            <button
                className="text-gray-500 text-sm hover:text-gray-600 focus:text-gray-600 flex gap-2 px-4 py-2 mb-4 transition-all duration-300 cursor-pointer"
                onClick={refreshPrompts}
                disabled={isRefreshing}
            >
                <RefreshCcw
                    size={20}
                    className={`transition-transform duration-500 ${
                        isRefreshing ? "animate-spin" : ""
                    }`}
                />
                Refresh Prompts
            </button>
        </div>
    );
};

export default ChatRecommendation