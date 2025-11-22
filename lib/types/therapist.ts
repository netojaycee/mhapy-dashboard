/**
 * User/Therapist Types
 */

export interface Therapist {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  licenseNumber: string;
  specializations: string[];
  bio?: string;
  hourlyRate?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TherapistProfile extends Therapist {
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  timezone?: string;
  languages: string[];
}
