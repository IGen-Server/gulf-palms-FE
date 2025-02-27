'use client'

import React, { useEffect, useState } from 'react';
import AuthComponent from '@/components/auth/AuthComponent';
import Dashboard from './dashboard/page';
import SkeletonType1 from '@/components/skeleton/skeleton-type1';
import { useUserData } from '@/providers/UserDataProvider';

export default function MyAccount() {
  const { user } = useUserData();

  return (<>
    {user === undefined
      ? <SkeletonType1 />
      : user ? <Dashboard/> : <AuthComponent />
    }
  </>);
}

