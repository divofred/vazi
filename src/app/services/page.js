import ServicesPage from '@/components/ServicePage';

export async function getData() {
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

export default async function Services() {
  const response = await fetch(
    'https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com/services'
  );
  const metaTags = JSON.parse(await response.text());
  const data = await getData()
  return <ServicesPage head={metaTags.head} data={data.reverse()} />;
}
