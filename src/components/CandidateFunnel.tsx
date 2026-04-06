"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

export default function CandidateFunnel({ data }: { data: any[] }) {
  const steps = [
    { label: "Job Views", icon: "👁️", value: "100%", count: 1240 },
    { label: "Applications", icon: "📝", value: "25%", count: 320 },
    { label: "Shortlisted", icon: "✅", value: "8%", count: 92 },
    { label: "Interviewed", icon: "🤝", value: "4%", count: 42 },
    { label: "Hired", icon: "🏆", value: "1%", count: 8 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6 mb-8"
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground">Candidate Hiring Funnel</h2>
        <p className="text-sm text-secondary">Track candidate progress from application to hiring</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((step, i) => (
          <div key={step.label} className="relative flex flex-col items-center">
            {/* Visual Box */}
            <div 
              className={`w-full p-4 rounded-xl text-center flex flex-col items-center justify-center border transition-all hover:bg-slate-50`}
              style={{
                opacity: 1 - (i * 0.15),
              }}
            >
              <span className="text-2xl mb-2">{step.icon}</span>
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{step.label}</p>
              <h4 className="text-xl font-bold text-foreground">{step.count}</h4>
              <p className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 rounded-full mt-2">
                {step.value}
              </p>
            </div>

            {/* Arrow/Indicator for funnel flow */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-accent rounded-xl border border-blue-100 flex items-start gap-4">
        <span className="text-xl text-primary">💡</span>
        <div className="text-sm text-primary font-medium">
          Identify where candidates drop off during your hiring process. Currently, 25% of users who view your jobs apply, which is 10% higher than the industry average.
        </div>
      </div>
    </motion.div>
  );
}
