import { useRouter } from 'next/router';
import s from '@/styles/searchMovie.module.css';
import { ReactNode } from 'react';
import SearchBarLayout from '@/components/SearchLayout';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const keyword = router.query.keyword;
  console.log('🚀 ~ Page ~ keyword:', keyword);

  return (
    <div className={s.container}>
      <h3>Search&nbsp;페이지입니다.</h3>
      <br />
      <p>검색 결과: {keyword}</p>
      <br />
      <Link href={`/movie/${keyword}`}>영화 상세페이지로 이동</Link>
    </div>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};

export default Page;
