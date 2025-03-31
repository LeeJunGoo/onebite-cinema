import SearchBarLayout from '@/components/layout/SearchLayout';
import MovieList from '@/components/MovieList';
import fetchAllMovies from '@/lib/fetch-all-movies';
import s from '@/styles/searchMovie.module.css';
import { categoryMovieList } from '@/utility/constant';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { ReactNode } from 'react';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const keyword = context.query.keyword as string;
  const searchMovies = await fetchAllMovies(keyword);

  if (!searchMovies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { searchMovies, keyword },
  };
};

const Page = ({ searchMovies, keyword }: InferGetServerSidePropsType<GetServerSideProps>) => {
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
