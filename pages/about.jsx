import Head from 'next/head';
import About from '../src/components/About';

const about = () => (
  <>
    <Head>
      <meta property="og:title" content="Christina Stamos Designs about page" key="title" />
    </Head>
    <About />
  </>
);

export default about;
