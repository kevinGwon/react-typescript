import Head from 'next/head';
import { useRouter } from 'next/router';

function Id(props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | ID</title>
      </Head>
      <p>Detail: {id}</p>
    </>
  );
}

export default Id;
