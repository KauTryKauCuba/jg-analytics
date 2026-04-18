"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CandidateFunnel({ data }: { data: any[] }) {
  const steps = [
    { label: "Views", icon: "👁️", value: "100%", count: 1240 },
    { label: "Apply", icon: "📝", value: "25%", count: 320 },
    { label: "Short", icon: "✅", value: "8%", count: 92 },
    { label: "Intrvw", icon: "🤝", value: "4%", count: 42 },
    { label: "Hired", icon: "🏆", value: "1%", count: 8 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <Card className="border-none shadow-none bg-card">
        <CardHeader className="px-5 py-3">
          <CardTitle className="text-lg font-semibold tracking-tight">Hiring Funnel</CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 pt-0">
          <div className="grid grid-cols-5 gap-2 relative">
            {steps.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center">
                <div 
                  className={`w-full p-2.5 rounded-lg text-center flex flex-col items-center justify-center border border-border/40 transition-all hover:bg-accent/50`}
                  style={{
                    opacity: 1 - (i * 0.08),
                  }}
                >
                  <span className="text-base mb-1">{step.icon}</span>
                  <p className="text-[8px] font-semibold text-muted-foreground/80 uppercase tracking-widest mb-0.5">{step.label}</p>
                  <h4 className="text-sm font-semibold text-foreground">{step.count}</h4>
                  <Badge variant="secondary" className="bg-emerald-50/50 text-emerald-700 border-none px-1 py-0 rounded-full mt-1 text-[8px] font-semibold">
                    {step.value}
                  </Badge>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/20">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 p-2.5 bg-primary/5 rounded-lg border border-primary/10 flex items-start gap-3">
            <span className="text-sm">💡</span>
            <div className="text-[10px] text-primary font-semibold leading-tight">
              <span className="font-semibold uppercase tracking-wider mr-1">Insight:</span> 25% apply rate is 10% above average.
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
