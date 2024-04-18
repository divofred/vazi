'use server';
import InnerBlogPage from '@/components/BlogInnerPage';
import { headers } from 'next/headers';

export default async function InnerBlog() {
  const headersList = headers();

  const fullUrl = headersList.get('referer') || '';

  const url = new URL(fullUrl);
  const pathname = url.pathname;

  async function getData() {
    const res = await fetch('https://admin.vazilegal.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({
        query: `
           query post{
         posts(where: {name: "${pathname}"}){
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
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com${pathname}`
  );
  const metaTags = JSON.parse(await response.text());

  return <InnerBlogPage head={metaTags.head} data={data} />;
}
