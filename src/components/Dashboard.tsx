import React from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Activity, 
  ArrowUpRight, 
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useAuthStore } from '../store/useAuthStore';

export default function Dashboard() {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Upcoming Appointments', value: '2', icon: Calendar, color: 'bg-blue-500' },
    { label: 'Health Score', value: '85%', icon: Activity, color: 'bg-emerald-500' },
    { label: 'Messages', value: '12', icon: Clock, color: 'bg-amber-500' },
  ];

  const appointments = [
    { id: '1', doctor: 'Dr. Sarah Wilson', specialization: 'Cardiologist', date: 'Oct 24, 2023', time: '10:00 AM', status: 'Upcoming' },
    { id: '2', doctor: 'Dr. Michael Chen', specialization: 'Dermatologist', date: 'Oct 28, 2023', time: '02:30 PM', status: 'Upcoming' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Good morning, {user?.displayName?.split(' ')[0] || 'User'}!</h2>
          <p className="text-slate-500">Here's what's happening with your health today.</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 w-fit">
          <Calendar size={18} />
          Book New Appointment
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-100`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                +12%
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Appointments List */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Upcoming Appointments</h3>
            <button className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
              View All <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {appointments.map((apt) => (
              <div key={apt.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{apt.doctor}</h4>
                    <p className="text-xs text-slate-500">{apt.specialization}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{apt.date}</p>
                  <p className="text-xs text-slate-500">{apt.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Alerts / Notifications */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Health Insights</h3>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </div>
          <div className="p-6 space-y-4">
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                <AlertCircle size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-900">Vaccination Reminder</h4>
                <p className="text-xs text-amber-700 mt-1">Your annual flu shot is due this month. Book an appointment with your primary care physician.</p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                <Activity size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-900">Activity Goal Met</h4>
                <p className="text-xs text-blue-700 mt-1">You've reached your walking goal for 5 consecutive days. Great job keeping active!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
