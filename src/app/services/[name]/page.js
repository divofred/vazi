'use client';
import React from 'react';

import { usePathname } from 'next/navigation';

import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';

import ServiceInnerPage from '@/components/ServiceInner';

export default async function Inner() {
  const name = usePathname();

  const response = await fetch(
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com${name}`
  );
  const metaTags = JSON.parse(await response.text());

  return (
    <>
      <Helmet>{parse(metaTags.head)}</Helmet>
      <ServiceInnerPage />
    </>
  );
}
