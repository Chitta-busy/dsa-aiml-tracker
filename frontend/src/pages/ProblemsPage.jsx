import { useEffect, useState } from 'react';
import api from '../api/client';

export default function ProblemsPage(){const [form,setForm]=useState({name:'',platform:'LeetCode',difficulty:'Easy',topic:'',timeTaken:0,revisionRequired:false});const [items,setItems]=useState([]);
const load=async()=>setItems((await api.get('/problems')).data); useEffect(()=>{load();},[]);
return <div className='grid lg:grid-cols-2 gap-4'><form onSubmit={async(e)=>{e.preventDefault();await api.post('/problems',form);setForm({...form,name:'',topic:''});load();}} className='glass p-4 space-y-2'>
<input className='w-full p-2 bg-white/5 rounded' placeholder='Problem name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input className='w-full p-2 bg-white/5 rounded' placeholder='Topic' value={form.topic} onChange={e=>setForm({...form,topic:e.target.value})}/><button className='bg-blue-500 px-3 py-2 rounded'>Add</button></form>
<div className='space-y-2'>{items.map(i=><div key={i._id} className='glass p-3'><p className='font-semibold'>{i.name}</p><p className='text-sm text-slate-400'>{i.platform} • {i.difficulty} • {i.topic}</p></div>)}</div></div>}
