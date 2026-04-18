export const jobs = [
  { key: 'job1', name: 'Software Engineer', color: '#6366f1' },
  { key: 'job2', name: 'Product Manager', color: '#818cf8' },
  { key: 'job3', name: 'UX Designer', color: '#a5b4fc' },
  { key: 'job4', name: 'Marketing', color: '#c7d2fe' },
  { key: 'job5', name: 'Sales', color: '#e0e7ff' },
];

export const summaryStats = [
  { label: "Active Jobs", value: 5, change: "+1", subtext: "vs last month" },
  { label: "Total Views", value: "2,000", change: "+450", subtext: "vs last month" },
  { label: "Total Applicants", value: 500, change: "+84", subtext: "vs last month" },
  { label: "Shortlisted", value: 100, change: "+12", subtext: "vs last month" },
  { label: "Interviews", value: 50, change: "+8", subtext: "vs last month" },
  { label: "Hires", value: 10, change: "+2", subtext: "vs last month" },
];

export const jobPerformanceData = [
  { title: "Senior Software Engineer", views: 500, applicants: 150, shortlisted: 30, interviews: 15, conversion: "30.0%" },
  { title: "Product Manager", views: 400, applicants: 120, shortlisted: 24, interviews: 12, conversion: "30.0%" },
  { title: "UX/UI Designer", views: 450, applicants: 100, shortlisted: 20, interviews: 10, conversion: "22.2%" },
  { title: "Marketing Specialist", views: 300, applicants: 70, shortlisted: 14, interviews: 7, conversion: "23.3%" },
  { title: "Sales Executive", views: 350, applicants: 60, shortlisted: 12, interviews: 6, conversion: "17.1%" },
];

export const funnelData = [
  { name: "Views", value: 100 },
  { name: "Applications", value: 25 },
  { name: "Shortlisted", value: 5 },
  { name: "Interviewed", value: 2.5 },
  { name: "Hired", value: 0.5 },
];

export const applicationTrendData = [
  { date: "Oct 1", apps: 42 },
  { date: "Oct 5", apps: 68 },
  { date: "Oct 10", apps: 112 },
  { date: "Oct 15", apps: 94 },
  { date: "Oct 20", apps: 156 },
  { date: "Oct 25", apps: 128 },
  { date: "Oct 30", apps: 182 },
];

export const candidateSourceData = [
  { name: "JobGiga Search", value: 45 },
  { name: "Direct Apply Link", value: 30 },
  { name: "External Campaign", value: 25 },
];

export const visibilityInsights = {
  impressions: "8,540",
  ctr: "23.4%",
  applyRate: "25.0%",
  benchmarkText: "You are performing better than 84% of competitors.",
};

export const interviewActivity = {
  scheduled: 50,
  completed: 46,
  noShows: 3,
  avgRating: 4.9,
};

export const interviewWeeklyStats = [
  { day: "Mon", count: 10, completed: 9 },
  { day: "Tue", count: 14, completed: 13 },
  { day: "Wed", count: 18, completed: 17 },
  { day: "Thu", count: 12, completed: 11 },
  { day: "Fri", count: 6, completed: 5 },
];

export const interviewTimeDistribution = [
  { time: "9AM - 12PM", value: 50, color: "hsl(var(--primary))" },
  { time: "1PM - 4PM", value: 30, color: "hsl(var(--primary) / 0.7)" },
  { time: "5PM - 8PM", value: 20, color: "hsl(var(--primary) / 0.4)" },
];

export const interviewConversionData = [
  { stage: "Applied", count: 500 },
  { stage: "Shortlisted", count: 100 },
  { stage: "Interviewed", count: 50 },
  { stage: "Offer Sent", count: 15 },
  { stage: "Hired", count: 10 },
];

export const hiringSpeed = [
  { label: "Time to first app", value: "2h" },
  { label: "Time to shortlist", value: "1 day" },
  { label: "Time to hire", value: "14 days" },
];

export const aiInsights = [
  "Response time reduction to **<24h** will increase offer acceptance by 18%.",
  "Tuesday between **9AM–11AM** is your highest applicant engagement window.",
  "Your UX Designer role has the highest ROI at **RM0.75 per view**.",
];
