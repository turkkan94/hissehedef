import React from "react";

async function getSingleSector(slug) {
  const res = await fetch(`${process.env.MAIN_API}/sectors/${slug}/`);
  return res.json();
}

export default async function Head({ params: { slug } }) {
  const sector = await getSingleSector(slug);

  return (
    <>
      <title>{sector?.seo_title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={sector?.short_description} />
      <link
        rel="canonical"
        precedence="default"
        href={`https://www.hissehedef.com/hisseler/${sector?.slug}`}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hissehedefcom" />
      <meta
        property="og:url"
        content={`https://www.hissehedef.com/hisseler/${sector?.slug}`}
      />
      <meta property="og:title" content={sector?.seo_title} />
      <meta property="og:description" content={sector?.short_description} />
      <meta
        property="og:image"
        content={`https://www.hissehedef.com/images/web/twitter-card.jpg`}
      />
      <link rel="icon" href="/images/web/favicon.ico" />
    </>
  );
}
