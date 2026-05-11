import { useEffect, useMemo, useState } from 'react';
import api from '../api/client';

export default function RoadmapPage(){const [tasks,setTasks]=useState([]);const [search,setSearch]=useState('');
const fetchTasks=async()=>{const {data}=await api.get('/tasks');setTasks(data);};
useEffect(()=>{fetchTasks();},[]);
const filtered=useMemo(()=>tasks.filter(t=>`${t.dsaTopic} ${t.aimlTopic}`.toLowerCase().includes(search.toLowerCase())),[tasks,search]);
return <div className='space-y-4'><input className='w-full glass p-3' placeholder='Search tasks' onChange={e=>setSearch(e.target.value)}/>{filtered.map(t=><div key={t._id} className='glass p-4'><div className='flex justify-between'><h4 className='font-bold'>Day {t.dayNumber}: {t.dsaTopic} + {t.aimlTopic}</h4><span className={`px-2 rounded ${t.status==='overdue'?'bg-red-500/30':t.status==='completed'?'bg-green-500/30':'bg-yellow-500/30'}`}>{t.status}</span></div><p>Difficulty: {t.difficulty}</p><button onClick={async()=>{await api.patch(`/tasks/${t._id}`,{status:'completed'});fetchTasks();}} className='mt-2 px-3 py-1 bg-blue-500 rounded'>Mark complete</button></div>)}</div>}
