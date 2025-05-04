import { MessagePayload } from "../types/message";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export async function fetchBotResponse(data: MessagePayload): Promise<string> {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: { reply: string } = await response.json();
        return result.reply;
    } catch (error) {
        console.error('Error making POST request:', error);
        throw error;
    }
}