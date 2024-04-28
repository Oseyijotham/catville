import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './Library.module.css';
import svg from '../SharedLayout/icons.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { LibraryModal } from '../LibraryModal/LibraryModal';


export const Library = () => {
  const { breedList, handleInfoClick } = useUser();

  return (
    <main>
      <span className={css.movieGalleryLabel}>Welcome To Our Library</span>

      <div className={css.galleryFrame}>
        <Loader />
              <LibraryModal />
              { breedList.length !== 0 &&
                  <ul className={css.movieGallery}>
                      {breedList.map(breed => (
                          <li
                              key={breed.id}
                              className={css.movieItem}
                              data-id={breed.id}
                              onClick={handleInfoClick}
                          >
                              {breed.name}
                          </li>
                      ))}
                  </ul>}
      </div>
    </main>
  );
};



export default Library;
