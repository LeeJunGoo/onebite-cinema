import SearchBarLayout from '@/components/layout/SearchLayout';
import MovieList from '@/components/MovieList';
import movieData from '@/dummy.json';
import s from '@/styles/Home.module.css';
import { MovieData, NextPageWithLayout } from '@/types';
import getBestMovies from '@/utility/getBestMovies';
import { ReactNode, useEffect, useState } from 'react';
import { categoryMovieList } from '@/utility/constant';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  const [bestMovies, setBestMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    const data = getBestMovies(movieData);
    setBestMovies(data);
  }, []);

  if (!movieData)
    return (
      <div>
        영화 정보를 불러오지 못했습니다. <Link href={'/'}>메인 페이지로 이동</Link>
      </div>
    );

  return (
    <div className={s.container}>
      <section>
        <h3>{categoryMovieList[0].title}</h3>
        <MovieList movies={bestMovies} category={categoryMovieList[0].category} />
      </section>
      <section>
        <h3>{categoryMovieList[1].title}</h3>
        <MovieList movies={movieData} category={categoryMovieList[1].category} />
      </section>
      <br />
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};

export default Home;
