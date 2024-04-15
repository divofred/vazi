'use client';
import HomePage from '@/components/HomePage';
import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';

export default async function Home() {
  const url = `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com`;
  const response = await fetch(url);
  const metaTags = JSON.parse(await response.text());

  return (
    <>
      <Helmet>{parse(metaTags.head)}</Helmet>
      <HomePage />
    </>
  );
}
