/**
 * Client/Patient Types
 */

export interface Client {
  id: string;
  therapistId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  status: "active" | "inactive" | "paused";
  conditions: string[];
  notes?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClientSession {
  id: string;
  clientId: string;
  therapistId: string;
  startTime: string;
  endTime: string;
  status: "scheduled" | "completed" | "cancelled" | "no-show";
  notes?: string;
  price?: number;
  type: "in-person" | "online" | "phone";
  createdAt: string;
  updatedAt: string;
}
