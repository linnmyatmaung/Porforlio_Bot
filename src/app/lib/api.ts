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

export async function fetchFakeBotResponse(data: MessagePayload): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return "ဒီရင်ခွင်ဟာ မင်းအပိုင်မို့... ဒဏ်ရာတွေလာမပေးနဲ့ နိုး.... ဒီရင်ခွင်ကို စိတ်ကြိုက်ဆိုး ရတယ်.. မင်းအနားရှိချင်လို့";
}