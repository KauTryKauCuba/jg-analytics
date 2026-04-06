"use client"

import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import SummaryCards from '@/components/SummaryCards';
import JobPerformance from '@/components/JobPerformance';
import CandidateFunnel from '@/components/CandidateFunnel';
import ApplicationTrends from '@/components/ApplicationTrends';
import CandidateSources from '@/components/CandidateSources';
import VisibilityInsights from '@/components/VisibilityInsights';
import { 
  summaryStats, 
  jobPerformanceData, 
  funnelData, 
  applicationTrendData, 
  candidateSourceData, 
  visibilityInsights,
  aiInsights
} from '@/lib/mockData';
import { Sparkles, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnalyticsDashboard() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />

        {/* 1. Overview Summary Cards */}
        <section className="mb-12">
          <SummaryCards stats={summaryStats} />
        </section>

        {/* 2 & 5. Application Trends & Candidate Sources */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <ApplicationTrends data={applicationTrendData} />
          <CandidateSources data={candidateSourceData} />
        </section>

        {/* 3. Candidate Hiring Funnel */}
        <section className="mb-12">
          <CandidateFunnel data={funnelData} />
        </section>

        {/* 4. Job Performance Analytics */}
        <section className="mb-12">
          <JobPerformance data={jobPerformanceData} />
        </section>

        {/* 6, 7 & 8. Visibility, Interview Activity & Hiring Speed */}
        <section className="mb-12">
          <VisibilityInsights stats={visibilityInsights} />
        </section>

        {/* 9. Smart AI Insights (Signature Feature) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-10 relative overflow-hidden"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <BrainCircuit className="w-64 h-64 text-blue-400" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 opacity-10 pointer-events-none">
            <Sparkles className="w-32 h-32 text-indigo-400" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-500 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Smart AI Hiring Insights</h2>
                <p className="text-slate-400 text-sm">Powered by JobGiga Intelligent Engine</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiInsights.map((insight, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-all group"
                >
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {insight}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-400/10 px-2 py-0.5 rounded-full group-hover:bg-indigo-400/20 transition-all">
                      Strategic Suggestion
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-10 border-t border-slate-800 flex justify-between items-center text-slate-500 text-xs">
              <p>© 2026 JobGiga Intelligence — Dashboard v2.4.0</p>
              <p className="uppercase tracking-[0.2em] font-medium">Analytics Real-time Live Status: 🟢 Stable</p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
