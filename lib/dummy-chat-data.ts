/**
 * Mock data for chat/messaging components
 */

export interface ChatMessage {
  id: string
  conversationId: string
  senderId: string
  senderName: string
  senderAvatar?: string
  content: string
  timestamp: string
  read: boolean
  type?: "text" | "image" | "file"
}

export interface Conversation {
  id: string
  participantId: string
  participantName: string
  participantAvatar?: string
  participantStatus: "online" | "offline" | "away"
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  messages: ChatMessage[]
}

const now = new Date()

export const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    participantId: "user-1",
    participantName: "Angelie Crison",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Angelie",
    participantStatus: "online",
    lastMessage: "Lorem ipsum dolor sit amet consectetur. Quis ut dolor urna malesuada.",
    lastMessageTime: "11:52",
    unreadCount: 2,
    messages: [
      {
        id: "msg-1",
        conversationId: "conv-1",
        senderId: "user-1",
        senderName: "Angelie Crison",
        senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Angelie",
        content: "Lorem ipsum dolor sit amet consectetur. Augue.",
        timestamp: new Date(now.getTime() - 30 * 60000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        read: true,
      },
      {
        id: "msg-2",
        conversationId: "conv-1",
        senderId: "current-user",
        senderName: "You",
        content: "Lorem ipsum dolor sit amet consectetur. Leo nec integer facilisi commodo imperdiet vestibulum.",
        timestamp: new Date(now.getTime() - 25 * 60000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        read: true,
      },
      {
        id: "msg-3",
        conversationId: "conv-1",
        senderId: "user-1",
        senderName: "Angelie Crison",
        senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Angelie",
        content: "Lorem ipsum dolor sit amet consectetur. Localis est nunc diam at u ultricies.",
        timestamp: new Date(now.getTime() - 20 * 60000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        read: true,
      },
      {
        id: "msg-4",
        conversationId: "conv-1",
        senderId: "current-user",
        senderName: "You",
        content: "Lorem ipsum dolor sit amet consectetur. Sapien gravida non.",
        timestamp: new Date(now.getTime() - 15 * 60000).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        read: true,
      },
      {
        id: "msg-5",
        conversationId: "conv-1",
        senderId: "user-1",
        senderName: "Angelie Crison",
        senderAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Angelie",
        content: "Lorem ipsum dolor sit amet consectetur. Quis ut dolor urna malesuada.",
        timestamp: now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        read: false,
      },
    ],
  },
  {
    id: "conv-2",
    participantId: "user-2",
    participantName: "Jakob Saris",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jakob",
    participantStatus: "online",
    lastMessage: "You: Lorem ipsum dolor sit amet",
    lastMessageTime: "2m ago",
    unreadCount: 0,
    messages: [],
  },
  {
    id: "conv-3",
    participantId: "user-3",
    participantName: "Emery Korsgard",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emery",
    participantStatus: "offline",
    lastMessage: "Lorem ipsum dolor sit amet",
    lastMessageTime: "3m ago",
    unreadCount: 1,
    messages: [],
  },
  {
    id: "conv-4",
    participantId: "user-4",
    participantName: "Jeremy Zucker",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jeremy",
    participantStatus: "away",
    lastMessage: "You: Lorem ipsum dolor sit amet",
    lastMessageTime: "4m ago",
    unreadCount: 0,
    messages: [],
  },
  {
    id: "conv-5",
    participantId: "user-5",
    participantName: "Nadia Lauren",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia",
    participantStatus: "online",
    lastMessage: "Lorem ipsum dolor sit amet",
    lastMessageTime: "5m ago",
    unreadCount: 3,
    messages: [],
  },
  {
    id: "conv-6",
    participantId: "user-6",
    participantName: "Jason Slatham",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason",
    participantStatus: "offline",
    lastMessage: "You: Lorem ipsum dolor sit amet",
    lastMessageTime: "6m ago",
    unreadCount: 0,
    messages: [],
  },
  {
    id: "conv-7",
    participantId: "user-7",
    participantName: "Angel Kimberly",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Angel",
    participantStatus: "online",
    lastMessage: "Lorem ipsum dolor sit amet",
    lastMessageTime: "7m ago",
    unreadCount: 2,
    messages: [],
  },
  {
    id: "conv-8",
    participantId: "user-8",
    participantName: "Jason Momoa",
    participantAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason2",
    participantStatus: "offline",
    lastMessage: "You: Lorem ipsum dolor sit amet",
    lastMessageTime: "8m ago",
    unreadCount: 0,
    messages: [],
  },
]
