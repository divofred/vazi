import React from 'react';

import ServiceInnerPage from '@/components/ServiceInner';
import { getData } from '@/app/services/page';
import { headers } from 'next/headers';

export default async function Inner() {
  const headersList = headers();

  const fullUrl = headersList.get('referer') || '';

  const url = new URL(fullUrl);
  const pathname = url.pathname;

  const data = await getData();

  const response = await fetch(
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com${pathname}`
  );
  const metaTags = JSON.parse(await response.text());

  return <ServiceInnerPage data={data} head={metaTags.head} />;
}
