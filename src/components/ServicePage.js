/* eslint-disable @next/next/no-async-client-component */

'use client';
import HeroSection from '@/components/HeroSection';

import ServicesCard from '@/components/ServicesCard';
import { Helmet } from 'mys-react-helmet';
import parse from 'html-react-parser';

async function getData() {
  const res = await fetch('https://admin.vazilegal.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({
      query: `
      query {
        services{
          nodes{
            id
            title
            content
            slug
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
  const services = data.services.nodes;
  return services;
}

export default async function ServicesPage() {
  const data = await getData();

  return (
    <main className="bg-wave bg-repeat">
      <div>
        <HeroSection
          title="A "
          cspan="client-centric "
          title2="approach to innovative legal advisory"
          titlesize="text-5xl lg:text-[5.2rem]"
        />
      </div>
      <section className="py-12 ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto place-items-center place-content-stretch max-w-[52rem] gap-y-3 md:gap-y-5 lg:gap-y-3 px-5 sm:px-0">
            {data.map(service => {
              const rep = service.content.replace(/&#8217;/g, "'");
              const serviceTitleMatch = rep.match(
                /<p id="service-card">(.*?)<\/p>/
              );
              const serviceTitle = serviceTitleMatch
                ? serviceTitleMatch[1]
                : '';
              return (
                <ServicesCard
                  key={service.id}
                  title={service.title}
                  description={serviceTitle}
                  linkText="View More"
                  linkHref={`/services/${service.slug}`}
                  iconSrc={service.featuredImage.node.sourceUrl}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
