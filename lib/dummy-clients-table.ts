/**
 * Dummy data for the All Clients table
 */

export interface ClientTableRow {
  id: string
  name: string
  role: string
  avatar: string
  email: string
  status: "Active" | "Inactive"
  lastSeen: string
  lastSeenTime: string
}

export const clientsTableData: ClientTableRow[] = [
  {
    id: "1",
    name: "Sandra Future",
    role: "Teacher",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra",
    email: "sandrafuture@gmail.com",
    status: "Active",
    lastSeen: "Today",
    lastSeenTime: "11:00 pm",
  },
  {
    id: "2",
    name: "Elijah Adeyemi",
    role: "Accountant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elijah",
    email: "elijahadeyemi@gmail.com",
    status: "Active",
    lastSeen: "Today",
    lastSeenTime: "11:00 am",
  },
  {
    id: "3",
    name: "Darth Sojinu",
    role: "Medical Doctor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darth",
    email: "darthsojinu@gmail.com",
    status: "Active",
    lastSeen: "Yesterday",
    lastSeenTime: "11:00 am",
  },
  {
    id: "4",
    name: "Steve Rango",
    role: "Medical Doctor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Steve",
    email: "steverango@gmail.com",
    status: "Active",
    lastSeen: "Yesterday",
    lastSeenTime: "11:00 am",
  },
  {
    id: "5",
    name: "Amie Dean",
    role: "Artist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amie",
    email: "amiedean@gmail.com",
    status: "Active",
    lastSeen: "2 Days ago",
    lastSeenTime: "11:00 am",
  },
  {
    id: "6",
    name: "Sasha Lee",
    role: "Medical Doctor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha",
    email: "sashalee@gmail.com",
    status: "Inactive",
    lastSeen: "2 Days ago",
    lastSeenTime: "11:00 am",
  },
  {
    id: "7",
    name: "Andrew Neo",
    role: "Medical Doctor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andrew",
    email: "andrewneo@gmail.com",
    status: "Inactive",
    lastSeen: "20 Days ago",
    lastSeenTime: "11:00 am",
  },
  {
    id: "8",
    name: "Stephane Johnson",
    role: "Researcher",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephane",
    email: "elijahadeyemi@gmail.com",
    status: "Active",
    lastSeen: "A month ago",
    lastSeenTime: "11:00 am",
  },
]
