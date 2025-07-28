import Head from "next/head";

type SeoMeta = {
  [key: string]: string;
};

interface SeoHeadProps {
  seo?: SeoMeta;
}

const SeoHead: React.FC<SeoHeadProps> = ({ seo }) => {
  return (
    <Head>
      <title>{seo?.["og:title"] || "IELTS Course"}</title>
      {seo &&
        Object.entries(seo).map(([key, value]) =>
          value ? (
            <meta property={key} content={value} key={key} />
          ) : null
        )}
    </Head>
  );
};

export default SeoHead;
