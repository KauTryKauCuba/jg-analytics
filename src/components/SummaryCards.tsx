"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function SummaryCards({ stats }: { stats: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6 hover:border-primary/20 transition-all cursor-default"
        >
          <p className="text-sm font-medium text-secondary mb-1">{stat.label}</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              {stat.change}
            </span>
          </div>
          <p className="text-[10px] text-secondary/60 mt-1 uppercase tracking-wider font-semibold">
            {stat.subtext}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
