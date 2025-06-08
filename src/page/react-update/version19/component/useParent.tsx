import { Suspense } from 'react';
import { getUser } from '@/apis/get';
import { Use } from './use';

export const UseParent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Use user={getUser()} />
    </Suspense>
  )
}