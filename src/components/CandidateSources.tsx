"use client"

import React, { useState, useEffect } from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend 
} from 'recharts';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const COLORS = ['hsl(var(--primary))', 'hsl(var(--primary) / 0.7)', 'hsl(var(--primary) / 0.4)', 'hsl(var(--muted))'];

export default function CandidateSources({ data }: { data: any[] }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="lg:col-span-4 h-full min-h-[300px] bg-card animate-pulse rounded-xl" />;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-4 h-full min-h-[300px]"
    >
      <Card className="border-none shadow-none h-full flex flex-col bg-card">
        <CardHeader className="px-5 py-4">
          <CardTitle className="text-lg font-semibold tracking-tight">Sources</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between pt-0 pb-4 px-5">
          <div className="flex-1 min-h-[140px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={160} minWidth={0}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={65}
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
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: 'none',
                    backgroundColor: 'hsl(var(--foreground))',
                    color: 'hsl(var(--primary-foreground))',
                    fontSize: '9px'
                  }}
                />
                <Legend verticalAlign="bottom" height={24} iconType="circle" wrapperStyle={{ fontSize: '8px', paddingTop: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-2 pt-2 border-t space-y-2">
            <div className="flex justify-between items-center text-[8px] uppercase font-semibold tracking-widest text-muted-foreground/70">
              <span>Top Source</span>
              <span className="text-foreground">JobGiga (45%)</span>
            </div>
            <div className="w-full bg-muted h-0.5 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[45%]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
