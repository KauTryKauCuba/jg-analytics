"use client";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  MessageSquare,
  CreditCard,
  UserCheck,
  FileText,
  Search,
  Megaphone,
  BarChart3,
  HelpCircle,
  Bell,
  ChevronDown,
  Monitor,
  Smartphone,
  Tablet,
  Eye,
  FileDown,
  UserPlus,
  DollarSign,
  TrendingUp,
  MoreHorizontal,
  ChevronRight,
  Clock,
  Star,
  Award,
  Zap
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis as ReXAxis,
  YAxis as ReYAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  PieChart,
  Pie
} from "recharts";
import { FunnelChart, PatternLines } from "@/components/ui/funnel-chart";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const lineData = [
  { name: "01/01", orange: 5, blue: 2, purple: 1 },
  { name: "02", orange: 8, blue: 4, purple: 3 },
  { name: "03", orange: 12, blue: 7, purple: 5 },
  { name: "04", orange: 18, blue: 11, purple: 8 },
  { name: "05", orange: 25, blue: 16, purple: 12 },
  { name: "06", orange: 35, blue: 22, purple: 18 },
  { name: "07", orange: 50, blue: 30, purple: 25 },
  { name: "08", orange: 70, blue: 42, purple: 35 },
  { name: "09", orange: 95, blue: 58, purple: 48 },
  { name: "10", orange: 120, blue: 75, purple: 62 },
  { name: "11", orange: 145, blue: 92, purple: 78 },
  { name: "12", orange: 165, blue: 110, purple: 92 },
  { name: "13", orange: 185, blue: 130, purple: 108 },
  { name: "14", orange: 205, blue: 152, purple: 125 },
  { name: "15", orange: 230, blue: 175, purple: 142 },
];

const spendData = [
  { name: "Job Posting", value: 30, color: "#22c55e" },
  { name: "Jobs Ads", value: 40, color: "#3b82f6" },
  { name: "Company Ads", value: 15, color: "#eab308" },
  { name: "Search Talent", value: 15, color: "#64748b" },
];

