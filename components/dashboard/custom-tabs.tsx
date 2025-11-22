"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

interface CustomTabsProps {
  tabs: TabItem[]
  persistKey: string
  onTabChange?: (tabId: string) => void
  className?: string
  listClassName?: string
  triggerClassName?: string
  contentClassName?: string
}

/**
 * CustomTabs - A tabs component with localStorage persistence
 * Automatically saves and restores the active tab across page reloads
 *
 * @param tabs - Array of tab items with id, label, and content
 * @param persistKey - Unique key to store the active tab in localStorage
 * @param onTabChange - Optional callback when tab changes
 * @param className - Optional className for the root Tabs component
 * @param listClassName - Optional className for TabsList
 * @param contentClassName - Optional className for TabsContent
 *
 * @example
 * const tabs = [
 *   { id: "clients", label: "Clients", content: <ClientTab /> },
 *   { id: "sessions", label: "Sessions", content: <SessionTab /> },
 * ]
 *
 * <CustomTabs tabs={tabs} persistKey="dashboard-tabs" />
 */
export function CustomTabs({
  tabs,
  persistKey,
  onTabChange,
  className = "",
  listClassName = "",
  triggerClassName = "",
  contentClassName = "",
}: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window === 'undefined') return tabs[0]?.id || ""
    const savedTab = localStorage.getItem(persistKey)
    const defaultTab = tabs[0]?.id || ""
    // Use saved tab if it exists and is still in current tabs, otherwise use first tab
    return savedTab && tabs.some((t) => t.id === savedTab) ? savedTab : defaultTab
  })

  // Handle tab change
  const handleTabChange = (newTabId: string) => {
    setActiveTab(newTabId)
    if (typeof window !== 'undefined') {
      localStorage.setItem(persistKey, newTabId)
    }
    onTabChange?.(newTabId)
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className={className}>
      <TabsList className={`grid w-full grid-cols-${tabs.length} ${listClassName}`}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className={`relative ${triggerClassName}`}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className={contentClassName}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
