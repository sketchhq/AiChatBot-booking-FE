import React from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  MoreVertical, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const appointments = [
  { id: '1', doctor: 'Dr. Sarah Wilson', specialization: 'Cardiologist', date: 'Oct 24, 2023', time: '10:00 AM', status: 'Upcoming', type: 'In-person' },
  { id: '2', doctor: 'Dr. Michael Chen', specialization: 'Dermatologist', date: 'Oct 28, 2023', time: '02:30 PM', status: 'Upcoming', type: 'Video Call' },
  { id: '3', doctor: 'Dr. Emily Brown', specialization: 'Pediatrician', date: 'Oct 15, 2023', time: '09:00 AM', status: 'Completed', type: 'In-person' },
  { id: '4', doctor: 'Dr. James Lee', specialization: 'Neurologist', date: 'Oct 10, 2023', time: '11:30 AM', status: 'Cancelled', type: 'Video Call' },
];

export default function Appointments() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Your Appointments</h2>
          <p className="text-slate-500">Manage your upcoming and past medical consultations.</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2">
          <Plus size={18} />
          New Appointment
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {appointments.map((apt, i) => (
                <motion.tr 
                  key={apt.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-slate-50/50 transition-all"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{apt.doctor}</p>
                        <p className="text-xs text-slate-500">{apt.specialization}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CalendarIcon size={14} className="text-slate-400" />
                      <span className="text-sm font-medium">{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 mt-1">
                      <Clock size={14} className="text-slate-400" />
                      <span className="text-xs">{apt.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-xs font-bold px-2 py-1 rounded-lg",
                      apt.type === 'Video Call' ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"
                    )}>
                      {apt.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {apt.status === 'Upcoming' && <AlertCircle size={16} className="text-blue-500" />}
                      {apt.status === 'Completed' && <CheckCircle2 size={16} className="text-emerald-500" />}
                      {apt.status === 'Cancelled' && <XCircle size={16} className="text-red-500" />}
                      <span className={cn(
                        "text-sm font-bold",
                        apt.status === 'Upcoming' && "text-blue-600",
                        apt.status === 'Completed' && "text-emerald-600",
                        apt.status === 'Cancelled' && "text-red-600"
                      )}>
                        {apt.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
