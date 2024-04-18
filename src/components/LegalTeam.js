'use client';
import React from 'react';

import HeroSection from '@/components/HeroSection';
import PersonCard from '@/components/PersonCard';

import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';

export default function LegalTeamPage({ head, data }) {
  return (
    <>
      <Helmet>{parse(head)}</Helmet>
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
                {data.map(legalTeamMember => (
                  <PersonCard
                    key={legalTeamMember.id}
                    person={legalTeamMember}
                    href={'/legal-team/' + legalTeamMember.slug}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
