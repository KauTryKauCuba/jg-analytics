"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Eye, FileCheck2, Sparkles, CheckCircle2, XCircle, Calendar, Timer } from 'lucide-react';

export default function VisibilityInsights({ stats }: { stats: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Visibility Insights */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Eye className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Job Visibility Insights</h2>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-0.5">Impressions</p>
              <h3 className="text-2xl font-bold text-foreground">{stats.impressions}</h3>
            </div>
            <div className="h-12 w-12 flex items-center justify-center bg-indigo-50 text-primary rounded-xl">
              <Eye className="w-6 h-6" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-100 bg-emerald-50/20">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">Click-through rate</p>
              <h4 className="text-xl font-bold text-emerald-600">{stats.ctr}</h4>
            </div>
            <div className="p-4 rounded-xl border border-slate-100 bg-blue-50/20">
              <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">Apply rate</p>
              <h4 className="text-xl font-bold text-primary">{stats.applyRate}</h4>
            </div>
          </div>
          
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-4">
            <span className="text-xl text-emerald-600">📈</span>
            <div className="text-xs text-emerald-700 font-medium">
              {stats.benchmarkText}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interview Activity */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Interview Activity</h2>
        </div>
        <p className="text-sm text-secondary mb-6 italic">Track your interview progress and candidate engagement</p>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 border rounded-xl border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-foreground">Interviews scheduled</span>
            </div>
            <span className="text-lg font-bold text-foreground">42</span>
          </div>

          <div className="flex justify-between items-center p-3 border rounded-xl border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-foreground">Interviews completed</span>
            </div>
            <span className="text-lg font-bold text-emerald-600 font-bold">36</span>
          </div>

          <div className="flex justify-between items-center p-3 border rounded-xl border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
                <XCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-foreground">Candidate no-shows</span>
            </div>
            <span className="text-lg font-bold text-red-600">2</span>
          </div>
          
          <div className="p-4 border border-dashed rounded-xl border-slate-200 mt-2 flex flex-col items-center">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">Average interview rating</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={`text-lg ${s <= 4 ? 'text-amber-400' : 'text-slate-300'}`}>★</span>
              ))}
              <span className="ml-2 font-bold text-slate-700">4.8 / 5</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hiring Speed & AI Insights */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card text-card-foreground border rounded-xl overflow-hidden shadow-none p-6 flex flex-col justify-between overflow-hidden relative"
      >
        <div className="mb-6 relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Hiring Speed</h2>
          </div>
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full inline-block mb-4">Smart Signature Logic</p>
          
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-0.5">Time to first app</p>
                <p className="text-lg font-bold text-foreground">4h</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-0.5">Time to hire</p>
                <p className="text-lg font-bold text-primary">18 days</p>
              </div>
            </div>
            
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[70%]" />
            </div>
            <p className="text-[10px] text-primary font-medium text-center">
              Faster hiring improves your chances of securing top candidates 🚀
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-900 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-20 transform translate-x-2 -translate-y-2">
            <Sparkles className="w-12 h-12 text-blue-400" />
          </div>
          <h4 className="text-white text-xs font-bold mb-3 flex items-center gap-2">
            <span className="p-1 bg-white/20 rounded-md"><Timer className="w-3 h-3" /></span>
            AI HIRING INSIGHTS
          </h4>
          <div className="space-y-3">
             <p className="text-[11px] text-slate-300 leading-relaxed border-l-2 border-blue-400 pl-3">
              "Candidates apply more between **8PM–11PM**. Posting during this time may improve results."
             </p>
             <p className="text-[11px] text-slate-300 leading-relaxed border-l-2 border-emerald-400 pl-3">
              "Shortlisted candidates with portfolios have **2× higher** interview success."
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
