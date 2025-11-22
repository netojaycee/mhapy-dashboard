/**
 * API Endpoints Configuration
 * Centralized endpoint constants for RTK and API calls to backend
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh`,
    VERIFY_TOKEN: `${API_BASE_URL}/auth/verify`,
    FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`,
    RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`,
  },

  // Clients/Patients
  CLIENTS: {
    LIST: `${API_BASE_URL}/clients`,
    CREATE: `${API_BASE_URL}/clients`,
    GET: (id: string) => `${API_BASE_URL}/clients/${id}`,
    UPDATE: (id: string) => `${API_BASE_URL}/clients/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/clients/${id}`,
    SEARCH: `${API_BASE_URL}/clients/search`,
  },

  // Sessions
  SESSIONS: {
    LIST: `${API_BASE_URL}/sessions`,
    CREATE: `${API_BASE_URL}/sessions`,
    GET: (id: string) => `${API_BASE_URL}/sessions/${id}`,
    UPDATE: (id: string) => `${API_BASE_URL}/sessions/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/sessions/${id}`,
    GET_BY_CLIENT: (clientId: string) =>
      `${API_BASE_URL}/sessions/client/${clientId}`,
  },

  // Schedule
  SCHEDULE: {
    LIST: `${API_BASE_URL}/schedule`,
    GET_AVAILABILITY: `${API_BASE_URL}/schedule/availability`,
    UPDATE_AVAILABILITY: `${API_BASE_URL}/schedule/availability`,
  },

  // Analytics
  ANALYTICS: {
    DASHBOARD: `${API_BASE_URL}/analytics/dashboard`,
    CLIENTS: `${API_BASE_URL}/analytics/clients`,
    SESSIONS: `${API_BASE_URL}/analytics/sessions`,
    REVENUE: `${API_BASE_URL}/analytics/revenue`,
  },

  // User Profile
  PROFILE: {
    GET: `${API_BASE_URL}/profile`,
    UPDATE: `${API_BASE_URL}/profile`,
    CHANGE_PASSWORD: `${API_BASE_URL}/profile/change-password`,
    UPLOAD_AVATAR: `${API_BASE_URL}/profile/avatar`,
  },

  // Settings
  SETTINGS: {
    GET: `${API_BASE_URL}/settings`,
    UPDATE: `${API_BASE_URL}/settings`,
    NOTIFICATION_PREFERENCES: `${API_BASE_URL}/settings/notifications`,
  },

  // Billing
  BILLING: {
    GET_PLAN: `${API_BASE_URL}/billing/plan`,
    UPDATE_PLAN: `${API_BASE_URL}/billing/plan`,
    INVOICES: `${API_BASE_URL}/billing/invoices`,
    GET_INVOICE: (id: string) => `${API_BASE_URL}/billing/invoices/${id}`,
  },

  // Webhooks (for internal use)
  WEBHOOKS: {
    SESSION_UPDATE: `/api/webhooks/session-update`,
    CLIENT_UPDATE: `/api/webhooks/client-update`,
  },
};

export default API_ENDPOINTS;
