import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import ListContainer from '../containers/ListContainer';
import axios from 'axios';

// Type
import { RootState } from '../redux/reducers';
import { CategoryType } from '../redux/reducers/list';

interface Props {
  data?: string[];
}

const Index: NextPage<Props> = ({ data }) => {
  const { genres }: { genres: CategoryType } = useSelector(
    (store: RootState) => store.list,
  );
  return (
    <>
      <Head>
        <title>Portfolio of KevinGwon | Home</title>
      </Head>
      {Object.keys(genres).map(category => {
        if (category !== 'search') {
          return (
            <ListContainer
              key={genres[category].category}
              {...genres[category]}
            />
          );
        }
      })}
    </>
  );
};

Index.getInitialProps = async props => {
  return {};
};

export default Index;
