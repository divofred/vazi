'use client';
import React from 'react';
import BlogPage from '@/components/BlogPage';

import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';

export default async function Blog() {
  const response = await fetch(
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com/blog`
  );
  const metaTags = JSON.parse(await response.text());

  return (
    <>
      <Helmet>{parse(metaTags.head)}</Helmet>
      <BlogPage />
    </>
  );
}
