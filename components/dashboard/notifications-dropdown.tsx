"use client";

import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export interface Notification {
  id: string;
  title?: string;
  message: string;
  date: string;
  avatar?: string;
  icon?: string;
  bgColor?: string;
  read?: boolean;
}

interface NotificationsDropdownProps {
  notifications?: Notification[];
}

const defaultNotifications: Notification[] = [
  {
    id: "1",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt varius amet vitae senectus mattis et sapien pharetra.",
    date: "March 1, 2023",
    avatar: "/images/account-avatar.png",
    bgColor: "bg-red-500",
    read: false,
  },
  {
    id: "2",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt varius amet vitae senectus mattis et sapien pharetra.",
    date: "March 1, 2023",
    icon: "mdi:heart-outline",
    bgColor: "bg-primary",
    read: false,
  },
  {
    id: "3",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt varius amet vitae senectus mattis et sapien pharetra.",
    date: "March 1, 2023",
    icon: "mdi:heart-outline",
    bgColor: "bg-primary",
    read: false,
  },
  {
    id: "4",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt varius amet vitae senectus mattis et sapien pharetra.",
    date: "March 1, 2023",
    icon: "mdi:account-multiple",
    bgColor: "bg-green-500",
    read: false,
  },
  {
    id: "5",
    message:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt varius amet vitae senectus mattis et sapien pharetra.",
    date: "March 1, 2023",
    icon: "mdi:heart-outline",
    bgColor: "bg-primary",
    read: false,
  },
];

export function NotificationsDropdown({
  notifications = defaultNotifications,
}: NotificationsDropdownProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative inline-flex items-center justify-center h-7 w-7 md:h-8 md:w-8 rounded-full hover:bg-muted bg-[#F6F6F6] text-foreground transition-colors">
          <Icon icon="mdi:bell-outline" className="h-5 w-5 text-primary" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-lg font-semibold text-foreground">
            Notifications
          </h2>
          {unreadCount > 0 && (
            <span className="text-xs font-medium px-2 py-1 bg-red-500 text-white rounded-full">
              {unreadCount}
            </span>
          )}
        </div>

        <ScrollArea className="h-96">
          <div className="divide-y divide-border">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex gap-3 p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  {/* Avatar or Icon */}
                  <div className="shrink-0">
                    {notification.avatar ? (
                      <Image
                        width={48}
                        height={48}
                        src={notification.avatar}
                        alt="Avatar"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`h-12 w-12 rounded-full flex items-center justify-center text-white shrink-0 ${
                          notification.bgColor || "bg-primary"
                        }`}
                      >
                        {notification.icon && (
                          <Icon icon={notification.icon} className="h-6 w-6" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {notification.title && (
                      <p className="font-semibold text-foreground text-sm mb-1">
                        {notification.title}
                      </p>
                    )}
                    <p className="text-sm text-foreground line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.date}
                    </p>
                  </div>

                  {/* Unread indicator */}
                  {!notification.read && (
                    <div className="shrink-0 h-2 w-2 rounded-full bg-blue-500 mt-1"></div>
                  )}
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center p-8 text-muted-foreground">
                <p>No notifications</p>
              </div>
            )}
          </div>
        </ScrollArea>

        <Separator />
        <div className="p-3">
          <button className="w-full text-center text-sm font-medium text-primary hover:underline py-2">
            View all notifications
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
