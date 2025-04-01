import SearchBarLayout from '@/components/layout/SearchLayout';
import MetaTag from '@/components/MetaTag';
import MovieList from '@/components/MovieList';
import fetchAllMovies from '@/lib/fetch-all-movies';
import fetchRandomMovies from '@/lib/fetch-reco-movies';
import s from '@/styles/Home.module.css';
import { MovieData } from '@/types';
import { categoryMovieList } from '@/utility/constant';
import { InferGetStaticPropsType } from 'next';
import { ReactNode } from 'react';

export const getStaticProps = async () => {
  const [allMovies, randomMovies] = await Promise.all([fetchAllMovies<MovieData[]>(), fetchRandomMovies()]);

  if (!allMovies || !randomMovies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { allMovies, randomMovies },
    revalidate: 10,
  };
};

const Home = ({ allMovies, randomMovies }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <MetaTag />
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
    </>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchBarLayout>{page}</SearchBarLayout>;
};

export default Home;
