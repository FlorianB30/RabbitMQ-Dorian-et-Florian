export interface MessageInputModel {
    id: number;
    content: string;
    timestamp: Date; 
    senderId: number;
    receiverId: number; 
}