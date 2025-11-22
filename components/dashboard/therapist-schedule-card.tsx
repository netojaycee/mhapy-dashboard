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

export interface ScheduleItem {
  id: string
  name: string
  role: string
  avatar?: string
  status: "Available" | "Unavailable" | "Leave"
  badgeColor?: "green" | "red" | "gray"
}

export interface ScheduleStats {
  available: number
  unavailable: number
  leave: number
}

interface TherapistScheduleCardProps {
  title: string
  icon?: string
  stats: ScheduleStats
  items: ScheduleItem[]
  emptyMessage?: string
}

export function TherapistScheduleCard({
  title,
  icon,
  stats,
  items,
  emptyMessage = "No therapists",
}: TherapistScheduleCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700"
      case "Unavailable":
        return "bg-red-100 text-red-700"
      case "Leave":
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

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border">
        <div>
          <p className="text-sm font-medium text-foreground">Available</p>
          <p className="text-2xl font-bold text-green-600">
            {stats.available}
            <span className="text-xs text-muted-foreground font-normal ml-1">
              Total
            </span>
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Unavailable</p>
          <p className="text-2xl font-bold text-red-600">
            {stats.unavailable}
            <span className="text-xs text-muted-foreground font-normal ml-1">
              Total
            </span>
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Leave</p>
          <p className="text-2xl font-bold text-gray-600">
            {stats.leave}
            <span className="text-xs text-muted-foreground font-normal ml-1">
              Total
            </span>
          </p>
        </div>
      </div>

      {/* List of Therapists */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">
          List of Therapist
        </p>
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2"
            >
              {/* Left: Avatar and Info */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback className="bg-teal-200 text-teal-700">
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

              {/* Right: Status Badge */}
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(item.status)}`}
              >
                {item.status}
              </span>
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
