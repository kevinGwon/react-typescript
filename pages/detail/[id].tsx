import Head from 'next/head';
import axios from 'axios';

// Modules
import { API_FILTER } from '../../modules/api/list';
import {
  GET_DETAIL,
  API_DEDAILT_FILTER,
  GET_SIMILAR,
  GET_CAST,
} from '../../modules/api/detail';

// Types
import { ListType } from '../../types/redux/list';
import { IndexType } from '../../types';

// Components
import Article from '../../components/common/Article';
import DetailContainer from '../../containers/DetailContainer';

function Id({ API }) {
  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | {API.title}</title>
      </Head>
      <Article>
        <h2 className="a11y">영화정보 상세페이지</h2>
        <DetailContainer API={API} />
      </Article>
    </>
  );
}

Id.getInitialProps = async ctx => {
  let { id } = ctx.query;
  if (!id) {
    id = 181812;
  }
  try {
    const res = await axios.all([
      GET_DETAIL(id),
      GET_CAST(id),
      GET_SIMILAR(id),
    ]);

    return {
      API: API_DEDAILT_FILTER(res),
    };
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
};

export default Id;
