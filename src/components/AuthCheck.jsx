import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './Library/firebase';
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('User is signed in:', user);
          // Navigate to the home page or any other page after successful login
          navigate('/CartPage');
        } else {
          console.log('No user is signed in.');
          // Navigate to login page
          navigate('/login');
        }
      });
    }).catch((error) => {
      console.error('Failed to set persistence:', error);
    });
  }, [navigate]);

  return <>{children}</>;
};

export default AuthCheck;
