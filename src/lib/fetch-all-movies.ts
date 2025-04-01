import { baseURL } from '@/utility/constant';

const fetchAllMovies = async <T>(arg?: string | number): Promise<T | null> => {
  let url = baseURL;

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
