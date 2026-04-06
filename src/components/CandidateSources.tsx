"use client"

import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from 'recharts';
import { motion } from 'framer-motion';

const COLORS = ['#4f46e5', '#818cf8', '#a5b4fc', '#e2e8f0'];

export default function CandidateSources({ data }: { data: any[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6 lg:col-span-4 h-full flex flex-col min-h-[400px]"
    >
      <div className="mb-4">
        <h2 className="text-xl font-bold text-foreground">Candidate Sources</h2>
        <p className="text-sm text-secondary">Understand where your applicants are coming from</p>
      </div>

      <div className="flex-1 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0', 
                boxShadow: 'none',
                fontSize: '12px'
              }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 pt-4 border-t space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-secondary font-medium">Top Source</span>
          <span className="text-foreground font-bold">JobGiga Search (45%)</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[45%]" />
        </div>
      </div>
    </motion.div>
  );
}
