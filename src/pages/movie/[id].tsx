import React, { useEffect, useState } from 'react';
import s from '@/styles/movieInfo.module.css';
import { useRouter } from 'next/router';
import movieData from '@/dummy.json';
import { MovieData } from '@/types';
import { getFindMovie } from '@/utility/getFindMovie';

const Page = () => {
  const router = useRouter();
  const id = router.query.id;
  const [movie, setMovie] = useState<MovieData | null>();

  useEffect(() => {
    if (!id) return;
    const data = getFindMovie(Number(id), movieData);
    setMovie(data);
  }, [id]);

  if (!movie) return <div>영화 정보가 없습니다.</div>;

  return (
    <div className={s.container}>
      <section className={s.sectionImg} style={{ backgroundImage: `url(${movie.posterImgUrl})` }}>
        <img src={movie.posterImgUrl}></img>
      </section>
      <section className={s.descriptionContainer}>
        <h3>
          <strong>{movie.title}</strong>
        </h3>
        <p>
          <time>{movie.releaseDate}&nbsp;&#47;&nbsp;</time>
          <span>{movie.genres.join(', ')}</span>&nbsp;&#47;&nbsp;
          <span>{movie.runtime}분</span>
        </p>
        <p>{movie.company}</p>
        <h4>
          <strong>{movie.subTitle}</strong>
        </h4>
        <p>{movie.description}</p>
      </section>
    </div>
  );
};

export default Page;
