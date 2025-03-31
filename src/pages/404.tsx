import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      영화 정보를 불러오지 못했습니다. <Link href={'/'}>메인 페이지로 이동</Link>
    </div>
  );
};

export default Page;
