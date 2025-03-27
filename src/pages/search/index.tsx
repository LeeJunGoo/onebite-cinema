import SearchBarLayout from '@/components/layout/SearchLayout';
import MovieItem from '@/components/MovieItem';
import movieData from '@/dummy.json';
import s from '@/styles/searchMovie.module.css';
import { MovieData } from '@/types';
import getFilterMovies from '@/utility/getFilterMovies';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { categoryMovieList } from '@/utility/constant';
import MovieList from '@/components/MovieList';

const Page = () => {
  const router = useRouter();
  const keyword = router.query.keyword as string;
  const [filterMovies, setFilterMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    const data = getFilterMovies(keyword, movieData);
    if (data) {
      setFilterMovies(data);
    }
  }, [keyword]);

  if (!filterMovies || filterMovies.length === 0) return <div>검색한 영화 정보가 없습니다.</div>;

  return (
    <div className={s.container}>
      <h3>
        {categoryMovieList[2].title}: {keyword}
      </h3>
      <MovieList movies={filterMovies} category={categoryMovieList[0].category} />
    </div>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};

export default Page;
