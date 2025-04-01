import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export type MovieData = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  releaseDate: string;
  company: string;
  genres: string[];
  runtime: number;
  posterImgUrl?: string;
};

export type MovieItemProps = MovieData & { category: string };
export type MovieListProps = { movies: MovieData[] | null; category: string };
export type MetaTagProps = Partial<Pick<MovieData, 'title' | 'description' | 'posterImgUrl'>>;
