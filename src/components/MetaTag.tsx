import { MetaTagProps } from '@/types';
import Head from 'next/head';
import React from 'react';

const MetaTag = ({ title, description, posterImgUrl }: MetaTagProps) => {
  const metaTitle = title ?? '한입 시네마';
  const metaDescription = description ?? '한입 시네마에 등록된 영화들을 만나보세요';
  const metaImgURL = posterImgUrl ?? '/thumbnail.png';

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta property="og:image" content={metaImgURL} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
    </Head>
  );
};

export default MetaTag;