const jobsPerformanceData = [
  {
    id: "fullstack",
    title: "Project Manager - IT (HQ)",
    stats: [
      { label: "Views", count: 1200, color: "bg-sky-500" },
      { label: "Applied", count: 239, color: "bg-sky-400" },
      { label: "Shortlisted", count: 82, color: "bg-sky-300" },
      { label: "Interviewed", count: 32, color: "bg-sky-200" },
      { label: "Hired", count: 1, color: "bg-sky-100" },
    ],
    metrics: { efficiency: "82%", conversion: "19.9%", quality: "A" },
    sourcing: [
      { name: "JobGiga", count: 154, percentage: 65, quality: "High" },
      { name: "LinkedIn", count: 48, percentage: 20, quality: "Medium" },
      { name: "Referral", count: 24, percentage: 10, quality: "High" },
      { name: "Indeed", count: 13, percentage: 5, quality: "Low" },
    ],
    aging: { dayOpen: 14, targetDay: 30, velocity: "On Track" },
    appliedTimeDistribution: [
      { time: "1h", count: 18, color: "var(--primary)" },
      { time: "6h", count: 42, color: "var(--primary)" },
      { time: "12h", count: 85, color: "var(--primary)" },
      { time: "1d", count: 64, color: "var(--primary)" },
      { time: "2d", count: 22, color: "var(--primary)" },
      { time: "3d+", count: 8, color: "var(--primary)" },
    ],
    topTalents: [
      { name: "Sarah Connor", score: 98, stage: "Interviewed", image: "https://i.pravatar.cc/150?u=sarah" },
      { name: "John Doe", score: 94, stage: "Shortlisted", image: "https://i.pravatar.cc/150?u=john" },
      { name: "Alex Rivet", score: 91, stage: "Interviewed", image: "https://i.pravatar.cc/150?u=alex" },
    ],
    latestApplicants: [
      { name: "Michael K.", time: "42 min ago", image: "https://i.pravatar.cc/150?u=michael" },
      { name: "Jennifer L.", time: "1h 15m ago", image: "https://i.pravatar.cc/150?u=jennifer" },
      { name: "Robert P.", time: "3h ago", image: "https://i.pravatar.cc/150?u=robert" }
    ],
    interviewMetrics: {
      scheduled: 32,
      noShows: 2,
      cNPS: 88,
      velocity: "3.2h",
      funnel: [
        { stage: "Screening", count: 32, passRate: "82%" },
        { stage: "Technical", count: 26, passRate: "54%" },
        { stage: "Cultural", count: 14, passRate: "90%" },
        { stage: "Final/Offer", count: 12, passRate: "100%" },
      ],
      heatmap: [12, 18, 15, 22, 10, 5, 2],
      team: [
        { name: "Sarah Connor", time: "1.5h", count: 12 },
        { name: "John Doe", time: "4.2h", count: 8 },
        { name: "Alex Rivet", time: "2.8h", count: 10 },
      ],
      rejectionData: [
        { name: "Technical Gap", value: 45, color: "#0ea5e9" },
        { name: "Salary", value: 20, color: "#f59e0b" },
        { name: "Culture", value: 15, color: "#8b5cf6" },
        { name: "Withdrawn", value: 20, color: "#94a3b8" },
      ],
      velocityData: [
        { day: "01", time: 4.2 }, { day: "05", time: 3.8 }, { day: "10", time: 5.1 },
        { day: "15", time: 4.5 }, { day: "20", time: 3.2 }, { day: "25", time: 2.8 },
        { day: "30", time: 3.1 },
      ],
      onDeck: [
        { name: "Marcus L.", stage: "Technical", time: "Tomorrow, 10:00 AM" },
        { name: "Sophia R.", stage: "Cultural", time: "Tomorrow, 2:30 PM" },
        { name: "Kevin V.", stage: "Final", time: "Monday, 11:15 AM" },
      ],
      stagnation: [
        { stage: "Screening", days: 1.2 },
        { stage: "Technical", days: 6.5 },
        { stage: "Cultural", days: 2.1 },
        { stage: "Final", days: 1.8 },
      ],
      calibration: [
        { name: "Sarah Connor", passRate: 45, avgScore: 4.2, status: "Calibrated" },
        { name: "John Doe", passRate: 15, avgScore: 2.1, status: "Hawk" },
        { name: "Alex Rivet", passRate: 68, avgScore: 4.8, status: "Dove" },
      ]
    }
  },
  {
    id: "marketing",
    title: "Fullstack Developer (Internal)",
    stats: [
      { label: "Views", count: 840, color: "bg-indigo-500" },
      { label: "Applied", count: 156, color: "bg-indigo-400" },
      { label: "Shortlisted", count: 42, color: "bg-indigo-300" },
      { label: "Interviewed", count: 12, color: "bg-indigo-200" },
      { label: "Hired", count: 0, color: "bg-indigo-100" },
    ],
    metrics: { efficiency: "74%", conversion: "18.5%", quality: "B+" },
    sourcing: [
      { name: "JobGiga", count: 96, percentage: 62, quality: "Medium" },
      { name: "LinkedIn", count: 42, percentage: 27, quality: "High" },
      { name: "GitHub", count: 12, percentage: 8, quality: "High" },
      { name: "Others", count: 6, percentage: 3, quality: "Low" },
    ],
    aging: { dayOpen: 22, targetDay: 25, velocity: "Urgent" },
    appliedTimeDistribution: [
      { time: "1h", count: 8, color: "var(--primary)" },
      { time: "6h", count: 14, color: "var(--primary)" },
      { time: "12h", count: 32, color: "var(--primary)" },
      { time: "1d", count: 58, color: "var(--primary)" },
      { time: "2d", count: 34, color: "var(--primary)" },
      { time: "3d+", count: 10, color: "var(--primary)" },
    ],
    topTalents: [
      { name: "James Wilson", score: 95, stage: "Interviewed", image: "https://i.pravatar.cc/150?u=james" },
      { name: "Elena Gilbert", score: 92, stage: "Shortlisted", image: "https://i.pravatar.cc/150?u=elena" },
    ],
    latestApplicants: [
      { name: "David G.", time: "12 min ago", image: "https://i.pravatar.cc/150?u=david" },
      { name: "Emma W.", time: "5h ago", image: "https://i.pravatar.cc/150?u=emma" },
      { name: "Chris H.", time: "8h ago", image: "https://i.pravatar.cc/150?u=chris" }
    ],
    interviewMetrics: {
      scheduled: 18,
      noShows: 1,
      cNPS: 76,
      velocity: "5.8h",
      funnel: [
        { stage: "Screening", count: 18, passRate: "70%" },
        { stage: "Technical", count: 12, passRate: "35%" },
        { stage: "Cultural", count: 4, passRate: "100%" },
        { stage: "Final/Offer", count: 4, passRate: "100%" },
      ],
      heatmap: [5, 8, 12, 10, 6, 2, 0],
      team: [
        { name: "James Wilson", time: "3.5h", count: 6 },
        { name: "Elena Gilbert", time: "6.2h", count: 4 },
      ],
      rejectionData: [
        { name: "Technical Gap", value: 65, color: "#0ea5e9" },
        { name: "Salary", value: 10, color: "#f59e0b" },
        { name: "Culture", value: 10, color: "#8b5cf6" },
        { name: "Withdrawn", value: 15, color: "#94a3b8" },
      ],
      velocityData: [
        { day: "01", time: 6.2 }, { day: "10", time: 5.8 }, { day: "20", time: 7.1 },
        { day: "30", time: 5.8 },
      ],
      onDeck: [
        { name: "David G.", stage: "Screening", time: "Today, 4:00 PM" },
      ],
      stagnation: [
        { stage: "Screening", days: 0.8 },
        { stage: "Technical", days: 4.2 },
        { stage: "Cultural", days: 1.5 },
        { stage: "Final", days: 3.1 },
      ],
      calibration: [
        { name: "James Wilson", passRate: 22, avgScore: 2.8, status: "Hawk" },
        { name: "Elena Gilbert", passRate: 50, avgScore: 3.9, status: "Calibrated" },
      ]
    }
  },
  {
    id: "design",
    title: "UI/UX Designer (Contract)",
    stats: [
      { label: "Views", count: 1560, countDisplay: "1.5k", color: "bg-emerald-500" },
      { label: "Applied", count: 420, color: "bg-emerald-400" },
      { label: "Shortlisted", count: 98, color: "bg-emerald-300" },
      { label: "Interviewed", count: 15, color: "bg-emerald-200" },
      { label: "Hired", count: 0, color: "bg-emerald-100" },
    ],
    metrics: { efficiency: "91%", conversion: "26.9%", quality: "A+" },
    sourcing: [
      { name: "Dribbble", count: 210, percentage: 50, quality: "High" },
      { name: "JobGiga", count: 126, percentage: 30, quality: "High" },
      { name: "Behance", count: 63, percentage: 15, quality: "Medium" },
      { name: "Direct", count: 21, percentage: 5, quality: "Low" },
    ],
    aging: { dayOpen: 5, targetDay: 14, velocity: "Fast" },
    appliedTimeDistribution: [
      { time: "1h", count: 35, color: "var(--primary)" },
      { time: "6h", count: 72, color: "var(--primary)" },
      { time: "12h", count: 142, color: "var(--primary)" },
      { time: "1d", count: 110, color: "var(--primary)" },
      { time: "2d", count: 45, color: "var(--primary)" },
      { time: "3d+", count: 16, color: "var(--primary)" },
    ],
    topTalents: [
      { name: "Mia Wong", score: 99, stage: "Interviewed", image: "https://i.pravatar.cc/150?u=mia" },
      { name: "Oliver Queen", score: 93, stage: "Shortlisted", image: "https://i.pravatar.cc/150?u=oliver" },
      { name: "Felicity Smoak", score: 89, stage: "Applied", image: "https://i.pravatar.cc/150?u=felicity" },
    ],
    latestApplicants: [
      { name: "Tom R.", time: "2 min ago", image: "https://i.pravatar.cc/150?u=tom" },
      { name: "Lana L.", time: "28 min ago", image: "https://i.pravatar.cc/150?u=lana" },
      { name: "Bruce W.", time: "1h ago", image: "https://i.pravatar.cc/150?u=bruce" }
    ],
    interviewMetrics: {
      scheduled: 24,
      noShows: 0,
      cNPS: 92,
      velocity: "1.9h",
      funnel: [
        { stage: "Screening", count: 24, passRate: "90%" },
        { stage: "Technical", count: 22, passRate: "70%" },
        { stage: "Cultural", count: 15, passRate: "95%" },
        { stage: "Final/Offer", count: 14, passRate: "100%" },
      ],
      heatmap: [8, 10, 14, 12, 15, 6, 4],
      team: [
        { name: "Mia Wong", time: "1.2h", count: 10 },
        { name: "Oliver Queen", time: "2.5h", count: 8 },
        { name: "Felicity Smoak", time: "1.8h", count: 6 },
      ],
      rejectionData: [
        { name: "Technical Gap", value: 20, color: "#0ea5e9" },
        { name: "Salary", value: 15, color: "#f59e0b" },
        { name: "Culture", value: 55, color: "#8b5cf6" },
        { name: "Withdrawn", value: 10, color: "#94a3b8" },
      ],
      velocityData: [
        { day: "01", time: 2.1 }, { day: "10", time: 1.8 }, { day: "20", time: 2.3 },
        { day: "30", time: 1.9 },
      ],
      onDeck: [
        { name: "Emma B.", stage: "Offer Review", time: "Monday, 9:00 AM" },
      ],
      stagnation: [
        { stage: "Screening", days: 2.5 },
        { stage: "Technical", days: 8.1 },
        { stage: "Cultural", days: 3.2 },
        { stage: "Final", days: 1.2 },
      ],
      calibration: [
        { name: "Mia Wong", passRate: 35, avgScore: 3.5, status: "Calibrated" },
        { name: "Oliver Queen", passRate: 12, avgScore: 1.8, status: "Hawk" },
        { name: "Felicity Smoak", passRate: 75, avgScore: 4.9, status: "Dove" },
      ]
    }
  }
];

const heatMapData = [
  { name: "Selangor", value: "45%", count: 1240, heat: "High" },
  { name: "Kuala Lumpur", value: "32%", count: 980, heat: "High" },
  { name: "Johor", value: "15%", count: 420, heat: "Medium" },
  { name: "Penang", value: "12%", count: 350, heat: "Medium" },
  { name: "Perak", value: "8%", count: 180, heat: "Low" },
  { name: "Others", value: "5%", count: 120, heat: "Low" },
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={cn(
    "flex items-center gap-2.5 px-3 py-1.5 mx-2 my-0.5 rounded-md cursor-pointer transition-all duration-200 group text-[13px]",
    active ? "bg-secondary text-primary font-semibold" : "text-slate-500 hover:bg-slate-50 hover:text-primary"
  )}>
    <Icon size={16} className={active ? "text-primary" : "text-slate-400 group-hover:text-primary"} />
    <span>{label}</span>
  </div>
);

