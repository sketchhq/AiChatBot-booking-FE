'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Dashboard from '@/components/Dashboard';
import Chat from '@/components/Chat';
import Appointments from '@/components/Appointments';
import Doctors from '@/components/Doctors';
import Auth from '@/components/Auth';
import { useAuthStore } from '@/store/useAuthStore';
import { auth, db, loginWithGoogle, isFirebaseConfigured } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { UserProfile } from '@/types';

export default function HomePage() {
  const { user, loading, setUser, setLoading } = useAuthStore();
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // If Firebase is not configured, use a mock user for local development
    if (!isFirebaseConfigured) {
      const mockUser: UserProfile = {
        uid: 'local-test-user',
        email: 'test@local.dev',
        displayName: 'Local Test User',
        role: 'patient',
        photoURL: undefined,
        createdAt: Date.now(),
      };
      setUser(mockUser);
      setLoading(false);
      console.log('Using mock user for local development (Firebase not configured)');
      return;
    }

    // Otherwise, use Firebase auth
    if (!auth) return;
    
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          if (db) {
            const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
            if (userDoc.exists()) {
              setUser(userDoc.data() as UserProfile);
            } else {
              // Create new user profile if it doesn't exist
              const newUser: UserProfile = {
                uid: firebaseUser.uid,
                email: firebaseUser.email || '',
                displayName: firebaseUser.displayName || 'User',
                role: 'patient', // Default role
                photoURL: firebaseUser.photoURL || undefined,
                createdAt: Date.now(),
              };
              await setDoc(doc(db, 'users', firebaseUser.uid), newUser);
              setUser(newUser);
            }
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  if (!user) {
    const handleLogin = async () => {
      try {
        await loginWithGoogle();
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
    return <Auth onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <Chat />;
      case 'appointments':
        return <Appointments />;
      case 'doctors':
        return <Doctors />;
      case 'profile':
        return <div>Profile Component (to be implemented)</div>;
      case 'admin':
        return <div>Admin Panel (to be implemented)</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
