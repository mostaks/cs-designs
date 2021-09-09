import Head from 'next/head';
import {
  useQuery,
  gql,
} from '@apollo/client';
import GalleryPage from '../src/components/GalleryPage';

const GET_GALLERY = gql`
  query {
    galleryCollection (where: { id: "gallery" }, limit: 1) {
      items {
        imagesCollection {
          items {
            title
            class
            full {
              url
              title
            }
            thumb {
              url
              title
            }
          }
        }
      }
    }
  }
`;

const Page = () => {
  const { data } = useQuery(GET_GALLERY);
  if (!data) return null;
  return (
    <>
      <Head>
        <meta property="og:title" content="Christina Stamos Designs gallery page" key="title" />
      </Head>
      <GalleryPage images={data?.galleryCollection?.items?.[0]?.imagesCollection?.items} />
    </>
  );
};

export default Page;
