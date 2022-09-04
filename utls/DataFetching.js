const url = 'http://www.omdbapi.com/?apikey=e00e3197&'

export const getMoviesByName = async (searchTerm) => {
  const res = fetch(`${url}s=${searchTerm}`)
  console.log('res', res)
  const result = (await res).json()
  console.log('result', result)

  if (result?.error?.message) throw new Error(result.error.message)
  return result
}