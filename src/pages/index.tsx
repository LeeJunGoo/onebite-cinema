import SearchBarLayout from '@/components/layout/SearchLayout';
import MovieList from '@/components/MovieList';
import fetchAllMovies from '@/lib/fetch-all-movies';
import fetchRandomMovies from '@/lib/fetch-reco-movies';
import s from '@/styles/Home.module.css';
import { NextPageWithLayout } from '@/types';
import { categoryMovieList } from '@/utility/constant';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';

export const getServerSideProps = async () => {
  const [allMovies, randomMovies] = await Promise.all([fetchAllMovies(), fetchRandomMovies()]);

  if (!allMovies || !randomMovies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { allMovies, randomMovies },
  };
};

const Home: NextPageWithLayout = ({ allMovies, randomMovies }: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <div className={s.container}>
      <section>
        <h3>{categoryMovieList[0].title}</h3>
        <MovieList movies={randomMovies} category={categoryMovieList[0].category} />
      </section>
      <section>
        <h3>{categoryMovieList[1].title}</h3>
        <MovieList movies={allMovies} category={categoryMovieList[1].category} />
      </section>
      <br />
    </div>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};

export default Home;
