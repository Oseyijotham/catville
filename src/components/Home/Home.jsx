import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { Loader } from '../InitLoader/Loader';


export const Home = () => {
  

  return (
    <main>
      <span className={css.movieGalleryLabel}>Welcome To The City Of Cats</span>
      <h3 className={css.townOfficialsIntro}>Get to know our town Officials</h3>
      <div className={css.galleryFrame}>
        <Loader />
        <ul className={css.movieGallery}>
          <li key="townMayor" className={css.movieItem}>
            <Link to="/" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/564x/30/70/66/3070663d421b47cea3b0d69b8e781811.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  Introducing Mayor Mittens, the purrfect leader of Catville, a
                  charming town nestled amidst rolling hills and lush greenery.
                  With a gentle paw and a wise whisker, Mayor Mittens has been
                  tirelessly serving the feline community, ensuring harmony and
                  prosperity for all its whiskered residents.
                </p>
              </div>
              <span className={css.movieName}>
                Mayor Mittens
                <span className={css.catName}>Town Mayor</span>
              </span>
            </Link>
          </li>

          <li key="townLibrarian" className={css.movieItem}>
            <Link to="/Library" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/564x/33/9c/af/339caf85128cf064dc15d57333af2117.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  From organizing storytelling sessions for kittens to hosting
                  book clubs for the elder cats, Mrs.Paws fosters a love of
                  reading that spans generations. Her library is a haven where
                  cats can curl up with a good book and escape into imaginary
                  worlds filled with wonder and possibility.
                </p>
              </div>
              <span className={css.movieName}>
                Mrs Paws
                <span className={css.catName}>Town Librarian</span>
              </span>
            </Link>
          </li>
          <li key="townPhotographer" className={css.movieItem}>
            <Link to="/gallery" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/736x/4b/08/74/4b0874bb682c162338bf0f772dc504b6.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  In Catville, Purrfessor Snap's photographs adorn the walls of
                  homes and businesses alike, serving as cherished mementos of
                  cherished moments shared with loved ones. Purrfessor Snap's
                  photographs capture the essence of Catville, preserving
                  memories that will be treasured for a lifetime.
                </p>
              </div>
              <span className={css.movieName}>
                Purrfessor Snap
                <span className={css.catName}>Town Photographer</span>
              </span>
            </Link>
          </li>
          <li key="townHero" className={css.movieItem}>
            <Link to="/cinema" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/564x/34/0a/79/340a798b69db7d9273ffc1beec3d7201.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  In Catville, Puss's name is whispered in awe and reverence,
                  his deeds celebrated in song and story for generations to
                  come. He is also a symbol of hope and resilience, reminding
                  everyone that even the smallest among us can achieve greatness
                  with courage and determination.
                </p>
              </div>
              <span className={css.movieName}>
                Puss
                <span className={css.catName}>Town Hero / Actor</span>
              </span>
            </Link>
          </li>
          <li key="townCinemaOwner" className={css.movieItem}>
            <Link to="/cinema" className={css.movieInfo}>
              <div className={css.catOverlay}>
                <img
                  className={css.movieImage}
                  src="https://i.pinimg.com/736x/e0/dc/8e/e0dc8e9a4c9ed00d4a6e360acd64dd1b.jpg"
                  alt="Unavailable"
                />
                <p className={css.catDescription}>
                  Garfeild embodies the essence of storytelling, bringing joy
                  and wonder to all who witness his performances. From classic
                  plays to original productions, Garfeild's versatility and
                  dedication to his craft shines through in every role he
                  undertakes.
                </p>
              </div>
              <span className={css.movieName}>
                Garfeild
                <span className={css.catName}>Cinema Owner / Actor</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};



export default Home;
