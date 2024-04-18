import React from 'react';
import BlogPage from '@/components/BlogPage';

async function getData() {
  const res = await fetch('https://admin.vazilegal.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({
      query: `
         query HomePageQuery {
       posts(first: 20) {
       nodes {
        id
        slug
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

  return json.data.posts.nodes;
}

export default async function Blog() {
  const response = await fetch(
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com/blog`
  );
  const metaTags = JSON.parse(await response.text());

  return (
    <>
      <BlogPage head={metaTags.head} data={await getData()} />
    </>
  );
}
