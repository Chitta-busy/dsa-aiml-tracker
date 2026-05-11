import { Link, Outlet, useLocation } from 'react-router-dom';
const links=[['/','Dashboard'],['/roadmap','Roadmap'],['/problems','Problems'],['/resources','Resources']];
export default function AppLayout(){const {pathname}=useLocation();return <div className='min-h-screen flex'>
<aside className='w-64 p-4 border-r border-white/10 glass m-4'><h1 className='font-bold text-xl mb-4'>DSA + AI/ML</h1>{links.map(([to,l])=><Link key={to} className={`block p-2 rounded-xl ${pathname===to?'bg-blue-500/30':'hover:bg-white/10'}`} to={to}>{l}</Link>)}</aside>
<main className='flex-1 p-6'><Outlet/></main></div>}
