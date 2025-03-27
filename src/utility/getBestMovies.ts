const getBestMovies = <T>(movieData: T[]) => {
  const max = movieData.length;
  const bestMovie: T[] = [];
  const prevNumbers: number[] = []; //인덱스 숫자 배열

  while (bestMovie.length < 3) {
    const indexNumber = Math.floor(Math.random() * max);

    // 동일한 인덱스가 이미 prevNumbers에 있으면 다시 시도
    if (prevNumbers.includes(indexNumber)) continue;

    bestMovie.push(movieData[indexNumber]);
    prevNumbers.push(indexNumber); // 인덱스 추가하여 중복 방지
  }

  return bestMovie;
};

export default getBestMovies;
