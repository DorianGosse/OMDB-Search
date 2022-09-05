const url = 'http://www.omdbapi.com/?apikey=e00e3197&'

export const getMoviesByName = async (searchTerm, page) => {
  const res = fetch(`${url}s=${searchTerm}&type=movie&page=${page}`)
  const result = (await res).json()

  if (result?.error?.message) throw new Error(result.error.message)
  return result
}