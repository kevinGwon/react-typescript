import Head from 'next/head';

// Components
import Article from '../components/common/Article';
import SearchContainer from '../containers/search/SearchContainer';

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

export default Search;
