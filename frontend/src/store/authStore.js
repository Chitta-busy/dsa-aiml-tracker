import { create } from 'zustand';
import api from '../api/client';

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),
  async login(payload) { const { data } = await api.post('/auth/login', payload); localStorage.setItem('token', data.token); localStorage.setItem('user', JSON.stringify(data.user)); set({ token: data.token, user: data.user }); },
  async signup(payload) { const { data } = await api.post('/auth/signup', payload); localStorage.setItem('token', data.token); localStorage.setItem('user', JSON.stringify(data.user)); set({ token: data.token, user: data.user }); },
  logout() { localStorage.clear(); set({ token: null, user: null }); }
}));
