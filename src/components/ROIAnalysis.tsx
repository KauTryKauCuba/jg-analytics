"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Wallet,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const roiChartData = [
  { day: 'Day 1', job1: 12, job2: 10, job3: 15, job4: 8, job5: 11 },
  { day: 'Day 5', job1: 65, job2: 52, job3: 78, job4: 42, job5: 58 },
  { day: 'Day 10', job1: 142, job2: 110, job3: 168, job4: 85, job5: 124 },
  { day: 'Day 15', job1: 220, job2: 185, job3: 264, job4: 128, job5: 194 },
  { day: 'Day 20', job1: 310, job2: 245, job3: 382, job4: 182, job5: 278 },
  { day: 'Day 25', job1: 412, job2: 320, job3: 495, job4: 242, job5: 362 },
  { day: 'Day 30', job1: 500, job2: 400, job3: 650, job4: 320, job5: 480 },
];

const jobs = [
  { key: 'job1', name: 'Software Engineer', color: '#6366f1' },
  { key: 'job2', name: 'Product Manager', color: '#818cf8' },
  { key: 'job3', name: 'UX Designer', color: '#a5b4fc' },
  { key: 'job4', name: 'Marketing', color: '#c7d2fe' },
  { key: 'job5', name: 'Sales', color: '#e0e7ff' },
];

interface ROIAnalysisProps {
  selectedJob?: string;
}

export default function ROIAnalysis({ selectedJob = 'all' }: ROIAnalysisProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isFiltered = selectedJob !== 'all';
  const displayedJobs = isFiltered 
    ? jobs.filter(j => j.key === selectedJob)
    : jobs;

  const roiData = {
    totalSpend: isFiltered ? 300 : 1500,
    costPerView: isFiltered ? (selectedJob === 'job1' ? 0.45 : 0.64) : 0.64,
    costPerApp: isFiltered ? (selectedJob === 'job1' ? 2.10 : 3.00) : 3.00,
    costPerHire: 150,
    avgDailyReach: 78,
    avgDailyApps: 16,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4">
      {/* Spend & Core ROI */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-8"
      >
        <Card className="border-none shadow-none bg-card h-full">
          <CardHeader className="px-4 py-3 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-3.5 h-3.5 text-primary" />
              <CardTitle className="text-base font-semibold tracking-tight">
                Performance ROI {isFiltered ? `for ${displayedJobs[0]?.name}` : 'by Job'}
              </CardTitle>
            </div>
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[8px] font-semibold uppercase tracking-widest px-2">
              {isFiltered ? 'RM300 x 1 Job' : 'RM300 x 5 Jobs'}
            </Badge>
          </CardHeader>
          <CardContent className="px-4 pb-4 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              <div className="p-2.5 bg-muted/20 rounded-lg border border-border/30">
                <p className="text-[8px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <DollarSign className="w-2 h-2" /> Cost Per View
                </p>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[9px] font-semibold text-muted-foreground/60">RM</span>
                  <h3 className="text-lg font-semibold text-foreground">{roiData.costPerView.toFixed(2)}</h3>
                </div>
              </div>

              <div className="p-2.5 bg-muted/20 rounded-lg border border-border/30">
                <p className="text-[8px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Calculator className="w-2 h-2" /> Cost Per App
                </p>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[9px] font-semibold text-muted-foreground/60">RM</span>
                  <h3 className="text-lg font-semibold text-foreground">{roiData.costPerApp.toFixed(2)}</h3>
                </div>
              </div>

              <div className="p-2.5 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-[8px] font-semibold text-primary uppercase tracking-widest mb-1 flex items-center gap-1">
                  <TrendingUp className="w-2 h-2" /> Target Cost Per Hire
                </p>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[9px] font-semibold text-primary/60">RM</span>
                  <h3 className="text-lg font-semibold text-primary">{roiData.costPerHire}</h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/60 border-b border-border/50 pb-1.5 flex items-center gap-2">
                  Cumulative Views per Posting <ArrowUpRight className="w-2.5 h-2.5 text-emerald-500" />
                </h4>
                <div className="h-[140px] w-full">
                  {isMounted ? (
                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                      <AreaChart data={roiChartData} margin={{ left: -30, right: 0, top: 0, bottom: 0 }}>
                        <XAxis dataKey="day" fontSize={7} axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis fontSize={7} axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: 'hsl(var(--foreground))', color: '#fff', fontSize: '8px', padding: '4px' }} />
                        {displayedJobs.map((job) => (
                          <Area 
                            key={job.key}
                            type="monotone" 
                            dataKey={job.key} 
                            name={job.name}
                            stroke={job.color} 
                            fill="transparent" 
                            strokeWidth={1.5} 
                            activeDot={{ r: 4 }}
                          />
                        ))}
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="w-full h-full bg-muted/5 animate-pulse rounded-lg" />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[7px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                  {displayedJobs.map((job) => (
                    <div key={job.key} className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: job.color }} />
                      {job.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="bg-muted/10 p-2 rounded-lg border border-border/30">
                   <p className="text-[9px] font-semibold text-foreground">{isFiltered ? 'Current Reach' : 'Top Performer'}</p>
                   <p className="text-[11px] text-primary font-semibold">
                     {isFiltered ? `${displayedJobs[0]?.name} (Live)` : 'UX Designer (650 Views)'}
                   </p>
                </div>
                <div className="bg-muted/10 p-2 rounded-lg border border-border/30">
                   <p className="text-[9px] font-semibold text-foreground">Efficiency Trend</p>
                   <p className="text-[11px] text-muted-foreground font-medium">
                     {isFiltered ? '+12.4% better than avg' : '470 Views / Active Post'}
                   </p>
                </div>
                <div className="bg-primary/5 p-2 rounded-lg border border-primary/10">
                   <p className="text-[9px] font-semibold text-primary uppercase">Portfolio ROI</p>
                   <p className="text-[11px] text-primary/80 font-semibold">RM {isFiltered ? '300' : '1,500'} Spend</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>


      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:col-span-4"
      >
        <Card className="border-none shadow-none bg-indigo-900 h-full relative overflow-hidden group">
          <CardHeader className="px-4 py-4 pb-1 relative z-10">
            <CardTitle className="text-base font-semibold text-white tracking-tight">Strategy</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 z-10 relative">
            <div className="space-y-2">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                <p className="text-[10px] text-indigo-50 font-medium leading-tight">
                  "Current **Cost Per App (RM3.00)** is top-tier. Scaling now will drive efficiency."
                </p>
              </div>
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                <p className="text-[10px] text-indigo-50 font-medium leading-tight">
                  "14-day hire cycle reduces effective costs by **22%**."
                </p>
              </div>
            </div>
            <button className="w-full mt-3 bg-primary hover:bg-primary/90 text-white font-semibold py-1.5 px-3 rounded-lg text-[10px] transition-all active:scale-95">
              Boost ROI
            </button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
