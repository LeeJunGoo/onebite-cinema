import SearchBarLayout from '@/components/SearchLayout';
import { NextPageWithLayout } from '@/types';
import { ReactNode } from 'react';
import s from '@/styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <div className={s.container}>
      <h3>HOME&nbsp;Page입니다</h3>
      <br />
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};

export default Home;
