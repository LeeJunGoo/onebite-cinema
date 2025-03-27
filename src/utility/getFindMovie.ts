export const getFindMovie = <T extends { id: number }>(id: number, movies: T[]): T | null => {
  const data = movies.find((item) => item.id === id);

  if (data) return data;

  return null;
};
