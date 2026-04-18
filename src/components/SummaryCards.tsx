"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SummaryCards({ stats }: { stats: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        >
          <Card className="border-none shadow-none bg-card hover:bg-muted/30 transition-colors">
            <CardHeader className="p-3 pb-1">
              <CardDescription className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/80">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="flex items-baseline justify-between gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{stat.value}</h3>
                <Badge variant="secondary" className="bg-emerald-50/50 text-emerald-700 border-none px-1 py-0 text-[9px] font-semibold">
                  {stat.change}
                </Badge>
              </div>
              <p className="text-[9px] text-muted-foreground mt-1 uppercase font-medium tracking-tighter">
                {stat.subtext}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
