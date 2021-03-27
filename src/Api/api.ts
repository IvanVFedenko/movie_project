import axios from 'axios';
import { all_movies } from '../constants/urlConstants';

export const get_all_movies = async () => {
  const request = await axios.get(all_movies);
  const movies = request.data;
  return movies.filter(
    (item: { _id: string }) => item._id !== '5d9b8bc3558bb9003ab94462'
  );
};

export const get_one_movie = async (id: string) => {
  let url = new URL(all_movies);
  url.searchParams.set('movie_id', `${id}`);
  const request = await axios.get(url.toString());
  const movie = request.data;
  return movie;
};
