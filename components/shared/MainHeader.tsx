"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";
import { NotificationsDropdown } from "../dashboard/notifications-dropdown";

interface HeaderProps {
  Name?: string;
}

export function MainHeader({ Name }: HeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (mobileSearchOpen) {
      setSearchValue("");
    }
  };

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 bg-background px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        {/* Welcome message - Left side */}
        <div className="flex-1">
          <div className="flex items-center">
            <SidebarTrigger className="ml-[-1.1rem]" />

            <h1 className="text-base md:text-lg font-semibold text-foreground">
              {Name}
            </h1>
          </div>
        </div>

        {/* Search bar - Center (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-sm">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search anything"
              className="pr-10 bg-muted border-0 focus-visible:ring-primary"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Icon icon="mdi:magnify" className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full bg-[#F6F6F6] hover:bg-muted"
            onClick={handleSearchToggle}
          >
            <Icon
              icon={mobileSearchOpen ? "mdi:close" : "mdi:magnify"}
              className="h-5 w-5 text-primary transition-transform"
            />
          </Button>
          {/* Messages - Links to /dashboard/messages */}
          <Link href="/dashboard/messages">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#F6F6F6] hover:bg-muted md:h-8 md:w-8"
            >
              <Icon icon="uiw:message" className="h-5 w-5 text-primary" />
            </Button>
          </Link>

          {/* Notifications Dropdown */}
          <NotificationsDropdown />

          {/* Add team member button */}
          <Button
            className="hidden sm:flex gap-2 bg-primary hover:bg-primary-700 text-white font-medium rounded"
            size="sm"
          >
            <Icon icon="mdi:plus" className="h-4 w-4" />
            Add team member
          </Button>
          <Button
            className="md:hidden rounded-full md:rounded-md h-6 w-6 md:h-8 md:w-8 flex gap-2 bg-primary hover:bg-primary-700 text-white font-medium"
            size="sm"
          >
            <Icon icon="mdi:plus" className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Mobile Search - Animated Slide Down */}
      <div
        className={`md:hidden overflow-hidden bg-background transition-all duration-300 ease-in-out ${
          mobileSearchOpen ? "max-h-20" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 border-b border-border">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search anything"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus={mobileSearchOpen}
              className="pr-10 bg-muted border-0 focus-visible:ring-primary"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <Icon icon="mdi:magnify" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
