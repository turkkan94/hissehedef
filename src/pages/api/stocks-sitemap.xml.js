const pages = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.hissehedef.com/hisseler/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
        ${pages
          .map((page) => {
            return `
                    <url>
                        <loc>${`https://www.hissehedef.com/hisseler?page=${page}`}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>1</priority>
                    </url>
                `;
          })
          .join("")}
        <url>
            <loc>https://www.hissehedef.com/stocks-sitemap-1.xml</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://www.hissehedef.com/stocks-sitemap-2.xml</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://www.hissehedef.com/stocks-sitemap-3.xml</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://www.hissehedef.com/stocks-sitemap-4.xml</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://www.hissehedef.com/stocks-sitemap-5.xml</loc>
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
