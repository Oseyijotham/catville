import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import PropTypes from 'prop-types';

export const Home = () => {
   const { myMovies } = useUser();
  
    return (
      <main>
        <span className={css.movieGalleryLabel}>Welcome To The City Of Cats</span>
          
        <div className={css.galleryFrame}>
          <Loader />
          <ul className={css.movieGallery}>
            {myMovies.map(movie => (
              <li key={movie.id} className={css.movieItem}>
                <Link
                  to={`movies/${movie.id}`}
                  name={movie.id}
                  className={css.movieInfo}
                >
                  <img
                    className={css.movieImage}
                    src={
                      'https://image.tmdb.org/t/p/original/' + movie.poster_path
                    }
                    alt="Unavailable"
                  />
                  <span className={css.movieName}>
                    {movie.original_title || movie.original_name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
};

Home.propTypes = {
  myMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ).isRequired,
};

export default Home;