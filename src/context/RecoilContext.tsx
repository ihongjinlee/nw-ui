'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilProps {
  children: ReactNode;
}

export default function RecoilContext({ children }: RecoilProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
