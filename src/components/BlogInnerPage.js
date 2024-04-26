'use client';
import Header from '@/components/Header';

import Blog from '@/components/Blog';

import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function InnerBlogPage() {
  const pathname = usePathname();
  const [d, setD] = useState(null);
  const [h, setH] = useState('');

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://admin.vazilegal.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify({
          query: `
           query post{
         posts(where: {name: "${pathname.slice(1)}"}){
           nodes{
            title
            content
            commentCount
            date
             comments{
              nodes{
                content
              }
            }
            featuredImage{
              node{
                sourceUrl
              }
            }
           }
          }
      }
          `
        })
      });

      const json = await res.json();
      setD(json.data.posts.nodes[0]);
      const response = await fetch(
        `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com${pathname}`
      );
      const metaTags = JSON.parse(await response.text());
      console.log(metaTags.head);
      setH(metaTags.head);
      return json.data.posts.nodes[0];
    }
    getData();
  }, [pathname]);
  if (h)
    return (
      <>
        {h && <Helmet>{parse(h)}</Helmet>}
        <main>
          <div>
            <Header />
          </div>
          <Blog post={d} />
        </main>
      </>
    );
}
