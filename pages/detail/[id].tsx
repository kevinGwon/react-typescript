import Head from 'next/head';
import { useRouter } from 'next/router';
import Article from '../../components/Article';
import {
  GET_DETAIL,
  API_DEDAILT_FILTER,
  GET_SIMILAR,
  GET_CAST,
} from '../../modules/api/detail';
import axios from 'axios';
import { API_FILTER } from '../../modules/api/list';
import { ListType } from '../../types/redux/list';
import DetailContainer from '../../containers/DetailContainer';

function Id({ API }: { API: any }) {
  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | ID</title>
      </Head>
      <Article>
        <h2 className="a11y">영화정보 상세페이지</h2>
        <DetailContainer API={API} />
      </Article>
    </>
  );
}

Id.getInitialProps = async ctx => {
  const { id } = ctx.query;

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