const Scorecard = ({ label, value, subLabel, bgClass }: { label: string, value: string | number, subLabel: string, bgClass: string }) => (
  <div className={cn("p-4 rounded-lg flex flex-col gap-0.5 flex-1 min-w-[130px] border border-slate-100", bgClass)}>
    <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-tight">{label}</span>
    <span className="text-xl font-semibold text-slate-900 leading-tight">{value}</span>
    <span className="text-[10px] text-slate-400 font-normal">{subLabel}</span>
  </div>
);

const DeviceStat = ({ icon: Icon, label, value, percentage }: { icon: any, label: string, value: string, percentage: string }) => (
  <div className="bg-slate-50/50 p-3 rounded-lg flex items-center gap-3 flex-1 border border-slate-100 hover:bg-white transition-all group">
    <div className="p-2 bg-white rounded-md group-hover:bg-primary group-hover:text-white transition-colors">
      <Icon size={16} className="text-slate-500 group-hover:text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-[11px] text-slate-500 font-semibold">{label}</span>
      <span className="text-lg font-semibold text-slate-900 leading-none">{percentage}</span>
    </div>
  </div>
);

const SourcingItem = ({ name, percentage, count, quality }: { name: string, percentage: number, count: number, quality: string }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between items-center text-[12px] font-semibold">
      <span className="text-slate-700">{name}</span>
      <div className="flex items-center gap-2">
        <span className={cn(
          "px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider",
          quality === "High" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
            quality === "Medium" ? "bg-amber-50 text-amber-600 border border-amber-100" :
              "bg-rose-50 text-rose-600 border border-rose-100"
        )}>{quality} Pool</span>
        <span className="text-slate-400 font-medium">{count}</span>
      </div>
    </div>
    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-primary" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const TalentItem = ({ name, score, stage, image }: { name: string, score: number, stage: string, image: string }) => (
  <div className="flex items-center justify-between p-2.5 bg-slate-50/50 rounded-lg border border-slate-100 group hover:bg-white transition-all">
    <div className="flex items-center gap-3">
      <img src={image} className="w-8 h-8 rounded-full border border-slate-200 grayscale-[0.5] group-hover:grayscale-0 transition-all" alt={name} />
      <div className="flex flex-col gap-0.5">
        <span className="text-[12px] font-semibold text-slate-800">{name}</span>
        <span className="text-[10px] text-slate-500 font-medium">{stage}</span>
      </div>
    </div>
    <div className="flex flex-col items-end">
      <span className="text-[12px] font-bold text-primary">{score}%</span>
      <span className="text-[8px] text-slate-400 uppercase font-bold tracking-tight">Match</span>
    </div>
  </div>
);


const RejectionChart = ({ data }: { data: any[] }) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-between mb-4">
       <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Rejection Reasons</h4>
       <div className="px-1.5 py-0.5 bg-rose-50 text-rose-600 rounded text-[9px] font-bold uppercase border border-rose-100">Drop-off Diagnostic</div>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <ResponsiveContainer width="100%" height={160} minWidth={0}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={50}
            outerRadius={70}
            paddingAngle={5}
            dataKey="value"
          >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '11px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-4">
       {data?.map((item, i) => (
          <div key={i} className="flex items-center gap-1.5">
             <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
             <span className="text-[10px] text-slate-500 font-semibold">{item.name} ({item.value}%)</span>
          </div>
       ))}
    </div>
  </div>
);

const VelocityChart = ({ data }: { data: any[] }) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-between mb-4">
       <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Scheduling Velocity</h4>
       <span className="text-[10px] text-slate-300 font-medium italic">Avg Scheduling Time (Days)</span>
    </div>
    <div className="flex-1">
      <ResponsiveContainer width="100%" height={180} minWidth={0}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <ReXAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} />
          <ReYAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '11px' }}
          />
          <Line 
            type="monotone" 
            dataKey="time" 
            stroke="var(--primary)" 
            strokeWidth={3} 
            dot={{ r: 4, fill: 'var(--primary)', strokeWidth: 2, stroke: '#fff' }} 
            activeDot={{ r: 6, strokeWidth: 0 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const UpcomingInterviewItem = ({ name, stage, time }: { name: string, stage: string, time: string }) => (
  <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg group hover:bg-white hover:border-primary/20 transition-all">
    <div className="flex items-center gap-3">
       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all">
          <Calendar size={14} />
       </div>
       <div className="flex flex-col">
          <span className="text-[13px] font-bold text-slate-800 leading-tight">{name}</span>
          <span className="text-[10px] text-primary font-semibold uppercase italic">{stage}</span>
       </div>
    </div>
    <div className="text-right flex flex-col items-end">
       <span className="text-[11px] font-bold text-slate-600">{time.split(',')[0]}</span>
       <span className="text-[9px] text-slate-400 font-medium italic">{time.split(',')[1]}</span>
    </div>
  </div>
);

const StagnationChart = ({ data }: { data: any[] }) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-between mb-6">
       <div className="flex flex-col">
          <h4 className="text-[14px] font-bold text-slate-900 tracking-tight">Time-in-Stage Stagnation</h4>
          <p className="text-[10px] text-slate-400 font-medium">Avg days candidates spend in each round</p>
       </div>
       <Clock size={18} className="text-slate-300" />
    </div>
    <div className="flex flex-col gap-5">
       {data?.map((item, i) => (
          <div key={i} className="flex flex-col gap-1.5 group">
             <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
                <span className="text-slate-500">{item.stage}</span>
                <span className={cn(
                   "font-bold",
                   item.days > 5 ? "text-rose-500" : "text-emerald-500"
                )}>{item.days} Days</span>
             </div>
             <div className="h-2 w-full bg-slate-50 rounded-full border border-slate-100 overflow-hidden">
                <div 
                   className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      item.days > 5 ? "bg-rose-400" : 
                      item.days > 3 ? "bg-amber-400" : "bg-emerald-400"
                   )} 
                   style={{ width: `${(item.days / 10) * 100}%` }}
                ></div>
             </div>
          </div>
       ))}
    </div>
  </div>
);

const CalibrationTable = ({ data }: { data: any[] }) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-between mb-4 px-1">
       <div className="flex flex-col">
          <h4 className="text-[14px] font-bold text-slate-900 tracking-tight">Interviewer Calibration Audit</h4>
          <p className="text-[10px] text-slate-400 font-medium">Identifying inconsistences in team scoring</p>
       </div>
       <Award size={18} className="text-slate-300" />
    </div>
    <div className="bg-slate-50/50 rounded-xl border border-slate-100 overflow-hidden">
       <table className="w-full text-left">
          <thead>
             <tr className="border-b border-slate-100">
                <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interviewer</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Pass %</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Avg Score</th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Profile</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
             {data?.map((item, i) => (
                <tr key={i} className="hover:bg-white transition-all group">
                   <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                         <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary">
                            {item.name.split(' ').map((n: string) => n[0]).join('')}
                         </div>
                         <span className="text-[12px] font-bold text-slate-700">{item.name}</span>
                      </div>
                   </td>
                   <td className="px-4 py-3 text-center">
                      <span className="text-[12px] font-bold text-slate-700">{item.passRate}%</span>
                   </td>
                   <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1">
                         <Star size={10} className="text-amber-400 fill-amber-400" />
                         <span className="text-[12px] font-bold text-slate-700">{item.avgScore}</span>
                      </div>
                   </td>
                   <td className="px-4 py-3 text-right">
                      <span className={cn(
                         "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight italic border",
                         item.status === "Calibrated" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                         item.status === "Hawk" ? "bg-rose-50 text-rose-600 border-rose-100" :
                         "bg-sky-50 text-sky-600 border-sky-100"
                      )}>{item.status}</span>
                   </td>
                </tr>
             ))}
          </tbody>
       </table>
    </div>
  </div>
);

