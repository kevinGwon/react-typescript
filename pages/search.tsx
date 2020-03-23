import Head from 'next/head';
import Article from '../components/Article';
import SearchContainer from '../containers/main/SearchContainer';

function Search() {
  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | Search</title>
      </Head>
      <Article>
        <h2 className="a11y">영화정보 검색</h2>
        <SearchContainer />
      </Article>
    </>
  );
}

Search.getInitialProps = async context => {
  return {};
};

export default Search;
