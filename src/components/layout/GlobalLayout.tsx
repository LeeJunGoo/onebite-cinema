import Link from 'next/link';
import React, { ReactNode } from 'react';
import s from '@/styles/globalLayout.module.css';

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={s.container}>
        <header className={s.header}>
          <h1>
            <Link aria-label="Home으로 이동하는 버튼입니다." href="/">
              ONEBITE CINEMA
            </Link>
          </h1>
        </header>
        <main>{children}</main>
        {/* <footer>Footer 영역입니다.</footer> */}
      </div>
    </>
  );
};

export default GlobalLayout;
