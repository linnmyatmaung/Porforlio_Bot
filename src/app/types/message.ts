export type Message = {
    sender: "user" | "bot" | "system";
    text: string;
    loading: boolean;
};

export interface MessagePayload {
    message: string;
    loading?: boolean;
}
