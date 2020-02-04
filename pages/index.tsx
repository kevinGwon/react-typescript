import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import '../scss/style.scss';

const Index = props => {
  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | Home</title>
      </Head>
      <Link href="/detail/1535">
        <a>상세페이지 이동</a>
      </Link>
    </>
  );
};

Index.getInitialProps = async ({ req }) => {
  return {};
};

export default Index;
