import s from '@/styles/movieItem.module.css';
import { MovieItemProps } from '@/types';
import Link from 'next/link';
const MovieItem = ({
  id,
  title,
  subTitle,
  description,
  releaseDate,
  company,
  genres,
  runtime,
  posterImgUrl,
  category,
}: MovieItemProps) => {
  return (
    <li
      className={`${category === 'all' && s.allContainer} ${category === 'random' && s.randomContainer} ${
        category === 'search' && s.searchContainer
      }`}
    >
      <Link href={`/movie/${id}`}>
        <img className={s.itemImg} src={posterImgUrl}></img>
      </Link>
    </li>
  );
};

export default MovieItem;
