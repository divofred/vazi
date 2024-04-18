import AboutPage from '@/components/AboutPage';

export default async function About() {
  const response = await fetch(
    `https://admin.vazilegal.com/wp-json/rankmath/v1/getHead?url=https://admin.vazilegal.com/about`
  );
  const metaTags = JSON.parse(await response.text());

  return <AboutPage head={metaTags.head} />;
}
