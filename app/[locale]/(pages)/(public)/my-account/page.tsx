'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthComponent from '@/components/auth/AuthComponent';
import Dashboard from './dashboard/page';
import { useAuth } from '@/provider/Authprovider';

export default function MyAccount() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    
  }, [user, router]);

  return user ? <Dashboard/> : <AuthComponent />;
}
