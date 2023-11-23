import { useEffect } from 'react';
import Hero from '../components/Hero';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPopular } from '../redux/actions/movieActions';
import { actionTypes } from '../redux/actionTypes';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  useEffect(() => {
    // filmler için yükleniyo state'ini akti eden aksiyon
    dispatch({ type: actionTypes.SET_MOVIES_LOADING });

    // popüler filmleri al ve store'a akatar
    dispatch(getPopular());

    // türleri al ve store'a aktar
    dispatch({ type: actionTypes.SET_GENRES_LOADING });
    dispatch(getGenres());
  }, []);

  return (
    <div>
      {/* karşılama komp. */}
      <Hero />

      {/*
       * önce yükleniyor mu kontrol et
       * yükleniyorsa loading bileşnin ekrana bas
       * yüklenme bittiysa hata var mı kontrol et
       * hata varsa ekrana mesaj bas
       * hata yoksaher bir kategori için ekrana o kategorinin
       * filmlerini basıcak bileşeni ekrana bas
       */}
      {state.isGenresLoading ? (
        <Loading />
      ) : state.isGenresError ? (
        <p>Üzgünüz hata oluştu</p>
      ) : (
        state.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
