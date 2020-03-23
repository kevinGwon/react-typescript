import Head from 'next/head';
import Article from '../../components/Article';
import DetailContainer from '../../containers/DetailContainer';

function Index(props) {
  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | Detail</title>
      </Head>
      <Article>
        <h2 className="a11y">영화정보 상세페이지</h2>
      </Article>
    </>
  );
}

export default Index;
