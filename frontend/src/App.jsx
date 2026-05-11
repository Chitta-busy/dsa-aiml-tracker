import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AppLayout from './layouts/AppLayout';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ProblemsPage from './pages/ProblemsPage';
import ResourcesPage from './pages/ResourcesPage';
import RoadmapPage from './pages/RoadmapPage';

export default function App(){return <Routes><Route path='/login' element={<AuthPage mode='login'/>}/><Route path='/signup' element={<AuthPage mode='signup'/>}/><Route path='/' element={<ProtectedRoute><AppLayout/></ProtectedRoute>}><Route index element={<DashboardPage/>}/><Route path='roadmap' element={<RoadmapPage/>}/><Route path='problems' element={<ProblemsPage/>}/><Route path='resources' element={<ResourcesPage/>}/></Route></Routes>}
