const APIKEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflixOriginalsAll: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchNetflixOriginalsTv: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchNetflixOriginalsMovie: `/discover/movie?api_key=${APIKEY}&with_networks=213`,

  fetchTopRatedAll: `/movie/top_rated?api_key=${APIKEY}&language=fr-BE`,
  fetchTopRatedTv: `/tv/top_rated?api_key=${APIKEY}&language=fr-BE`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${APIKEY}&language=fr-BE`,

  fetchActionMoviesAll: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchActionMoviesTv: `/discover/tv?api_key=${APIKEY}&with_genres=28`,
  fetchActionMoviesMovie: `/discover/movie?api_key=${APIKEY}&with_genres=28`,

  fetchComedyMoviesAll: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchComedyMoviesTv: `/discover/tv?api_key=${APIKEY}&with_genres=35`,
  fetchComedyMoviesMovie: `/discover/movie?api_key=${APIKEY}&with_genres=35`,

  fetchHorrorMoviesAll: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchHorrorMoviesTv: `/discover/tv?api_key=${APIKEY}&with_genres=27`,
  fetchHorrorMoviesMovie: `/discover/movie?api_key=${APIKEY}&with_genres=27`,

  fetchRomanceMoviesAll: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchRomanceMoviesTv: `/discover/tv?api_key=${APIKEY}&with_genres=10749`,
  fetchRomanceMoviesMovie: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,

  fetchDocumentariesAll: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchDocumentariesTv: `/discover/tv?api_key=${APIKEY}&with_genres=99`,
  fetchDocumentariesMovie: `/discover/movie?api_key=${APIKEY}&with_genres=99`,

  fetchTrendingMovie: `/trending/movie/week?api_key=${APIKEY}&language=fr-BE`,
  fetchTrendingTv: `/trending/tv/week?api_key=${APIKEY}&language=fr-BE`,
  fetchTrendingAll: `/trending/all/week?api_key=${APIKEY}&language=fr-BE`,

  fetchNew: `/movie/upcoming?api_key=${APIKEY}&language=en-US`,
};

export default requests;
