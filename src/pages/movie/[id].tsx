import fetchAllMovies from '@/lib/fetch-all-movies';
import s from '@/styles/movieInfo.module.css';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const detailMovie = await fetchAllMovies(Number(id));

  if (!detailMovie) {
    return {
      notFound: true,
    };
  }

  return {
    props: { detailMovie },
  };
};

const Page = ({ detailMovie }: InferGetServerSidePropsType<GetServerSideProps>) => {
  const { title, posterImgUrl, releaseDate, genres, runtime, company, subTitle, description } = detailMovie;

  return (
    <div className={s.container}>
      <section className={s.sectionImg} style={{ backgroundImage: `url(${posterImgUrl})` }}>
        <img src={posterImgUrl}></img>
      </section>
      <section className={s.descriptionContainer}>
        <h3>
          <strong>{title}</strong>
        </h3>
        <p>
          <time>{releaseDate}&nbsp;&#47;&nbsp;</time>
          <span>{genres.join(', ')}</span>&nbsp;&#47;&nbsp;
          <span>{runtime}분</span>
        </p>
        <p>{company}</p>
        <h4>
          <strong>{subTitle}</strong>
        </h4>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default Page;
