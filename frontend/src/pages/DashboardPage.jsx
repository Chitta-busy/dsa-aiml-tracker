import { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import api from '../api/client';

export default function DashboardPage(){const [data,setData]=useState(null);const [time,setTime]=useState(1500);const [q]=useState('Discipline compounds into mastery.');
useEffect(()=>{(async()=>{await api.post('/tasks/init');const {data}=await api.get('/dashboard');setData(data);})();},[]);
useEffect(()=>{const t=setInterval(()=>setTime((s)=>Math.max(s-1,0)),1000);return()=>clearInterval(t);},[]);
if(!data) return <div className='animate-pulse glass h-48'/>;
const cards=[['Completed',data.totals.completed],['Pending',data.totals.pending],['Overdue',data.totals.overdue],['Problems',data.totals.problems],['Hours',data.totals.studyHours.toFixed(1)]];
return <div className='space-y-6'>
<div className='grid md:grid-cols-5 gap-4'>{cards.map(c=><div key={c[0]} className='glass p-4 hover:scale-105 transition'><p className='text-slate-400'>{c[0]}</p><h3 className='text-2xl font-bold'>{c[1]}</h3></div>)}</div>
<div className='grid lg:grid-cols-3 gap-4'><div className='glass p-4 lg:col-span-2 h-72'><h3>Weekly Analytics</h3><ResponsiveContainer width='100%' height='90%'><AreaChart data={data.weekly}><CartesianGrid strokeDasharray='3 3'/><XAxis dataKey='date'/><YAxis/><Tooltip/><Area type='monotone' dataKey='hours' stroke='#60a5fa' fill='#3b82f633'/></AreaChart></ResponsiveContainer></div><div className='glass p-4'><h3>Pomodoro</h3><p className='text-4xl font-bold'>{String(Math.floor(time/60)).padStart(2,'0')}:{String(time%60).padStart(2,'0')}</p><p className='mt-6 text-slate-400'>{q}</p></div></div></div>}
