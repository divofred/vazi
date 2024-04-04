import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import PersonCard from '@/components/PersonCard';
import peopleData from '@/components/data/peopleData';

export async function getLegalData() {
  const res = await fetch('https://vazilegal.com/graphql', {
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

export default async function legalteam() {
  const data = await getLegalData();
  return (
    <main className="bg-wave">
      <div>
        <HeroSection
          title="Tech-driven "
          cspan="trusted minds"
          title2=""
          titlesize="text-5xl lg:text-[5.7rem]"
        />
      </div>
      <section className="py-24">
        <div className="container">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 mx-auto place-items-center max-w-[53.8rem] ">
              {data.reverse().map(legalTeamMember => (
                <PersonCard
                  key={legalTeamMember.id}
                  person={legalTeamMember}
                  href={'/people/' + legalTeamMember.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
