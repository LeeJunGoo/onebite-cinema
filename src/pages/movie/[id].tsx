import React from 'react';
import s from '@/styles/movie.module.css';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log('🚀 ~ Page ~ id:', id);

  return (
    <div className={s.container}>
      <h3>Movie Detail&nbsp;Page입니다.</h3>
    </div>
  );
};

export default Page;
