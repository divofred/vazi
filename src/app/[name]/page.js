'use client';
import Header from '@/components/Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Blog from '@/components/Blog';

import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';

export default async function InnerBlog() {
  const name = usePathname();

  async function getData() {
    const res = await fetch('https://admin.vazilegal.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({
        query: `
           query post{
         posts(where: {name: "${name}"}){
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

    return json.data.posts.nodes[0];
  }
  const data = await getData();

  const response = await fetch(
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com${name}`
  );
  const metaTags = JSON.parse(await response.text());

  return (
    <>
      <Helmet>{parse(metaTags.head)}</Helmet>

      <main>
        <div>
          <Header />
        </div>
        <Blog post={data} />
      </main>
    </>
  );
}
