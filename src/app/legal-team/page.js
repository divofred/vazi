import React from 'react';

import LegalTeamPage from '@/components/LegalTeam';

export async function getLegalData() {
  const res = await fetch('https://admin.vazilegal.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({
      query: `
      {
        legalTeamMembers{
          nodes{
            id
            slug
            title 
            content
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

  const { data } = await res.json();
  const legalTeamMembers = data.legalTeamMembers.nodes;
  return legalTeamMembers;
}

export default async function LegalTeam() {
  const response = await fetch(
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com/legal-team`
  );
  const metaTags = JSON.parse(await response.text());
  const data = await getLegalData();
  return <LegalTeamPage head={metaTags.head} data={data.reverse()} />;
}
