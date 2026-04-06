"use client"

import React from 'react';
import { Calendar, LayoutDashboard, Filter, ChevronDown } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b pb-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-10 w-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
             <LayoutDashboard className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Employer Analytics</h1>
        </div>
        <p className="text-secondary text-sm max-w-lg">
          Track how your job posts and candidates are performing in real time. 
          Make data-driven decisions to optimize your hiring process.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-0">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-secondary uppercase tracking-wider ml-1">Filter by Job</label>
          <div className="relative group">
            <select className="appearance-none flex h-11 w-56 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm cursor-pointer hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors">
              <option>All Jobs</option>
              <option>Senior Software Engineer</option>
              <option>Product Manager</option>
              <option>UX/UI Designer</option>
            </select>
            <ChevronDown className="w-4 h-4 text-secondary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-primary transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
           <label className="text-[10px] font-bold text-secondary uppercase tracking-wider ml-1">Analytics Period</label>
           <button className="flex items-center justify-between h-11 w-48 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm cursor-pointer hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors group">
             <div className="flex items-center gap-2">
               <Calendar className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
               <span className="text-foreground font-medium">Last 30 days</span>
             </div>
             <ChevronDown className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
           </button>
        </div>

        <div className="flex flex-col gap-1 pt-4">
           <button className="inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-none shadow-indigo-100 hover:scale-[1.02] active:scale-[0.98]">
             <Filter className="w-4 h-4 mr-2" />
             Apply Filters
           </button>
        </div>
      </div>
    </div>
  );
}
