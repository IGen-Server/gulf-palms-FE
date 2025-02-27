'use client'

import React, { useEffect, useState } from 'react';
import AuthComponent from '@/components/auth/AuthComponent';
import Dashboard from './dashboard/page';
import SkeletonType1 from '@/components/skeleton/skeleton-type1';
import { useUserDataProvider } from '@/providers/UserDataProvider';

export default function MyAccount() {
  const { user } = useUserDataProvider();

  return (<>
    {user === undefined
      ? <SkeletonType1 />
      : user ? <Dashboard/> : <AuthComponent />
    }
  </>);
}

