"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icon } from "@iconify/react"
import { Conversation } from "@/lib/dummy-chat-data"

interface ChatHeaderProps {
  conversation: Conversation | null
}

export function ChatHeader({ conversation }: ChatHeaderProps) {
  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-16 border-b border-border bg-card">
        <p className="text-muted-foreground">Select a conversation</p>
      </div>
    )
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-border bg-card">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={conversation.participantAvatar}
              alt={conversation.participantName}
            />
            <AvatarFallback>{getInitials(conversation.participantName)}</AvatarFallback>
          </Avatar>
          <div
            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card ${
              conversation.participantStatus === "online"
                ? "bg-green-500"
                : conversation.participantStatus === "away"
                  ? "bg-yellow-500"
                  : "bg-gray-400"
            }`}
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-sm">{conversation.participantName}</h3>
          <p className="text-xs text-muted-foreground capitalize">
            {conversation.participantStatus}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded h-9 w-9" title="Call">
          <Icon icon="mdi:phone" className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded h-9 w-9" title="Video call">
          <Icon icon="mdi:video" className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded h-9 w-9" title="More options">
          <Icon icon="mdi:dots-vertical" className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
