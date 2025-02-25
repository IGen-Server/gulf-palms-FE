'use client'

import React, { useEffect, useState } from 'react';
import AuthComponent from '@/components/auth/AuthComponent';
import Dashboard from './dashboard/page';
import { useAuth } from '@/providers/AuthProvider';
import SkeletonType1 from '@/components/skeleton/skeleton-type1';

export default function MyAccount() {
  const { user } = useAuth();

  return (<>
    {user === undefined
      ? <SkeletonType1 />
      : user ? <Dashboard/> : <AuthComponent />
    }
  </>);
}

