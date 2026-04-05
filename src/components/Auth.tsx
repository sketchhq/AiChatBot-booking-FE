import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, ShieldCheck, HeartPulse, Activity, Play } from 'lucide-react';
import { isFirebaseConfigured } from '@/firebase';

interface AuthProps {
  onLogin: () => void;
}

export default function Auth({ onLogin }: AuthProps) {
  const isLocalMode = !isFirebaseConfigured;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-10 z-10"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <Stethoscope size={32} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome to HealAI</h1>
            <p className="text-slate-500">Your intelligent healthcare companion</p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full py-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
              <ShieldCheck className="text-blue-600" size={24} />
              <span className="text-xs font-medium text-slate-600">Secure Data</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
              <HeartPulse className="text-emerald-600" size={24} />
              <span className="text-xs font-medium text-slate-600">Health Insights</span>
            </div>
          </div>

          <button 
            onClick={onLogin}
            className={`w-full py-4 rounded-2xl font-semibold transition-all shadow-lg flex items-center justify-center gap-3 group ${
              isLocalMode 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
            }`}
          >
            {isLocalMode ? (
              <>
                <Play size={20} />
                Start Demo
              </>
            ) : (
              <>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6 bg-white rounded-full p-1" />
                Sign in with Google
              </>
            )}
          </button>

          <p className="text-xs text-slate-400 max-w-[280px]">
            {isLocalMode 
              ? "Running in local demo mode. No authentication required."
              : "By signing in, you agree to our Terms of Service and Privacy Policy."
            }
          </p>
        </div>
      </motion.div>

      <div className="mt-8 flex items-center gap-6 text-slate-400 z-10">
        <div className="flex items-center gap-2">
          <Activity size={16} />
          <span className="text-xs font-medium">Real-time Analysis</span>
        </div>
        <div className="w-1 h-1 bg-slate-300 rounded-full" />
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} />
          <span className="text-xs font-medium">HIPAA Compliant</span>
        </div>
      </div>
    </div>
  );
}
