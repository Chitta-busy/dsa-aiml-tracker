import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function AuthPage({ mode='login' }) {
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const login = useAuthStore((s)=>s.login); const signup = useAuthStore((s)=>s.signup); const nav=useNavigate();
  const submit=async(e)=>{e.preventDefault(); mode==='login'?await login(form):await signup(form); nav('/');};
  return <div className='min-h-screen grid place-items-center p-4'><motion.form initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} onSubmit={submit} className='glass p-8 w-full max-w-md space-y-4 shadow-neon'>
    <h2 className='text-2xl font-bold'>{mode==='login'?'Welcome Back':'Create Account'}</h2>
    {mode!=='login'&&<input className='w-full p-3 rounded-lg bg-white/5' placeholder='Name' onChange={e=>setForm({...form,name:e.target.value})}/>}<input className='w-full p-3 rounded-lg bg-white/5' placeholder='Email' onChange={e=>setForm({...form,email:e.target.value})}/><input type='password' className='w-full p-3 rounded-lg bg-white/5' placeholder='Password' onChange={e=>setForm({...form,password:e.target.value})}/><button className='w-full p-3 rounded-lg bg-blue-500 hover:bg-blue-400'>{mode==='login'?'Login':'Signup'}</button>
  </motion.form></div>;
}
