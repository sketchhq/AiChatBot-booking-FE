# CarePoint Health Frontend

Next.js 15 application for AI-powered hospital appointment booking.

## Features

- 🤖 AI Chatbot for appointment intake
- 👨‍⚕️ Doctor discovery and profiles
- 📅 Appointment booking and management
- 🔐 Firebase authentication
- 📱 Responsive design with Tailwind CSS

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Setup

Create `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Chat.tsx           # AI chat interface
│   ├── Dashboard.tsx      # User dashboard
│   ├── Auth.tsx           # Login component
│   ├── Doctors.tsx        # Doctor listing
│   ├── Appointments.tsx   # Appointment management
│   └── Layout.tsx         # App layout
├── store/                 # Zustand state management
│   ├── useAuthStore.ts    # Authentication state
│   └── useChatStore.ts    # Chat state
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── firebase.ts            # Firebase configuration
```

## Key Components

### Chat Component
- Real-time AI conversation
- Message history with Zustand
- Typing indicators and animations

### Auth Component
- Google OAuth with Firebase
- Protected routes
- User session management

### Dashboard
- Appointment overview
- Health insights
- Quick actions

## State Management

Uses Zustand for lightweight state management:

- **Auth Store**: User authentication state
- **Chat Store**: Chat messages and AI responses

## Styling

- **Tailwind CSS** for utility-first styling
- **Motion/React** for smooth animations
- **Lucide React** for consistent icons

## API Integration

Connects to NestJS backend at `NEXT_PUBLIC_API_URL`.

## Deployment

Deploy to Vercel with environment variables set in dashboard.

## Available scripts

- `npm run dev` - start the app locally
- `npm run build` - build for production
- `npm run start` - run the production build
- `npm run lint` - run Next.js lint
