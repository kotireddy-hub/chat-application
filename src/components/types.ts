// types.ts
export interface ChatMessage {
  message: string;
  timeStamp: string;
  sender: string;
}

export interface Contact {
  userId: string;
  name: string;
  unreadCount: number;
  profilePictureURL: string;
  chat: ChatMessage[];
}
