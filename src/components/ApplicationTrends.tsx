"use client"

import React, { useState, useEffect } from 'react';
import { 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart, 
  Area 
} from 'recharts';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ApplicationTrends({ data }: { data: any[] }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="mb-4 lg:col-span-8 h-full min-h-[300px] bg-card animate-pulse rounded-xl" />;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 lg:col-span-8 h-full min-h-[300px]"
    >
      <Card className="border-none shadow-none h-full flex flex-col bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 px-5 pt-4">
          <div>
            <CardTitle className="text-lg font-semibold tracking-tight">Application Activity</CardTitle>
          </div>
          <Select defaultValue="30">
            <SelectTrigger className="w-[100px] h-7 bg-white border-border/50 text-[10px] font-semibold focus:ring-primary/20 rounded-md">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent align="end" className="text-[10px]">
              <SelectItem value="7">7 Days</SelectItem>
              <SelectItem value="30">30 Days</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="flex-1 w-full relative pt-0 px-5 pb-5">
          <ResponsiveContainer width="100%" height={200} minWidth={0}>
            <AreaChart data={data} margin={{ left: -30, right: 10, top: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                fontSize={8} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))' }} 
              />
              <YAxis 
                fontSize={8} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'hsl(var(--muted-foreground))' }} 
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: 'none',
                  backgroundColor: 'hsl(var(--foreground))',
                  color: 'hsl(var(--primary-foreground))',
                  fontSize: '9px',
                  padding: '4px 8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="apps" 
                name="Apps"
                stroke="hsl(var(--primary))" 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#colorApps)" 
                dot={{ stroke: 'hsl(var(--primary))', strokeWidth: 1.5, r: 3, fill: '#fff' }}
                activeDot={{ r: 5, strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}
