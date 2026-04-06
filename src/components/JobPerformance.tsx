"use client"

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';

export default function JobPerformance({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
      {/* Table Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-8 bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none flex flex-col"
      >
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-foreground">Job Post Performance</h2>
          <p className="text-sm text-secondary">See which roles attract the most candidates and engagement</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider text-right">Views</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider text-right">Applicants</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider text-right">Shortlisted</th>
                <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider text-right">Interviews</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map((job, i) => (
                <tr key={job.title} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{job.title}</td>
                  <td className="px-6 py-4 text-sm text-secondary text-right">{job.views}</td>
                  <td className="px-6 py-4 text-sm text-secondary text-right">{job.applicants}</td>
                  <td className="px-6 py-4 text-sm text-secondary text-right">{job.shortlisted}</td>
                  <td className="px-6 py-4 text-sm text-secondary text-right">{job.interviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Bar Chart Section */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-4 bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6 flex flex-col"
      >
        <h3 className="text-lg font-bold text-foreground mb-1">Applications by Role</h3>
        <p className="text-xs text-secondary mb-6">Comparative view of applicant volume</p>
        <div className="flex-1 min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis 
                type="category" 
                dataKey="title" 
                width={120} 
                fontSize={10} 
                tick={{ fill: '#64748b' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(79, 70, 229, 0.05)' }}
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: '1px solid #e2e8f0', 
                  boxShadow: 'none',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="applicants" radius={[0, 4, 4, 0]}>
                {data.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? '#4f46e5' : '#818cf8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
