import { MovieData } from '@/types';

const getFilterMovies = <T extends { title: string }>(keyword: string, movies: T[]) => {
  const searchMovies = movies.filter((item) => item.title.includes(keyword));

  return searchMovies;
};

export default getFilterMovies;
