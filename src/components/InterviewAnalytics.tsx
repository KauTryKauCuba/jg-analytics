"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  UserCheck, 
  XCircle, 
  Clock, 
  TrendingUp, 
  CheckCircle2,
  PieChart as PieChartIcon
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';

export default function InterviewAnalytics({ 
  weeklyData, 
  timeDistribution, 
  conversionData, 
  activity 
}: { 
  weeklyData: any[], 
  timeDistribution: any[], 
  conversionData: any[],
  activity: any 
}) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="space-y-3 h-[400px] bg-card animate-pulse rounded-xl" />;

  return (
    <div className="space-y-3">
      {/* 1. High Level Summary Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Scheduled", value: activity.scheduled, icon: Calendar, color: "text-blue-500", bg: "bg-blue-50/50" },
          { label: "Completed", value: activity.completed, icon: UserCheck, color: "text-emerald-500", bg: "bg-emerald-50/50" },
          { label: "No-Shows", value: activity.noShows, icon: XCircle, color: "text-destructive", bg: "bg-destructive/5" },
          { label: "Avg Rating", value: `${activity.avgRating}/5`, icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-50/50" },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-none bg-card hover:bg-muted/10 transition-colors">
            <CardContent className="p-3 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-0.5">{stat.label}</p>
                <h3 className="text-lg font-semibold text-foreground">{stat.value}</h3>
              </div>
              <div className={`h-8 w-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* Weekly Activity Bar Chart */}
        <Card className="border-none shadow-none lg:col-span-8 bg-card">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-base font-semibold tracking-tight">Weekly Volume</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 pt-1">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.2} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={8} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis axisLine={false} tickLine={false} fontSize={8} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', backgroundColor: 'hsl(var(--foreground))', color: '#fff', fontSize: '9px', padding: '4px' }} cursor={{ fill: 'hsl(var(--muted)/0.2)' }} />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} barSize={20} />
                  <Bar dataKey="completed" fill="hsl(var(--emerald-500))" radius={[3, 3, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 flex items-center gap-3 text-[8px] font-semibold uppercase tracking-widest text-muted-foreground/50">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-primary" /> Total</div>
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-emerald-500" /> Done</div>
            </div>
          </CardContent>
        </Card>

        {/* Time Distribution Pie Chart */}
        <Card className="border-none shadow-none lg:col-span-4 bg-card">
          <CardHeader className="px-4 py-3">
            <CardTitle className="text-base font-semibold tracking-tight">Preferred Slots</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 pt-1 flex flex-col items-center">
            <div className="h-[140px] w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <PieChart>
                  <Pie
                    data={timeDistribution}
                    dataKey="value"
                    nameKey="time"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={5}
                    stroke="none"
                  >
                    {timeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 w-full space-y-1.5">
              {timeDistribution.map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-muted/10 p-1.5 rounded-lg border border-border/20">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                     <span className="text-[10px] font-semibold">{item.time}</span>
                  </div>
                  <span className="text-[9px] font-semibold text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interview Funnel Conversion */}
      <Card className="border-none shadow-none bg-foreground text-primary-foreground border-none overflow-hidden relative">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-base font-semibold tracking-tight">Performance Funnel</CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-1">
          <div className="grid grid-cols-5 gap-2">
            {conversionData.map((stage, i) => (
              <div key={i} className="p-2 bg-primary-foreground/5 border border-primary-foreground/5 rounded-lg text-center relative">
                 <p className="text-[8px] font-semibold text-primary-foreground/40 uppercase tracking-widest mb-1">{stage.stage}</p>
                 <h4 className="text-lg font-semibold text-primary-foreground">{stage.count}</h4>
                 <div className="text-[8px] font-semibold text-emerald-400 mt-0.5">
                    {i === 0 ? "ENTRY" : `${((stage.count / conversionData[i-1].count) * 100).toFixed(0)}% CR`}
                 </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
