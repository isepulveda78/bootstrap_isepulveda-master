import { getPortfolio } from "wordpress/wordpress-apis"

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.isepulveda.me/</loc>
     </url>
     <url>
       <loc>https://www.isepulveda.me/sideprojects</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`https://www.isepulveda.me/${id.title.rendered}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = await fetch(getPortfolio);
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {
        posts
    },
  };
}

export default SiteMap;