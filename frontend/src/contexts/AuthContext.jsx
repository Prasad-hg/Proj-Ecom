
import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    try {
      const raw = localStorage.getItem('auth');
      return raw ? JSON.parse(raw) : { token: null, user: null };
    } catch (e) {
      return { token: null, user: null };
    }
  });

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  const login = (token, user) => setAuth({ token, user });
  const logout = () => setAuth({ token: null, user: null });

  const fetchCurrentUser = async () => {
    try {
      const res = await api.get('/users/current');
      setAuth((s) => ({ ...s, user: res.data }));
      return res.data;
    } catch (err) {
      logout();
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, fetchCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
