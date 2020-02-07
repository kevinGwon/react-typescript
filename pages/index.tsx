import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import ListContainer from '../containers/ListContainer';
import axios from 'axios';

// Type
import { RootState } from '../redux/reducers';
import { CategoryDefaultType } from '../redux/reducers/list';

interface Props {
  data?: string;
}

const Index: NextPage<Props> = ({ data }) => {
  const { genres }: { genres: CategoryDefaultType } = useSelector(
    (store: RootState) => store.list,
  );

  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | Home</title>
      </Head>
      <Link href="/detail">
        <a>상세페이지</a>
      </Link>
      {Object.keys(genres).map(category => {
        return (
          <ListContainer
            key={genres[category].category}
            {...genres[category]}
          />
        );
      })}
    </>
  );
};

Index.getInitialProps = async props => {
  return {};
};

export default Index;
