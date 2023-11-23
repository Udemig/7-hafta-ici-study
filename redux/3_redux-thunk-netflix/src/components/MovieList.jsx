import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { options } from '../constants/constants';

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  // bu bileşen kategorinin filmleri için istek atıcak
  // ve filmleri listeleyecek
  return (
    <div>
      <h2>{genre.name}</h2>
      {/* slider alanı > haftaya kadar filmleri listelemeyi deneyin slider içerisnde */}
    </div>
  );
};

export default MovieList;
