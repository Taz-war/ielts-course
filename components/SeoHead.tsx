import Head from 'next/head';

const SeoHead = ({ seo }) => (
  <Head>
    <title>{seo?.["og:title"] || "IELTS Course"}</title>
    {Object.entries(seo || {}).map(([key, value]) => (
      <meta property={key} content={value} key={key} />
    ))}
  </Head>
);

export default SeoHead;
