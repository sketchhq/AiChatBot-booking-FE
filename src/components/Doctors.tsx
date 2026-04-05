'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  Calendar, 
  ChevronRight,
  Stethoscope,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const specializations = [
  'All', 'Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Psychiatry', 'Orthopedics'
];

const doctors = [
  { id: '1', name: 'Dr. Sarah Wilson', specialization: 'Cardiologist', rating: 4.9, reviews: 124, experience: '12 years', location: 'City Medical Center', availability: 'Available Today' },
  { id: '2', name: 'Dr. Michael Chen', specialization: 'Dermatologist', rating: 4.8, reviews: 89, experience: '8 years', location: 'Skin & Health Clinic', availability: 'Next: Oct 28' },
  { id: '3', name: 'Dr. Emily Brown', specialization: 'Pediatrician', rating: 5.0, reviews: 210, experience: '15 years', location: 'Children\'s Hospital', availability: 'Available Today' },
  { id: '4', name: 'Dr. James Lee', specialization: 'Neurologist', rating: 4.7, reviews: 56, experience: '10 years', location: 'Neuroscience Institute', availability: 'Next: Oct 30' },
];

export default function Doctors() {
  const [selectedSpec, setSelectedSpec] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doc => 
    (selectedSpec === 'All' || doc.specialization === selectedSpec) &&
    (doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.specialization.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search doctors by name or specialization..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <div className="flex items-center gap-2 bg-white border border-slate-200 p-1 rounded-xl">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpec(spec)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  selectedSpec === spec 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-100" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                {spec}
              </button>
            ))}
          </div>
          <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all shrink-0">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                  <Stethoscope size={32} />
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                  <Star size={16} fill="currentColor" />
                  {doc.rating}
                  <span className="text-slate-400 font-normal">({doc.reviews})</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">{doc.name}</h3>
                <p className="text-blue-600 text-sm font-semibold">{doc.specialization}</p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Clock size={14} />
                  <span>{doc.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <MapPin size={14} />
                  <span>{doc.location}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold bg-emerald-50 w-fit px-2 py-1 rounded-lg">
                  <Calendar size={14} />
                  <span>{doc.availability}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <button className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-all">
                View Profile
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100 flex items-center gap-2">
                Book Now <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mx-auto">
            <Search size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No doctors found</h3>
          <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
