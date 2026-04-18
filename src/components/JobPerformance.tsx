"use client"

import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function JobPerformance({ data }: { data: any[] }) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 h-[300px] bg-card animate-pulse rounded-xl" />;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
      {/* Table Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-8"
      >
        <Card className="border-none shadow-none">
          <CardHeader className="px-5 py-3">
            <CardTitle className="text-lg font-semibold tracking-tight leading-none">Job Post Stats</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="px-5 h-8 text-[10px] uppercase font-semibold tracking-widest text-muted-foreground/70">Title</TableHead>
                  <TableHead className="text-right px-5 h-8 text-[10px] uppercase font-semibold tracking-widest text-muted-foreground/70">Views</TableHead>
                  <TableHead className="text-right px-5 h-8 text-[10px] uppercase font-semibold tracking-widest text-muted-foreground/70">Apps</TableHead>
                  <TableHead className="text-right px-5 h-8 text-[10px] uppercase font-semibold tracking-widest text-muted-foreground/70">Short</TableHead>
                  <TableHead className="text-right px-5 h-8 text-[10px] uppercase font-semibold tracking-widest text-muted-foreground/70">Intrvw</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((job) => (
                  <TableRow key={job.title} className="h-10">
                    <TableCell className="px-5 py-2 font-semibold text-xs">{job.title}</TableCell>
                    <TableCell className="text-right px-5 py-2 text-xs font-medium text-muted-foreground">{job.views}</TableCell>
                    <TableCell className="text-right px-5 py-2 text-xs font-medium text-muted-foreground">{job.applicants}</TableCell>
                    <TableCell className="text-right px-5 py-2 text-xs font-medium text-muted-foreground">{job.shortlisted}</TableCell>
                    <TableCell className="text-right px-5 py-2 text-xs font-medium text-muted-foreground">{job.interviews}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bar Chart Section */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-4"
      >
        <Card className="border-none shadow-none h-full bg-card">
          <CardHeader className="px-5 py-3">
            <CardTitle className="text-base font-semibold tracking-tight">Applications</CardTitle>
          </CardHeader>
          <CardContent className="px-5 pb-4 pt-0">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <BarChart data={data} layout="vertical" margin={{ left: -10, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" opacity={0.1} />
                  <XAxis type="number" hide />
                  <YAxis 
                    type="category" 
                    dataKey="title" 
                    width={80} 
                    fontSize={9} 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    cursor={{ fill: 'hsl(var(--primary) / 0.03)' }}
                    contentStyle={{ 
                      borderRadius: '8px', 
                      border: 'none', 
                      boxShadow: 'none',
                      backgroundColor: 'hsl(var(--foreground))',
                      color: 'hsl(var(--primary-foreground))',
                      fontSize: '9px'
                    }}
                  />
                  <Bar dataKey="applicants" radius={[0, 4, 4, 0]} barSize={12}>
                    {data.map((_, i) => (
                      <Cell key={i} fill={i === 0 ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.5)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
