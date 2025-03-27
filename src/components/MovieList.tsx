import { MovieListProps } from '@/types';
import MovieItem from './MovieItem';
import s from '@/styles/movieList.module.css';

const MovieList = ({ movies, category }: MovieListProps) => {
  return (
    <ul className={s.container}>
      {movies.length === 0 ? (
        <div>영화 정보가 존재하지 않습니다.</div>
      ) : (
        movies.map((item) => <MovieItem key={item.id} {...item} category={category} />)
      )}
    </ul>
  );
};

export default MovieList;
