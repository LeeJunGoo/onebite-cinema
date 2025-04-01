import { MovieData } from '@/types';
import { baseURL } from '@/utility/constant';

const fetchRandomMovies = async (): Promise<MovieData[] | null> => {
  const url = baseURL + '/random';
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('영화 정보를 불러오지 못했습니다.');
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchRandomMovies;
