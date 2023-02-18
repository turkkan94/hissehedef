const EXTERNAL_DATA_URL =
  "https://api.hissehedef.com/stocks/?page=4&page_size=100";

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map(({ symbol }) => {
            return `
                <url>
                    <loc>${`https://www.hissehedef.com/hisseler/${symbol}`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>daily</changefreq>
                    <priority>1</priority>
                </url>
            `;
          })
          .join("")}
    </urlset>
    `;

export default async function Sitemap(req, res) {
  const request = await fetch(EXTERNAL_DATA_URL);
  const postsData = await request.json();
  const posts = postsData.stocks;

  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap(posts));
  res.end();
}
