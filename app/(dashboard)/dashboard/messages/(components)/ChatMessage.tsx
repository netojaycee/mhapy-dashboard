"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChatMessage as ChatMessageType } from "@/lib/dummy-chat-data"

interface ChatMessageProps {
  message: ChatMessageType
  isCurrentUser: boolean
}

export function ChatMessage({ message, isCurrentUser }: ChatMessageProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div
      className={`flex gap-3 mb-4 ${isCurrentUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isCurrentUser && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarImage
            src={message.senderAvatar}
            alt={message.senderName}
          />
          <AvatarFallback>{getInitials(message.senderName)}</AvatarFallback>
        </Avatar>
      )}

      <div
        className={`flex flex-col ${isCurrentUser ? "items-end" : "items-start"} gap-1 max-w-xs md:max-w-md`}
      >
        {!isCurrentUser && (
          <span className="text-xs font-medium text-muted-foreground">
            {message.senderName}
          </span>
        )}

        <div
          className={`px-4 py-2 rounded-2xl wrap-break-word ${
            isCurrentUser
              ? "bg-primary text-primary-foreground rounded-br-none"
              : "bg-secondary text-secondary-foreground rounded-bl-none"
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </div>

        <span className="text-xs text-muted-foreground">{message.timestamp}</span>
      </div>

      {isCurrentUser && (
        <Avatar className="h-8 w-8 shrink-0">
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
