'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const countryData = [
  { country: 'China', prevalence: 10.9, population: 1439 },
  { country: 'India', prevalence: 8.9, population: 1380 },
  { country: 'USA', prevalence: 10.5, population: 331 },
  { country: 'Brazil', prevalence: 8.1, population: 212 },
  { country: 'Mexico', prevalence: 12.8, population: 128 },
  { country: 'Germany', prevalence: 7.4, population: 83 },
  { country: 'Japan', prevalence: 6.6, population: 125 },
  { country: 'UK', prevalence: 6.0, population: 67 },
];

const comorbidityData = [
  { name: 'Heart Disease', value: 32, color: '#8884d8' },
  { name: 'Kidney Disease', value: 25, color: '#82ca9d' },
  { name: 'Eye Problems', value: 28, color: '#ffc658' },
  { name: 'Nerve Damage', value: 35, color: '#ff7300' },
  { name: 'Foot Problems', value: 15, color: '#00ff00' },
];

const trendData = [
  { year: '2015', global: 8.3, type1: 1.1, type2: 7.2 },
  { year: '2016', global: 8.5, type1: 1.1, type2: 7.4 },
  { year: '2017', global: 8.7, type1: 1.2, type2: 7.5 },
  { year: '2018', global: 8.9, type1: 1.2, type2: 7.7 },
  { year: '2019', global: 9.1, type1: 1.3, type2: 7.8 },
  { year: '2020', global: 9.3, type1: 1.3, type2: 8.0 },
  { year: '2021', global: 9.5, type1: 1.4, type2: 8.1 },
  { year: '2022', global: 9.7, type1: 1.4, type2: 8.3 },
  { year: '2023', global: 9.9, type1: 1.5, type2: 8.4 },
];

export default function VisualizationsPage() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <h1 className="text-4xl font-bold mb-4">Diabetes Data Visualizations</h1>
          <p className="text-lg text-muted-foreground">
            Explore interactive charts showing diabetes prevalence, comorbidities, and trends worldwide
          </p>
        </div>
        
        <div className="grid gap-8">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Diabetes Prevalence by Country</h2>
            <p className="text-muted-foreground mb-6">
              Percentage of adults with diabetes in major countries (2023 data)
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={countryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="country" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }} 
                />
                <Bar dataKey="prevalence" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Common Diabetes Comorbidities</h2>
            <p className="text-muted-foreground mb-6">
              Percentage of people with diabetes who develop these complications
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={comorbidityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => {
                    const percent = typeof entry.percent === 'number' ? entry.percent : 0;
                    return `${entry.name} ${(percent * 100).toFixed(0)}%`;
                  }}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {comorbidityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Global Diabetes Trends (2015-2023)</h2>
            <p className="text-muted-foreground mb-6">
              Global diabetes prevalence showing steady increase over the years
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#f9fafb'
                  }} 
                />
                <Line type="monotone" dataKey="global" stroke="#3b82f6" strokeWidth={3} name="Global Prevalence" />
                <Line type="monotone" dataKey="type1" stroke="#ef4444" strokeWidth={2} name="Type 1" />
                <Line type="monotone" dataKey="type2" stroke="#10b981" strokeWidth={2} name="Type 2" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
} 