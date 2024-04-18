import HomePage from '@/components/HomePage';

export default async function Home() {
  const url = `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com`;
  const response = await fetch(url);
  const metaTags = JSON.parse(await response.text());

  return <HomePage head={metaTags.head} />;
}
