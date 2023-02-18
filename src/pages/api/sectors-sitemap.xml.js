const EXTERNAL_DATA_URL = "https://api.hissehedef.com/sectors/";

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>${`https://www.hissehedef.com/sektorler/`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>1</priority>
                </url>
        ${posts
          .map(({ slug }) => {
            return `
                <url>
                    <loc>${`https://www.hissehedef.com/sektorler/${slug}`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>1</priority>
                </url>
            `;
          })
          .join("")}
    </urlset>
    `;

export default async function Sitemap(req, res) {
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(posts));
  res.end();
}
