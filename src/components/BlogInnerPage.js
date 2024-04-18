'use client';
import Header from '@/components/Header';

import Blog from '@/components/Blog';

import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';

export default function InnerBlogPage({ head, data }) {
  return (
    <>
      <Helmet>{parse(head)}</Helmet>

      <main>
        <div>
          <Header />
        </div>
        <Blog post={data} />
      </main>
    </>
  );
}
