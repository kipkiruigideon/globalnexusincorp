'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// Pages where header/footer should be hidden
const AUTH_ROUTES = ['/register', '/login'];

export function LayoutWrapper({
  children,
  header,
  footer,
}: {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.some(route => pathname.startsWith(route));

  if (isAuthPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
