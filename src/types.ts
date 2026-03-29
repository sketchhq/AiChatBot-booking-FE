export type UserRole = 'patient' | 'doctor' | 'admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  photoURL?: string;
  createdAt: number;
}

export interface DoctorProfile extends UserProfile {
  specialization: string;
  bio: string;
  rating: number;
  availability: AvailabilitySlot[];
}

export interface AvailabilitySlot {
  day: string; // e.g., 'Monday'
  startTime: string; // e.g., '09:00'
  endTime: string; // e.g., '17:00'
  isAvailable: boolean;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  doctorName: string;
  patientName: string;
  date: string; // ISO date string
  slot: string; // e.g., '10:00'
  status: 'booked' | 'cancelled' | 'completed';
  notes?: string;
  createdAt: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  embedding?: number[];
  source?: string;
}
