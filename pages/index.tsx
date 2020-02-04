import Head from 'next/head';
import axios from 'axios';
import Routes from '../routes';
import '../scss/style.scss';

const Index = props => {
  const { Link } = Routes;

  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | Home</title>
      </Head>
      <Link route="detail" params={{ id: 300 }}>
        <a>상세페이지 이동</a>
      </Link>
    </>
  );
};

Index.getInitialProps = async ({ req }) => {
  return {};
};

export default Index;
