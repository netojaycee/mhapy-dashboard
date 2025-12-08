"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify/react"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading?: boolean
}

export function ChatInput({
  onSendMessage,
  isLoading = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="border-t border-border bg-card p-4 space-y-3">
      <div className="flex gap-2 items-end">
        <Button
          variant="ghost"
          size="icon"
          className="rounded h-9 w-9 shrink-0"
          title="Attach file"
        >
          <Icon icon="mdi:paperclip" className="h-5 w-5" />
        </Button>

        <Input
          ref={inputRef}
          placeholder="Send your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          className="flex-1"
        />

        <Button
          variant="ghost"
          size="icon"
          className="rounded h-9 w-9 shrink-0"
          title="Add emoji"
        >
          <Icon icon="mdi:emoticon-outline" className="h-5 w-5" />
        </Button>

        <Button
          onClick={handleSend}
          disabled={!message.trim() || isLoading}
          size="icon"
          className="rounded h-9 w-9 shrink-0 bg-primary hover:bg-primary/90"
          title="Send message"
        >
          <Icon icon="mdi:send" className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          className="text-xs rounded"
          onClick={() => setMessage("Lorem ipsum dolor sit amet consectetur.")}
        >
          Lorem ipsum
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-xs rounded"
          onClick={() => setMessage("Is there a plugin to do this task?")}
        >
          Ask about plugin
        </Button>
      </div>
    </div>
  )
}
