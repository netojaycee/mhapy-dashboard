/**
 * Dummy data for dashboard components
 * Contains prospective clients, appointments, and therapist schedule data
 */

import { ListItem } from "@/components/dashboard/client-list-card"
import { ScheduleItem, ScheduleStats } from "@/components/dashboard/therapist-schedule-card"

export interface DashboardData {
  prospectiveClients: ListItem[]
  appointments: ListItem[]
  therapistSchedule: {
    stats: ScheduleStats
    items: ScheduleItem[]
  }
}

export const dashboardData: DashboardData = {
  prospectiveClients: [
    {
      id: "1",
      name: "Elijah Adeyemi",
      role: "Accountant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elijah",
      status: "Assessment",
    },
    {
      id: "2",
      name: "Stephane Johnson",
      role: "Teacher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephane",
      status: "Assessment",
    },
    {
      id: "3",
      name: "Darth Sojinu",
      role: "Security Guard",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darth",
      status: "Assessment",
    },
    {
      id: "4",
      name: "Sandra Future",
      role: "Accountant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra",
      status: "Assessment",
    },
    {
      id: "5",
      name: "Elijah Adeyemi",
      role: "Accountant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elijah2",
      status: "Assessment",
    },
  ],
  appointments: [
    {
      id: "1",
      name: "Elijah Adeyemi",
      role: "Accountant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elijah",
      time: "11:00 am",
      status: "Appointment",
    },
    {
      id: "2",
      name: "Stephane Johnson",
      role: "Teacher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephane",
      time: "11:00 am",
      status: "Appointment",
    },
    {
      id: "3",
      name: "Darth Sojinu",
      role: "Data Analyst",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darth",
      time: "11:00 am",
      status: "Appointment",
    },
    {
      id: "4",
      name: "Sandra Future",
      role: "Accountant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra",
      time: "11:00 am",
      status: "Appointment",
    },
    {
      id: "5",
      name: "Steve Rango",
      role: "Accountant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Steve",
      time: "11:00 am",
      status: "Appointment",
    },
  ],
  therapistSchedule: {
    stats: {
      available: 62,
      unavailable: 47,
      leave: 8,
    },
    items: [
      {
        id: "1",
        name: "Stephane Johnson",
        role: "Therapist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephane",
        status: "Available",
        badgeColor: "green",
      },
      {
        id: "2",
        name: "Darth Sojinu",
        role: "Therapist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darth",
        status: "Unavailable",
        badgeColor: "red",
      },
      {
        id: "3",
        name: "Elijah Adeyemi",
        role: "Therapist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elijah",
        status: "Available",
        badgeColor: "green",
      },
      {
        id: "4",
        name: "Sandra Future",
        role: "Therapist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra",
        status: "Leave",
        badgeColor: "gray",
      },
      {
        id: "5",
        name: "Steve Rango",
        role: "Therapist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Steve",
        status: "Available",
        badgeColor: "green",
      },
    ],
  },
}

export default dashboardData
