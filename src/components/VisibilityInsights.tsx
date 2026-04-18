"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Eye, FileCheck2, Sparkles, CheckCircle2, XCircle, Calendar, Timer } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function VisibilityInsights({ stats }: { stats: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {/* Visibility Insights */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-none shadow-none h-full bg-card">
          <CardHeader className="px-5 py-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-primary" />
              <CardTitle className="text-lg font-semibold tracking-tight">Visibility</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 px-5 pb-5">
            <div className="flex justify-between items-center bg-muted/20 p-3 rounded-lg border border-border/30">
              <div>
                <p className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-0.5">Impressions</p>
                <h3 className="text-xl font-semibold text-foreground">{stats.impressions}</h3>
              </div>
              <div className="h-10 w-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                <Eye className="w-5 h-5" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-border/30 bg-emerald-50/10">
                <p className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-1">CTR</p>
                <h4 className="text-base font-semibold text-emerald-600">{stats.ctr}</h4>
              </div>
              <div className="p-3 rounded-lg border border-border/30 bg-primary/5">
                <p className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-1">Apply</p>
                <h4 className="text-base font-semibold text-primary">{stats.applyRate}</h4>
              </div>
            </div>
            
            <div className="p-2.5 bg-emerald-50/30 rounded-lg border border-emerald-100/30 flex items-start gap-3">
              <span className="text-sm translate-y-0.5">📈</span>
              <div className="text-[9px] text-emerald-700 font-semibold leading-tight">
                {stats.benchmarkText}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Interview Activity */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-none shadow-none h-full bg-card">
          <CardHeader className="px-5 py-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <CardTitle className="text-lg font-semibold tracking-tight">Interviews</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 px-5 pb-5">
            <div className="flex justify-between items-center p-2 border rounded-lg border-border/30 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-blue-50/50 flex items-center justify-center text-blue-600">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-foreground">Scheduled</span>
              </div>
              <span className="text-sm font-semibold text-foreground">42</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded-lg border-border/30 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-emerald-50/50 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-foreground">Done</span>
              </div>
              <span className="text-sm font-semibold text-emerald-600">36</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded-lg border-border/30 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-destructive/5 flex items-center justify-center text-destructive">
                  <XCircle className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-foreground">No-shows</span>
              </div>
              <span className="text-sm font-semibold text-destructive">2</span>
            </div>
            
            <div className="p-3 border border-dashed rounded-lg border-border/50 mt-1 flex flex-col items-center">
              <p className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-0.5">Rating</p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-amber-400">★★★★</span>
                <span className="text-sm text-muted/20">★</span>
                <span className="ml-1.5 font-semibold text-foreground text-xs">4.8</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Hiring Speed & AI Insights */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h-full"
      >
        <Card className="border-none shadow-none h-full bg-card overflow-hidden relative flex flex-col">
          <CardHeader className="relative z-10 px-5 py-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <CardTitle className="text-lg font-semibold tracking-tight">Hiring Speed</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between relative z-10 pt-0 px-5 pb-5">
            <div className="space-y-3 mb-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-0.5">Time to Apps</p>
                  <p className="text-base font-semibold text-foreground">4h</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-0.5">Time to Hire</p>
                  <p className="text-base font-semibold text-primary">18d</p>
                </div>
              </div>
              
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[70%]" />
              </div>
            </div>

            <div className="p-3 bg-foreground rounded-xl relative overflow-hidden group">
              <h4 className="text-primary-foreground text-[8px] font-semibold mb-2 flex items-center gap-2 uppercase tracking-widest">
                <Sparkles className="w-2.5 h-2.5 text-primary" />
                AI INSIGHTS
              </h4>
              <div className="space-y-2">
                 <p className="text-[9px] text-primary-foreground/70 leading-tight border-l-2 border-primary/40 pl-2">
                  Post between **8PM–11PM**.
                 </p>
                 <p className="text-[9px] text-primary-foreground/70 leading-tight border-l-2 border-emerald-400/40 pl-2">
                  Portfolios increase success by **2×**.
                 </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
