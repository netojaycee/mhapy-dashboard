
"use client"

import { useState, useCallback } from "react"
import {
  ChatHeader,
  ChatMessages,
  ChatInput,
  ConversationList,
} from "./(components)"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { mockConversations, ChatMessage as ChatMessageType, Conversation } from "@/lib/dummy-chat-data"

export default function Messages() {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations)
  const [activeConversationId, setActiveConversationId] = useState<string>(
    mockConversations[0]?.id || ""
  )
  const [showMobileChat, setShowMobileChat] = useState(false)

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  )

  const handleSendMessage = useCallback(
    (messageText: string) => {
      if (!activeConversationId || !messageText.trim()) return

      setConversations((prevConversations) =>
        prevConversations.map((conv) => {
          if (conv.id === activeConversationId) {
            const now = new Date()
            const newMessage: ChatMessageType = {
              id: `msg-${Date.now()}`,
              conversationId: conv.id,
              senderId: "current-user",
              senderName: "You",
              content: messageText,
              timestamp: now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }),
              read: true,
            }

            return {
              ...conv,
              messages: [...conv.messages, newMessage],
              lastMessage: messageText,
              lastMessageTime: "now",
            }
          }
          return conv
        })
      )
    },
    [activeConversationId]
  )

  const handleSelectConversation = (conversationId: string) => {
    setActiveConversationId(conversationId)
    setShowMobileChat(true)
    // Mark messages as read
    setConversations((prevConversations) =>
      prevConversations.map((conv) => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            unreadCount: 0,
            messages: conv.messages.map((msg) => ({
              ...msg,
              read: true,
            })),
          }
        }
        return conv
      })
    )
  }

  const handleBackToList = () => {
    setShowMobileChat(false)
  }

  return (
    <div className="flex h-[calc(100vh-64px)] bg-background overflow-hidden">
      {/* Desktop: Sidebar with conversation list */}
      <div className="hidden md:flex md:w-80 lg:w-96 flex-col">
        <ConversationList
          conversations={conversations}
          activeConversationId={activeConversationId}
          onSelectConversation={handleSelectConversation}
        />
      </div>

      {/* Desktop: Chat area */}
      <div className="hidden md:flex md:flex-1 flex-col">
        <ChatHeader conversation={activeConversation || null} />
        <ChatMessages messages={activeConversation?.messages || []} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      {/* Mobile: Conversation List Screen */}
      {!showMobileChat && (
        <div className="md:hidden w-full flex flex-col">
          <ConversationList
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelectConversation={handleSelectConversation}
          />
        </div>
      )}

      {/* Mobile: Chat Screen (Full Screen) */}
      {showMobileChat && (
        <div className="md:hidden w-full flex flex-col h-full">
          {/* Mobile Chat Header with Back Button - Fixed */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-border bg-card gap-2 shrink-0">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Button
                variant="ghost"
                size="icon"
                className="rounded h-9 w-9 shrink-0"
                onClick={handleBackToList}
              >
                <Icon icon="mdi:arrow-left" className="h-5 w-5" />
              </Button>

              {activeConversation && (
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">
                    {activeConversation.participantName}
                  </h3>
                  <p className="text-xs text-muted-foreground capitalize truncate">
                    {activeConversation.participantStatus}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="icon"
                className="rounded h-9 w-9"
                title="Call"
              >
                <Icon icon="mdi:phone" className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded h-9 w-9"
                title="More options"
              >
                <Icon icon="mdi:dots-vertical" className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Chat Messages - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <ChatMessages messages={activeConversation?.messages || []} />
          </div>

          {/* Chat Input - Fixed */}
          <div className="shrink-0">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      )}
    </div>
  )
}
