import fetchAllMovies from '@/lib/fetch-all-movies';
import s from '@/styles/movieInfo.module.css';
import { MovieData } from '@/types';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchAllMovies<MovieData>(Number(id));

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }],
    fallback: true,
  };
};

const Page = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>로딩 중입니다.</div>;
  }

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
