import Head from 'next/head';
import Link from 'next/link';

const Index = props => {
  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | Home</title>
      </Head>
      <Link href="/detail/[id]" as={'/detail/300'}>
        <a className="test">상세페이지 이동</a>
      </Link>
    </>
  );
};

Index.getInitialProps = async ({ req }) => {
  return {};
};

export default Index;
