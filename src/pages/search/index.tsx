import SearchBarLayout from '@/components/layout/SearchLayout';
import MovieList from '@/components/MovieList';
import fetchAllMovies from '@/lib/fetch-all-movies';
import s from '@/styles/searchMovie.module.css';
import { MovieData } from '@/types';
import { categoryMovieList } from '@/utility/constant';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const keyword = router.query.keyword as string;
  const [searchMovies, setSearchMovies] = useState<MovieData[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchMovies = await fetchAllMovies<MovieData[]>(keyword);

      if (!searchMovies) {
        router.push('/404');
      }

      setSearchMovies(searchMovies);
    };

    fetchData();
  }, [keyword]);

  return (
    <div className={s.container}>
      <h3>
        {categoryMovieList[2].title}: {keyword}
      </h3>
      <MovieList movies={searchMovies} category={categoryMovieList[0].category} />
    </div>
  );
};

Page.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};

export default Page;
