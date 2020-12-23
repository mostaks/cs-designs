import Head from 'next/head';
import GalleryPage from '../src/components/GalleryPage';

const gallery = () => (
  <>
    <Head>
      <meta property="og:title" content="Christina Stamos Designs gallery page" key="title" />
    </Head>
    <GalleryPage />
  </>
);

export default gallery;
