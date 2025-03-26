import React, { ReactNode, useRef } from 'react';
import s from '@/styles/searchBarLayout.module.css';
import { useRouter } from 'next/router';

const SearchBarLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  let searchKeyword = '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current === null) return inputRef.current;
    searchKeyword = inputRef.current.value;
    if (!searchKeyword) return alert('입력 해주세요');

    router.push(`/search?keyword=${searchKeyword}`);
  };

  return (
    <>
      <form className={s.container} onSubmit={handleSubmit}>
        <label>영화 검색 입력창입니다.</label>
        <input name="search" ref={inputRef} />
        <button type="submit">검색하기</button>
      </form>
      {children}
    </>
  );
};

export default SearchBarLayout;
