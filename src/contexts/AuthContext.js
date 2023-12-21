// contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
 const [role,setRole] = useState(() => {
  const storedRole = localStorage.getItem('role')
  return storedRole ? JSON.parse(storedRole) : null;
 })
  // Update localStorage when the user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  useEffect(()=>{
    if (role){
      localStorage.setItem('role',JSON.stringify(role))
    }else{
      localStorage.removeItem('role')
    }
  },[role])
  const login = (userData) => {
    setUser(JSON.stringify(userData.username));
    setRole(JSON.stringify(userData.role))
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user,role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
