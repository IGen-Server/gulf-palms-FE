'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthComponent from '@/components/auth/AuthComponent';
import Dashboard from './dashboard/page';
import { useAuth } from '@/providers/Authprovider';
import { Skeleton } from '@/components/ui/skeleton';
import { CookieStorageService } from '@/services/utility/storage.service';

export default function MyAccount() {
  const { user } = useAuth();

  return (<>
    {user === undefined
      ? <DashboardLoading />
      : user ? <Dashboard/> : <AuthComponent />
    }
  </>);
}

function DashboardLoading() {
  return (<>
    <div className="flex flex-col space-y-3">
      <div className='flex flex-row gap-3'>
        <Skeleton className="h-[125px] w-1/2 rounded-xl bg-gray-200" />
        <Skeleton className="h-[125px] w-1/2 rounded-xl bg-gray-200" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
        <Skeleton className="h-7 w-full bg-gray-200" />
      </div>
    </div>
  </>);
}
