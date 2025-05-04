'use client'

import { useState } from "react"
import MessageInput from "./MessageInput"
import MessageList from "./MessageList"
import { Message } from "@/app/types/message"
import ChatInitiation from "./ChatInitiation"
import ChatRecommendation from "./ChatRecommendation"
import { fetchBotResponse} from "@/app/lib/api";

const ChatInterface = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const sendMessage = async (messageText: string) => {
        setMessages([
            ...messages,
            { text: messageText, sender: "user", loading: false },
            { text: "", sender: "bot", loading: true },
        ]);

        try {
            const botResponse = await fetchBotResponse({ message: messageText });
            setMessages(prev => {
                const updatedMessages = [...prev];
                const lastIndex = updatedMessages.length - 1;

                if (updatedMessages[lastIndex].sender === "bot" && updatedMessages[lastIndex].loading) {
                    updatedMessages[lastIndex] = {
                        ...updatedMessages[lastIndex],
                        text: botResponse,
                        loading: false,
                    };
                }

                return updatedMessages;
            });
        } catch (error) {
            console.error("Error fetching bot response:", error);
            setMessages(prev => {
                const updatedMessages = [...prev];
                const lastIndex = updatedMessages.length - 1;

                if (updatedMessages[lastIndex].sender === "bot" && updatedMessages[lastIndex].loading) {
                    updatedMessages[lastIndex] = {
                        ...updatedMessages[lastIndex],
                        text: "Sorry, something went wrong.",
                        loading: false,
                    };
                }

                return updatedMessages;
            });
        }
    };


    const handleSendMessage = () => {
        if (inputValue && inputValue.trim() !== "") {
            sendMessage(inputValue);
            setInputValue("");
        }
    };

    const handleCardClick = (value: string) => {
        sendMessage(value);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 p-2 overflow-hidden">
            
            {/* Glass container for chat */}
            <div className="flex flex-col w-full md:w-3/4 h-full rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl overflow-hidden z-10 p-4">
                <div className="flex flex-col flex-1 overflow-hidden">
                    {messages.length === 0 && <ChatInitiation />}
                    {messages.length === 0 && <ChatRecommendation onClick={handleCardClick} />}
                    <MessageList messages={messages} />
                </div>

                {/* Input pinned to bottom */}
                <div className="mt-2">
                    <MessageInput
                        value={inputValue}
                        onChange={setInputValue}
                        onSend={handleSendMessage}
                    />
                </div>
            </div>

        </div>
    )
}

export default ChatInterface