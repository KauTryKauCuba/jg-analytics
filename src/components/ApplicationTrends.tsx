"use client"

import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart, 
  Area 
} from 'recharts';
import { motion } from 'framer-motion';

export default function ApplicationTrends({ data }: { data: any[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6 mb-8 lg:col-span-8 h-[400px] flex flex-col"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-foreground">Application Trends</h2>
          <p className="text-sm text-secondary">Monitor candidate activity across selected time periods</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="flex h-10 rounded-xl border border-border bg-card py-1 h-9 px-3 text-xs w-40 cursor-pointer hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 60 days</option>
            <option>Custom range</option>
          </select>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: -20, right: 20, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              fontSize={10} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b' }} 
              interval="preserveStartEnd"
              padding={{ left: 20, right: 20 }}
            />
            <YAxis 
              fontSize={10} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b' }} 
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0', 
                boxShadow: 'none',
                fontSize: '12px',
                padding: '8px 12px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="apps" 
              name="Applications"
              stroke="#4f46e5" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorApps)" 
              dot={{ stroke: '#4f46e5', strokeWidth: 2, r: 4, fill: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
