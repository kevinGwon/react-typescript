import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';

// Modules
import { API_FILTER, GET_POPULAR } from '../modules/api/list';
import {
  GET_DETAIL,
  API_DEDAILT_FILTER,
  GET_SIMILAR,
  GET_CAST,
} from '../modules/api/detail';

// Types
import { ListType } from '../types/redux/list';
import { IndexType } from '../types';

// Action
import { LOADING_OFF } from '../redux/reducers/common';

// Components
import Article from '../components/common/Article';
import DetailContainer from '../containers/detail/DetailContainer';
import { StyledDetailError } from '../components/detail/Detail.style';

function Detail({ API }) {
  if (!API) {
    let [count, setCount] = useState(5);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({ type: LOADING_OFF });
      setInterval(() => {
        setCount(--count);
      }, 1000);
      if (count === 1) {
        location.href = '/';
      }
    }, [count]);
    return (
      <StyledDetailError>
        <h1>등록된 영화정보가 없습니다.</h1>
        <p>{count}초 후 홈으로 이동합니다.</p>
      </StyledDetailError>
    );
  }
  return (
    <>
      <Head>
        <title>Portfolio | {API.title}</title>
      </Head>
      <Article>
        <h2 className="a11y">영화정보 상세페이지</h2>
        <DetailContainer API={API} />
      </Article>
    </>
  );
}

Detail.getInitialProps = async ctx => {
  let { id } = ctx.query;
  if (!id) {
    const popular = await GET_POPULAR;
    id = popular.data.results[0].id;
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

export default Detail;
