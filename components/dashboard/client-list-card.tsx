"use client"

import { Icon } from "@iconify/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export interface ListItem {
  id: string
  name: string
  role: string
  avatar?: string
  status?: "Assessment" | string
  time?: string
  badge?: string
  badgeColor?: "green" | "red" | "gray"
}

interface ClientListCardProps {
  title: string
  icon?: string
  items: ListItem[]
  showStatus?: boolean
  showTime?: boolean
  showBadge?: boolean
  emptyMessage?: string
}

export function ClientListCard({
  title,
  icon,
  items,
  showStatus = false,
  showTime = false,
  showBadge = false,
  emptyMessage = "No items",
}: ClientListCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getBadgeColor = (color?: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-700"
      case "red":
        return "bg-red-100 text-red-700"
      case "gray":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="border border-border rounded bg-card p-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          {icon && <Icon icon={icon} className="h-5 w-5" />}
          {title}
        </h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded">
              <Icon icon="mdi:dots-horizontal" className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View All</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Refresh</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Items List */}
      <div className="space-y-2">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 border-b border-border last:border-b-0"
            >
              {/* Left: Avatar and Info */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback className="bg-purple-200 text-purple-700">
                    {getInitials(item.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-foreground text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>

              {/* Right: Status/Time/Badge */}
              <div className="flex items-center gap-4 shrink-0">
                {showTime && item.time && (
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Today</p>
                    <p className="text-sm font-medium text-foreground">
                      {item.time}
                    </p>
                  </div>
                )}

                {showBadge && item.badge && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getBadgeColor(item.badgeColor)}`}
                  >
                    {item.badge}
                  </span>
                )}

                {showStatus && item.status && (
                  <p className="text-sm text-muted-foreground">{item.status}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">{emptyMessage}</p>
          </div>
        )}
      </div>
    </div>
  )
}
