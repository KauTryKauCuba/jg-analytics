"use client"

import React from 'react';
import { Calendar, LayoutDashboard, Filter, ChevronDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  onJobChange: (value: any) => void;
  onRangeChange: (value: any) => void;
  jobs: { key: string; name: string }[];
}

export default function DashboardHeader({ onJobChange, onRangeChange, jobs }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 border-b border-border/50 pb-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="h-8 w-8 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
             <LayoutDashboard className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground leading-none">JobGiga Intelligence</h1>
        </div>
        <p className="text-muted-foreground text-[10px] font-semibold uppercase tracking-widest max-w-sm">
          Employer Dashboard Center
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest ml-0.5">Focus Posting</label>
          <Select defaultValue="all" onValueChange={onJobChange}>
            <SelectTrigger className="w-[200px] h-9 bg-white border-border/50 font-semibold text-[11px] focus:ring-primary/20 rounded-lg">
              <SelectValue placeholder="All Active Postings" />
            </SelectTrigger>
            <SelectContent className="font-semibold">
              <SelectItem value="all">All Active Postings</SelectItem>
              {jobs.map((job) => (
                <SelectItem key={job.key} value={job.key}>{job.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
           <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest ml-0.5">Timeline</label>
           <Select defaultValue="30" onValueChange={onRangeChange}>
            <SelectTrigger className="w-[120px] h-9 bg-white border-border/50 font-semibold text-[11px] focus:ring-primary/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                <SelectValue placeholder="30 days" />
              </div>
            </SelectTrigger>
            <SelectContent className="font-semibold">
              <SelectItem value="7">Last 7d</SelectItem>
              <SelectItem value="30">Last 30d</SelectItem>
              <SelectItem value="90">Last 90d</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-3.5">
           <Button className="h-9 px-4 text-[10px] font-semibold active:scale-95 transition-all rounded-lg uppercase tracking-widest">
             <Filter className="w-3.5 h-3.5 mr-2" />
             Reload
           </Button>
        </div>
      </div>
    </div>
  );
}
