import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './Gallery.module.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { useEffect } from 'react';
import { Button } from '../GalleryButton/Button';
import { Loader } from '../GalleryLoader/Loader';

export const Gallery = () => {
  const { catPics } = useUser();

  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      closeText: 'X',
      animationSlide: false,
    });

    // Cleanup function
    return () => {
      lightbox.destroy();
    };
  }, [catPics]);

  return (
    <main>
      <span className={css.movieGalleryLabel}>Welcome To Our Gallery</span>

      <div className={css.galleryFrame}>
        <Loader />
        {catPics.length !== 0 && (
          <ul className={`${css.movieGallery} gallery`}>
            {catPics.map(pic => (
              <li key={pic.id} className={css.movieItem} data-id={pic.id}>
                <a href={pic.url}>
                  <img className={css.movieImage} src={pic.url} alt="" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button />
    </main>
  );
};

export default Gallery;