const InterviewHeatmap = ({ data }: { data: number[] }) => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const max = Math.max(...(data || [0]));
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
         <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Weekly Load Heatmap</h4>
         <span className="text-[10px] text-slate-300 font-medium">Interview Density</span>
      </div>
      <div className="flex items-end justify-between gap-1 h-32 px-2">
        {(data || [0,0,0,0,0,0,0]).map((count, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
             <div 
               className="w-full bg-primary/10 rounded-t-md transition-all group-hover:bg-primary/20 relative" 
               style={{ height: `${(count / (max || 1)) * 100}%` }}
             >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   {count}
                </div>
             </div>
             <span className="text-[10px] font-bold text-slate-400">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const InterviewerItem = ({ name, time, count }: { name: string, time: string, count: number }) => (
  <div className="flex items-center justify-between p-3 bg-slate-50/50 rounded-lg border border-slate-100 group hover:bg-white transition-all">
    <div className="flex items-center gap-3">
       <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[11px]">
          {name.split(' ').map(n => n[0]).join('')}
       </div>
       <div className="flex flex-col">
          <span className="text-[13px] font-bold text-slate-700 leading-tight group-hover:text-primary transition-colors">{name}</span>
          <span className="text-[10px] text-slate-400 font-medium">{count} Scorecards</span>
       </div>
    </div>
    <div className="flex flex-col items-end">
       <span className="text-[12px] font-bold text-primary">{time}</span>
       <span className="text-[8px] text-slate-400 uppercase font-bold tracking-tight">Avg. Response</span>
    </div>
  </div>
);

const JobPostingsTable = ({ jobs, selectedId, onSelect }: { jobs: any[], selectedId: string, onSelect: (id: string) => void }) => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mt-2">
    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
      <h3 className="text-[16px] font-bold text-slate-900 tracking-tight">All Active Job Postings</h3>
      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">{jobs.length} Active Roles</span>
    </div>
    <div className="overflow-x-auto overflow-y-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
            <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Job Posting</th>
            <th className="px-4 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">Views</th>
            <th className="px-4 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">Applied</th>
            <th className="px-4 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">Conv. %</th>
            <th className="px-4 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">Velocity</th>
            <th className="px-6 py-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">Age</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {jobs.map((job) => (
            <tr
              key={job.id}
              onClick={() => onSelect(job.id)}
              className={cn(
                "group cursor-pointer transition-all hover:bg-slate-50/80",
                selectedId === job.id ? "bg-primary/5" : ""
              )}
            >
              <td className="px-6 py-4">
                <div className="flex flex-col gap-0.5">
                  <span className={cn(
                    "text-[14px] font-bold transition-colors leading-tight",
                    selectedId === job.id ? "text-primary" : "text-slate-800 group-hover:text-primary"
                  )}>{job.title}</span>
                  <span className="text-[10px] text-slate-400 font-medium">Remote • Full-time • Selangor, MY</span>
                </div>
              </td>
              <td className="px-4 py-4 text-center">
                <span className="text-[13px] font-bold text-slate-700">{job.stats[0].count.toLocaleString()}</span>
              </td>
              <td className="px-4 py-4 text-center">
                <span className="text-[13px] font-bold text-slate-700">{job.stats[1].count.toLocaleString()}</span>
              </td>
              <td className="px-4 py-4 text-center">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 rounded-md border border-slate-100">
                  <TrendingUp size={10} className="text-emerald-500" />
                  <span className="text-[12px] font-bold text-slate-700">{job.metrics.conversion}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-center">
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-transparent",
                  job.aging.velocity === "Urgent" ? "bg-rose-50 text-rose-600 border-rose-100" :
                    job.aging.velocity === "Fast" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                      "bg-sky-50 text-sky-600 border-sky-100"
                )}>{job.aging.velocity}</span>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-[13px] font-bold text-slate-500">{job.aging.dayOpen}d</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ROIMetric = ({ icon: Icon, label, value, subValue }: { icon: any, label: string, value: string, subValue: string }) => (
  <div className="flex items-center justify-between p-3.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
    <div className="flex items-center gap-3">
      <div className="p-2 text-primary bg-primary/5 rounded-md group-hover:bg-primary group-hover:text-white transition-all">
        <Icon size={16} />
      </div>
      <div className="flex flex-col">
        <span className="text-[13px] text-slate-700 font-semibold leading-tight">{label}</span>
        <span className="text-[10px] text-slate-400 font-normal">({subValue})</span>
      </div>
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-[11px] font-semibold text-primary">RM</span>
      <span className="text-lg font-semibold text-slate-800 tracking-tight">{value}</span>
    </div>
  </div>
);

export default function AnalyticsDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedJobId, setSelectedJobId] = useState("all");

  if (!isMounted) return null;

  const allJobsStats = {
    views: jobsPerformanceData.reduce((acc, j) => acc + j.stats[0].count, 0),
    applied: jobsPerformanceData.reduce((acc, j) => acc + j.stats[1].count, 0),
    shortlisted: jobsPerformanceData.reduce((acc, j) => acc + j.stats[2].count, 0),
    interviews: jobsPerformanceData.reduce((acc, j) => acc + j.stats[3].count, 0),
    hires: jobsPerformanceData.reduce((acc, j) => acc + j.stats[4].count, 0),
  };

  const currentJobData = selectedJobId === "all"
    ? {
      id: "all",
      title: "All Active Jobs",
      stats: [
        { label: "Views", count: allJobsStats.views, countDisplay: (allJobsStats.views / 1000).toFixed(1) + "k", color: "bg-slate-500" },
        { label: "Applied", count: allJobsStats.applied, color: "bg-slate-400" },
        { label: "Shortlisted", count: allJobsStats.shortlisted, color: "bg-slate-300" },
        { label: "Interviewed", count: allJobsStats.interviews, color: "bg-slate-200" },
        { label: "Hired", count: allJobsStats.hires, color: "bg-slate-100" },
      ],
      metrics: { efficiency: "82%", conversion: "20.1%", quality: "A" },
      sourcing: [
        { name: "JobGiga", count: 376, percentage: 46, quality: "High" },
        { name: "LinkedIn", count: 180, percentage: 22, quality: "High" },
        { name: "Referrals", count: 110, percentage: 14, quality: "High" },
        { name: "Others", count: 149, percentage: 18, quality: "Medium" },
      ],
      aging: { dayOpen: 14, targetDay: 25, velocity: "Healthy" },
      appliedTimeDistribution: [
        { time: "1h", count: 61, color: "#64748b" },
        { time: "6h", count: 128, color: "#64748b" },
        { time: "12h", count: 259, color: "#64748b" },
        { time: "1d", count: 232, color: "#64748b" },
        { time: "2d", count: 101, color: "#64748b" },
        { time: "3d+", count: 34, color: "#64748b" },
      ],
      topTalents: [
        { name: "Sarah Connor", score: 98, stage: "Interviewed", image: "https://i.pravatar.cc/150?u=sarah" },
        { name: "Mia Wong", score: 99, stage: "Interviewed", image: "https://i.pravatar.cc/150?u=mia" },
        { name: "James Wilson", score: 95, stage: "Interviewed", image: "https://i.pravatar.cc/150?u=james" },
      ],
      latestApplicants: [
        { name: "Tom R.", time: "2 min ago", image: "https://i.pravatar.cc/150?u=tom" },
        { name: "David G.", time: "12 min ago", image: "https://i.pravatar.cc/150?u=david" },
        { name: "Lana L.", time: "28 min ago", image: "https://i.pravatar.cc/150?u=lana" }
      ],
      interviewMetrics: {
        scheduled: 74,
        noShows: 3,
        cNPS: 84,
        velocity: "3.6h",
        funnel: [
          { stage: "Screening", count: 74, passRate: "81%" },
          { stage: "Technical", count: 60, passRate: "53%" },
          { stage: "Cultural", count: 32, passRate: "94%" },
          { stage: "Final/Offer", count: 30, passRate: "100%" },
        ],
        heatmap: [25, 36, 41, 44, 31, 13, 6],
        team: [
          { name: "Sarah Connor", time: "1.5h", count: 12 },
          { name: "John Doe", time: "4.2h", count: 8 },
          { name: "Alex Rivet", time: "2.8h", count: 10 },
          { name: "Mia Wong", time: "1.2h", count: 10 },
          { name: "Oliver Queen", time: "2.5h", count: 8 },
        ],
        rejectionData: [
          { name: "Technical Gap", value: 40, color: "#0ea5e9" },
          { name: "Salary", value: 25, color: "#f59e0b" },
          { name: "Culture", value: 20, color: "#8b5cf6" },
          { name: "Withdrawn", value: 15, color: "#94a3b8" },
        ],
        velocityData: [
          { day: "01", time: 4.5 }, { day: "10", time: 4.0 }, { day: "20", time: 3.8 }, { day: "30", time: 3.5 },
        ],
        onDeck: [
          { name: "Marcus L.", stage: "Technical", time: "Tomorrow, 10:00 AM" },
          { name: "Sophia R.", stage: "Cultural", time: "Tomorrow, 2:30 PM" },
        ],
        stagnation: [
          { stage: "Screening", days: 1.5 },
          { stage: "Technical", days: 6.2 },
          { stage: "Cultural", days: 2.3 },
          { stage: "Final", days: 2.0 },
        ],
        calibration: [
          { name: "Sarah Connor", passRate: 42, avgScore: 4.1, status: "Calibrated" },
          { name: "Ahmad Yusuf", passRate: 22, avgScore: 2.5, status: "Hawk" },
          { name: "Alex Rivet", passRate: 65, avgScore: 4.6, status: "Dove" },
        ]
      }
    }
    : jobsPerformanceData.find(j => j.id === selectedJobId) || jobsPerformanceData[0];

  const scaleFactor = selectedJobId === "all" ? 1 : (currentJobData.stats[0].count / allJobsStats.views);

  return (
    <div className="flex min-h-screen bg-background font-sans text-slate-900 selection:bg-primary selection:text-white">
      {/* Sidebar */}
      <aside className="w-[220px] bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen z-20">
        <div className="p-5 flex items-center gap-2">
          <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center text-white">
            <TrendingUp size={16} strokeWidth={2.5} />
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-slate-900">
            Job<span className="text-primary">Giga</span>
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto pt-1 scrollbar-none">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem icon={Briefcase} label="Manage Jobs" />
          <SidebarItem icon={Users} label="Applicants" />
          <SidebarItem icon={Calendar} label="Interview" />
          <SidebarItem icon={MessageSquare} label="Chat" />
          <SidebarItem icon={CreditCard} label="Billing" />
          <SidebarItem icon={UserCheck} label="Employees" />
          <SidebarItem icon={FileText} label="Forms" />
          <SidebarItem icon={Search} label="Search Talent" />
          <SidebarItem icon={Megaphone} label="Ads Managment" />
          <SidebarItem icon={BarChart3} label="Analytics" active />
        </nav>

        <div className="p-4 border-t border-slate-100 pb-6">
          <div className="bg-slate-50 p-2.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-all mb-4 group">
            <HelpCircle size={14} className="text-primary" />
            <span className="text-[12px] font-semibold text-slate-600">Support</span>
          </div>

          <div className="relative group/promo">
            <div className="h-[120px] w-full rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60"
                alt="Mental Health"
                className="w-full h-full object-cover group-hover/promo:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-3">
                <span className="text-white text-[14px] font-semibold tracking-tight">RM 29.00</span>
                <span className="text-white/70 text-[10px] font-normal tracking-wide">Mental Health Screening</span>
                <button className="mt-2 bg-primary text-white text-[10px] py-1.5 rounded-md font-semibold hover:bg-white hover:text-primary transition-all">
                  Try Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-[56px] bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-100">
              <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] text-white font-semibold">A</div>
              <span className="text-[13px] font-semibold text-slate-700 tracking-tight">AFED Digital Sdn Bhd</span>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-primary font-semibold hover:bg-primary/5 px-2 py-1.5 rounded-md transition-colors cursor-pointer">
              <Briefcase size={14} />
              <span>My Company</span>
            </div>
          </div>

          <div className="flex-1 max-w-[400px] mx-8">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={14} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 pl-9 pr-4 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-50 hover:text-primary rounded-md transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
            </button>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2 bg-primary/5 px-2.5 py-1 rounded-md border border-primary/10">
              <span className="text-[11px] font-semibold text-primary uppercase tracking-wider italic">Freemium</span>
            </div>
            <div className="flex items-center gap-2.5 pl-2 group cursor-pointer">
              <div className="flex flex-col items-end">
                <span className="text-[13px] font-semibold text-slate-900 leading-tight group-hover:text-primary transition-colors">Ahmad Yusuf</span>
                <span className="text-[11px] text-slate-400 font-normal">HR Manager</span>
              </div>
              <div className="w-8 h-8 rounded-md overflow-hidden border border-slate-200">
                <img src="https://ui-avatars.com/api/?name=Ahmad+Yusuf&background=0ea5e9&color=fff&bold=true&size=64" alt="User" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 overflow-y-auto">
          {/* Title & Tabs */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-6 border-b border-slate-200">
              <h1 className="text-[20px] font-semibold text-slate-900 mr-4 tracking-tight">Analytics</h1>
              <div className="flex gap-6">
                {["Overview", "Jobs", "Interviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "pb-2.5 text-[14px] font-semibold transition-all relative px-1",
                      activeTab === tab ? "text-primary border-b-2 border-primary" : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeTab === "Overview" ? (
            <>
              {/* Row 1: Scorecards */}
              <div className="flex flex-col gap-6">
                {/* Overview Job Filter */}
                <div className="flex items-center justify-between mb-2">
                  <div className="relative group/select self-start">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Filter by Job Posting</div>
                    <select
                      value={selectedJobId}
                      onChange={(e) => setSelectedJobId(e.target.value)}
                      className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-10 text-[13px] font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all cursor-pointer min-w-[240px]"
                    >
                      <option value="all">All Jobs (3 Active)</option>
                      {jobsPerformanceData.map((job) => (
                        <option key={job.id} value={job.id}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-[34px] pointer-events-none text-slate-400">
                      <ChevronDown size={14} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-tight">Active Hiring Period</span>
                  </div>
                </div>

                {/* Row 1: Scorecards */}
                <div className="flex gap-3 flex-wrap mb-2">
                  <Scorecard label="Active Jobs" value={selectedJobId === "all" ? "3" : "1"} subLabel="Current" bgClass="bg-card-bg-teal" />
                  <Scorecard label="Total Views" value={currentJobData.stats[0].count.toLocaleString()} subLabel={selectedJobId === "all" ? "Aggregate" : "Direct"} bgClass="bg-card-bg-blue" />
                  <Scorecard label="Total Applications" value={currentJobData.stats[1].count.toLocaleString()} subLabel={selectedJobId === "all" ? "Aggregate" : "Direct"} bgClass="bg-card-bg-yellow" />
                  <Scorecard label="Shortlisted" value={currentJobData.stats[2].count.toLocaleString()} subLabel={selectedJobId === "all" ? "Aggregate" : "Direct"} bgClass="bg-card-bg-red" />
                  <Scorecard label="Interviews" value={currentJobData.stats[3].count.toLocaleString()} subLabel={selectedJobId === "all" ? "Aggregate" : "Direct"} bgClass="bg-card-bg-purple" />
                  <Scorecard label="Hires" value={currentJobData.stats[4].count.toLocaleString()} subLabel={selectedJobId === "all" ? "Aggregate" : "Direct"} bgClass="bg-card-bg-pink" />
                </div>

                {/* Row 2: Analytics Overview & Device Stats */}
                <div className="grid grid-cols-12 gap-5 mb-5">
                  <div className="col-span-12 lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col gap-0.5">
                        <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">Candidate Regional Heat Map</h3>
                        <p className="text-[12px] text-slate-400 font-normal">Regional density and applicant growth trends</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 rounded-md border border-primary/20">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-semibold text-primary uppercase tracking-wider">Live Tracker</span>
                      </div>
                    </div>

                    <div className="h-[200px] w-full">
                      <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                        <BarChart
                          data={heatMapData.map(d => ({ ...d, count: Math.round(d.count * scaleFactor) }))}
                          layout="vertical"
                          margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                          <ReXAxis type="number" hide />
                          <ReYAxis
                            dataKey="name"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fontWeight: 600, fill: '#64748b' }}
                            width={80}
                          />
                          <Tooltip
                            cursor={{ fill: '#f8fafb', radius: 4 }}
                            contentStyle={{ borderRadius: '8px', border: 'none', borderBottom: '1px solid #f1f5f9', fontSize: '12px' }}
                          />
                          <Bar
                            dataKey="count"
                            radius={[0, 4, 4, 0]}
                            barSize={16}
                          >
                            {heatMapData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={entry.heat === 'High' ? 'var(--primary)' : entry.heat === 'Medium' ? 'color-mix(in srgb, var(--primary) 60%, transparent)' : 'color-mix(in srgb, var(--primary) 20%, transparent)'}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200">
                    <div className="flex flex-col gap-0.5 mb-6">
                      <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">Desktop vs Mobile Applied</h3>
                      <p className="text-[12px] text-slate-400 font-normal">Monitor and analyze performance trends</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <DeviceStat icon={Monitor} label="Desktop" percentage="76%" value={Math.round(545 * scaleFactor).toString()} />
                        <DeviceStat icon={Smartphone} label="Mobile" percentage="20%" value={Math.round(143 * scaleFactor).toString()} />
                      </div>
                      <DeviceStat icon={Tablet} label="Tablet" percentage="4%" value={Math.round(29 * scaleFactor).toString()} />
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">Platform Mix</span>
                        <span className="text-[10px] font-semibold text-primary">Live Share</span>
                      </div>
                      <div className="flex h-2.5 w-full rounded-full overflow-hidden bg-slate-100">
                        <div className="h-full bg-primary" style={{ width: '76%' }} title="Desktop: 76%"></div>
                        <div className="h-full bg-primary/40" style={{ width: '20%' }} title="Mobile: 20%"></div>
                        <div className="h-full bg-slate-200" style={{ width: '4%' }} title="Tablet: 4%"></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-[10px] font-semibold text-slate-400">D (76%)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                          <span className="text-[10px] font-semibold text-slate-400">M (20%)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                          <span className="text-[10px] font-semibold text-slate-400">T (4%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3: Performance ROI */}
                <div className="bg-white rounded-xl border border-slate-200 mb-5 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/20">
                    <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">Performance ROI by Job</h3>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-md cursor-pointer hover:border-primary transition-all text-[11px] font-semibold">
                        <span className="text-slate-500 font-normal">Filter:</span>
                        <span>All Jobs</span>
                        <ChevronDown size={12} className="text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-4 border-r border-slate-50 flex flex-col">
                      <ROIMetric icon={Eye} label="Cost Per View" value={(1000 / currentJobData.stats[0].count).toFixed(2)} subValue={currentJobData.stats[0].count.toLocaleString()} />
                      <ROIMetric icon={FileDown} label="Cost Per Application" value={(1000 / currentJobData.stats[1].count).toFixed(2)} subValue={currentJobData.stats[1].count.toLocaleString()} />
                      <ROIMetric icon={UserPlus} label="Target Cost Per Hire" value={currentJobData.stats[4].count > 0 ? (1000 / currentJobData.stats[4].count).toFixed(2) : "0.00"} subValue={currentJobData.stats[4].count.toLocaleString()} />
                      <ROIMetric icon={DollarSign} label="Portfolio ROI" value={(currentJobData.stats[4].count * 5000 / 1000).toFixed(2)} subValue="Active" />
                    </div>
                    <div className="col-span-12 lg:col-span-8 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Cumulative Views per Posting</h4>
                        <div className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="text-[10px] font-semibold text-slate-400 uppercase">Direct</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                          <LineChart data={lineData.map(d => ({ ...d, orange: Math.round(d.orange * scaleFactor), blue: Math.round(d.blue * scaleFactor) }))} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f8fafb" />
                            <ReXAxis
                              dataKey="name"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fill: '#cbd5e1', fontWeight: 600 }}
                            />
                            <ReYAxis
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fill: '#cbd5e1', fontWeight: 600 }}
                            />
                            <Tooltip
                              contentStyle={{ borderRadius: '8px', border: 'none', borderBottom: '1px solid #f1f5f9', fontSize: '12px' }}
                            />
                            <Line type="monotone" dataKey="orange" stroke="#f97316" strokeWidth={3} dot={false} />
                            <Line type="monotone" dataKey="blue" stroke="var(--primary)" strokeWidth={3} dot={false} />
                            <Line type="monotone" dataKey="purple" stroke="#8b5cf6" strokeWidth={3} dot={false} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 4: Spend, Visibility, Interviews */}
                <div className="grid grid-cols-12 gap-5">
                  {/* Spend Snapshot */}
                  <div className="col-span-12 lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200">
                    <div className="flex flex-col gap-0.5 mb-8">
                      <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">Spend Snapshot</h3>
                      <p className="text-[12px] text-slate-400 font-normal">Period: 1/7 - 31/7/2026</p>
                    </div>

                    <div className="relative flex justify-center mb-8">
                      <div className="h-[180px] w-[180px]">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                          <PieChart>
                            <Pie
                              data={spendData}
                              cx="50%"
                              cy="50%"
                              innerRadius={65}
                              outerRadius={85}
                              paddingAngle={5}
                              dataKey="value"
                              stroke="none"
                            >
                              {spendData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest leading-none">Total</span>
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-[11px] font-semibold text-primary">RM</span>
                          <span className="text-2xl font-semibold text-slate-900 leading-tight">300.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {spendData.map((item) => (
                        <div key={item.name} className="flex items-center gap-2 bg-slate-50/50 border border-slate-100 p-2 rounded-md transition-all">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-[11px] font-semibold text-slate-600 truncate">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visibility */}
                  <div className="col-span-12 lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200">
                    <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight mb-6">Visibility Performance</h3>
                    <div className="flex flex-col gap-0">
                      {[
                        { label: "Impressions", value: "1,840" },
                        { label: "VTR", value: "23.4%" },
                        { label: "Views", value: "1,200" },
                        { label: "ASR", value: "25%" },
                        { label: "Applies", value: "239" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0 group transition-all">
                          <span className="text-[13px] text-slate-500 font-semibold group-hover:text-slate-900">{item.label}</span>
                          <span className="text-[15px] font-semibold text-primary">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100/30">
                      <p className="text-[11px] text-emerald-700 font-semibold leading-relaxed">
                        Efficiency: 84% above competitors.
                      </p>
                    </div>
                  </div>

                  {/* Interviews & Hiring Speed */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 flex-1">
                      <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight mb-6">Interviews</h3>
                      <div className="flex flex-col gap-2.5">
                        {[
                          { label: "Scheduled", value: "32", bg: "bg-slate-50" },
                          { label: "Completed", value: "30", bg: "bg-primary text-white" },
                          { label: "No-shows", value: "2", bg: "bg-rose-50" }
                        ].map((item, i) => (
                          <div key={i} className={cn("flex items-center justify-between p-2.5 rounded-md", item.bg)}>
                            <span className={cn("text-[12px] font-semibold", item.bg.includes('primary') ? "text-white" : "text-slate-500")}>{item.label}</span>
                            <span className={cn("text-lg font-semibold", item.bg.includes('primary') ? "text-white" : "text-primary")}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">Hiring Speed</h3>
                        <p className="text-[11px] text-slate-400 font-normal">Avg. Time to Close</p>
                      </div>
                      <div className="flex items-baseline gap-1 bg-slate-50 px-3 py-1.5 rounded-md">
                        <span className="text-2xl font-semibold text-primary">12</span>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase italic">Days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : activeTab === "Jobs" ? (
            <div className="flex flex-col gap-6">
              {/* Job Filter Dropdown */}
              <div className="relative group/select self-start">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 ml-1">Select Job Posting</div>
                <select
                  value={selectedJobId}
                  onChange={(e) => setSelectedJobId(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 rounded-lg px-4 py-2 pr-10 text-[13px] font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all cursor-pointer min-w-[240px]"
                >
                  <option value="all">All Jobs (Summary)</option>
                  {jobsPerformanceData.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-[34px] pointer-events-none text-slate-400">
                  <ChevronDown size={14} />
                </div>
              </div>


              <div className="grid grid-cols-12 gap-6">
                {/* Left: Funnel Visualization (3/4 Width) */}
                <div className="col-span-12 lg:col-span-9 bg-white p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                      <h3 className="text-[16px] font-semibold text-slate-900 tracking-tight">Performance Funnel</h3>
                      <p className="text-[12px] text-slate-400">Candidate flow from Views to Hired</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-[11px] font-semibold border border-emerald-100/50">
                      Job Status: Active
                    </div>
                  </div>

                  <div className="flex flex-col items-center w-full py-4 min-h-[240px] justify-center">
                    <FunnelChart
                      data={(currentJobData.stats as any[]).map(s => ({
                        label: s.label,
                        value: s.count,
                        displayValue: s.countDisplay || s.count.toString()
                      }))}
                      orientation="horizontal"
                      color="#0ea5e9"
                      layers={3}
                      className="w-full"
                      style={{ aspectRatio: "2.8 / 1" }}
                      renderPattern={(id, color) => (
                        <PatternLines
                          id={id}
                          height={8}
                          width={8}
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth={1}
                          orientation={["diagonal"]}
                          background={color}
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Right: Detailed Metrics (1/4 Width) */}
                <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
                  <div className="bg-white p-6 rounded-xl border border-slate-200 flex-1">
                    <div className="flex items-center justify-between mb-4">
                       <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight">Applied Time</h3>
                       <div className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded text-[9px] font-bold uppercase border border-slate-100 italic">
                          Engagement Velocity
                       </div>
                    </div>
                    
                    <div className="h-[210px] w-full mt-2">
                       <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                          <BarChart data={(currentJobData as any).appliedTimeDistribution} margin={{ top: 10, right: 0, left: -32, bottom: 0 }}>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                             <ReXAxis 
                                dataKey="time" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }}
                             />
                             <ReYAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }}
                             />
                             <Tooltip 
                                cursor={{ fill: '#f8fafb', radius: 4 }}
                                contentStyle={{ borderRadius: '8px', border: 'none', borderBottom: '1px solid #f1f5f9', fontSize: '11px', fontWeight: 600 }}
                             />
                             <Bar 
                                dataKey="count" 
                                radius={[4, 4, 0, 0]} 
                                barSize={20}
                                fill="var(--primary)"
                             />
                          </BarChart>
                       </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between px-1">
                       <div className="flex flex-col">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avg. Apply Time</span>
                          <span className="text-xl font-bold text-slate-900 tabular-nums">1.4 <span className="text-xs font-semibold text-slate-400 uppercase italic ml-0.5">Days</span></span>
                       </div>
                       <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                          <TrendingUp size={10} />
                          <span>-12% Fastest</span>
                       </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-slate-50">
                      <div className="flex items-center justify-between mb-4 px-1">
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Latest Applicants</h4>
                        <span className="text-[9px] font-bold text-slate-300 uppercase tracking-tight italic">Real-time</span>
                      </div>
                      <div className="flex flex-col gap-3.5">
                        {(currentJobData as any).latestApplicants?.map((app: any, idx: number) => (
                          <div key={idx} className="flex items-center justify-between group transition-all px-1">
                            <div className="flex items-center gap-2.5">
                              <img src={app.image} className="w-8 h-8 rounded-full border border-slate-100 grayscale-[0.3] group-hover:grayscale-0 transition-all shadow-sm" alt="" />
                              <div className="flex flex-col">
                                <span className="text-[13px] font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">{app.name}</span>
                                <span className="text-[10px] text-slate-400 font-medium italic">Apply time: {app.time}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="grid grid-cols-12 gap-6">
                {/* Sourcing Analysis */}
                <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-[15px] font-bold text-slate-900 mb-6">Sourcing Efficiency</h3>
                  <div className="flex flex-col gap-5">
                    {(currentJobData as any).sourcing?.map((s: any, i: number) => (
                      <SourcingItem key={i} {...s} />
                    ))}
                  </div>
                </div>

                {/* Job Aging & Velocity */}
                <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="text-[15px] font-bold text-slate-900 mb-6">Recruitment Velocity</h3>
                  <div className="flex flex-col items-center justify-center h-full pb-8">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                        <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={351.8} strokeDashoffset={351.8 * (1 - ((currentJobData as any).aging?.dayOpen || 0) / ((currentJobData as any).aging?.targetDay || 30))} className="text-primary transition-all duration-1000" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-slate-900">{(currentJobData as any).aging?.dayOpen}</span>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">Days Open</span>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-1">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                        (currentJobData as any).aging?.velocity === "Urgent" ? "bg-rose-50 text-rose-600 border border-rose-100" :
                          (currentJobData as any).aging?.velocity === "Fast" ? "bg-sky-50 text-sky-600 border border-sky-100" :
                            "bg-emerald-50 text-emerald-600 border border-emerald-100"
                      )}>{(currentJobData as any).aging?.velocity}</span>
                      <span className="text-[11px] text-slate-400 font-medium">Target: {(currentJobData as any).aging?.targetDay} days to fill</span>
                    </div>
                  </div>
                </div>

                {/* Top Talent Pool */}
                <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 flex flex-col">
                  <h3 className="text-[15px] font-bold text-slate-900 mb-6">Quality Pool Preview</h3>
                  <div className="flex flex-col gap-3 flex-1">
                    {(currentJobData as any).topTalents?.map((t: any, i: number) => (
                      <TalentItem key={i} {...t} />
                    ))}
                  </div>
                  <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-[12px] font-semibold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
                    View All Applicants
                    <ChevronDown size={14} className="text-slate-400 group-hover:translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              <JobPostingsTable
                jobs={jobsPerformanceData}
                selectedId={selectedJobId}
                onSelect={(id) => setSelectedJobId(id)}
              />
            </div>
          ) : activeTab === "Interviews" ? (
            <div className="flex flex-col gap-6">
               <div className="flex items-center justify-between gap-4">
                  <Scorecard label="Scheduled" value={(currentJobData as any).interviewMetrics.scheduled} subLabel="This Week" bgClass="bg-card-bg-orange" />
                  <Scorecard label="No-Shows" value={(currentJobData as any).interviewMetrics.noShows} subLabel="System Flagged" bgClass="bg-rose-50 border-rose-100" />
                  <Scorecard label="Feedback Velocity" value={(currentJobData as any).interviewMetrics.velocity} subLabel="Post-Interview" bgClass="bg-card-bg-blue" />
                  <Scorecard label="Candidate NPS" value={(currentJobData as any).interviewMetrics.cNPS} subLabel="Avg. Score" bgClass="bg-emerald-50 border-emerald-100" />
               </div>

               <div className="grid grid-cols-12 gap-6">
                  {/* Left: Funnel & Heatmap (7/12) */}
                  <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                     <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between mb-8">
                           <div className="flex flex-col">
                              <h3 className="text-[16px] font-bold text-slate-900 tracking-tight text-brand">Interview Pass-through Funnel</h3>
                              <p className="text-[12px] text-slate-400">Success rates per assessment stage</p>
                           </div>
                           <div className="px-3 py-1 bg-primary/10 text-primary rounded-md text-[10px] font-bold border border-primary/20">
                              Stage Breakdown
                           </div>
                        </div>
                        
                        <div className="h-[240px] w-full">
                           <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                              <BarChart data={(currentJobData as any).interviewMetrics.funnel} margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                 <ReXAxis dataKey="stage" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} />
                                 <ReYAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 700, fill: '#64748b' }} />
                                 <Tooltip cursor={{ fill: '#f8fafb' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '12px' }} />
                                 <Bar dataKey="count" fill="var(--primary)" radius={[4, 4, 0, 0]} barSize={40} />
                              </BarChart>
                           </ResponsiveContainer>
                        </div>
                     </div>

                     <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <InterviewHeatmap data={(currentJobData as any).interviewMetrics.heatmap} />
                     </div>
                  </div>

                  {/* Right: Team Performance (5/12) */}
                  <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                     <div className="bg-white p-6 rounded-xl border border-slate-200 flex-1">
                        <div className="flex items-center justify-between mb-8">
                           <div className="flex flex-col">
                              <h3 className="text-[16px] font-bold text-slate-900 tracking-tight">Team Performance</h3>
                              <p className="text-[12px] text-slate-400">Interviewer speed leaderboard</p>
                           </div>
                           <Award size={20} className="text-amber-500" />
                        </div>
                        <div className="flex flex-col gap-3">
                           {(currentJobData as any).interviewMetrics?.team?.map((t: any, i: number) => (
                              <InterviewerItem key={i} {...t} />
                           ))}
                        </div>
                        <button className="w-full mt-6 py-2.5 border border-slate-200 rounded-lg text-[12px] font-bold text-slate-500 hover:bg-slate-50 transition-all">
                           View All Activity
                        </button>
                     </div>

                     <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="relative flex items-center gap-4">
                           <div className="p-3 bg-white rounded-xl shadow-sm border border-primary/5">
                              <Clock size={24} className="text-primary" />
                           </div>
                           <div className="flex flex-col">
                              <span className="text-[11px] font-bold text-primary uppercase tracking-widest">Efficiency Target</span>
                              <span className="text-xl font-bold text-slate-900">4.0h <span className="text-xs font-semibold text-slate-400">Target</span></span>
                           </div>
                        </div>
                        <p className="text-[12px] text-slate-600 mt-4 leading-relaxed">
                           Your team is currently **{(currentJobData as any).interviewMetrics.velocity < "4.0h" ? "exceeding" : "underperforming"}** the post-interview feedback goal. 
                        </p>
                     </div>
                  </div>
               </div>

               {/* Row 3: Diagnostic Deep Dive */}
               <div className="grid grid-cols-12 gap-6 pb-6">
                  <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200">
                     <RejectionChart data={(currentJobData as any).interviewMetrics.rejectionData} />
                  </div>
                  <div className="col-span-12 lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200">
                     <VelocityChart data={(currentJobData as any).interviewMetrics.velocityData} />
                  </div>
                  <div className="col-span-12 lg:col-span-3 bg-white p-6 rounded-xl border border-slate-200 flex flex-col">
                     <div className="flex items-center justify-between mb-6">
                        <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest italic">On-Deck (Next 48h)</h4>
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                     </div>
                     <div className="flex flex-col gap-3 flex-1">
                        {(currentJobData as any).interviewMetrics?.onDeck?.map((item: any, i: number) => (
                           <UpcomingInterviewItem key={i} {...item} />
                        ))}
                     </div>
                     <button className="w-full mt-4 py-2 bg-slate-50 text-[11px] font-bold text-slate-500 rounded-lg border border-slate-100 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all">
                        Open Full Scheduler
                     </button>
                  </div>
               </div>

               {/* Row 4: Process Health & Calibration */}
               <div className="grid grid-cols-12 gap-6 pb-6">
                  <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200">
                     <StagnationChart data={(currentJobData as any).interviewMetrics.stagnation} />
                  </div>
                  <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-xl border border-slate-200">
                     <CalibrationTable data={(currentJobData as any).interviewMetrics.calibration} />
                  </div>
               </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] border-2 border-dashed border-slate-100 rounded-2xl">
              <div className="p-4 bg-slate-50 rounded-full mb-4">
                <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{activeTab} Analytics</h3>
              <p className="text-sm text-slate-400 font-normal mt-1">Data for this view will be available later.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
