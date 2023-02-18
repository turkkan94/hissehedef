const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${`https://www.hissehedef.com/stocks-sitemap.xml`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>${`https://www.hissehedef.com/sectors-sitemap.xml`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
    </urlset>
    `;

export default async function Sitemap(req, res) {
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
}
