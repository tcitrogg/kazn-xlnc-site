import { metainfo } from '@/lib/config';
import { GetServerSideProps } from 'next';

const BASE_URL =  metainfo.url; // Replace with your actual domain

interface Rant {
    id: string | number;
}

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}/</loc>
    </url>
    <url>
      <loc>${BASE_URL}/#about</loc>
    </url>
    <url>
      <loc>${BASE_URL}/#features</loc>
    </url>
    <url>
      <loc>${BASE_URL}/#contact</loc>
    </url>
  </urlset>`;
}

// Never actually renders
export default function SiteMap(): null {
    return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    // Mocked data — replace with your actual DB/API fetch
    //   const rants: Rant[] = [
    //     { id: '123' },
    //     { id: '456' },
    //     { id: '789' }
    //   ];

    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};
