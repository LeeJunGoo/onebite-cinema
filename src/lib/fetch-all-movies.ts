import { MovieData } from '@/types';

const fetchAllMovies = async <T>(arg?: T): Promise<MovieData[] | MovieData | null> => {
  let url = 'http://localhost:12345/movie';

  //NOTE - 검색 데이터
  if (typeof arg === 'string') {
    url += `/search?q=${arg}`;
  }

  //NOTE - 상세 데이터
  if (typeof arg === 'number') {
    url += `/${arg}`;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('영화 정보를 불러오지 못했습니다.');
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchAllMovies;
