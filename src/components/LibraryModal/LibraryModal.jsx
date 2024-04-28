import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './LibraryModal.module.css';
import svg from '../SharedLayout/icons.svg';


export const LibraryModal = () => {
  const { catModal,catImage, handleInfoClose, showCatInfo } = useUser();

  return (
    <>
      {showCatInfo !== undefined && (
        <div className={css.overlay}>
          <button className={css.closeModal} onClick={handleInfoClose}>
            <svg width="20px" height="20px" className={css.modalIcon}>
              <use href={`${svg}#icon-cross`}></use>
            </svg>
          </button>
          <div className={css.modal}>
            {catModal.map(catModalItem => (
              <>
                <div>
                  <img
                    src={catImage}
                    alt="Picture of Cat"
                    height="200px"
                    className={css.catImage}
                  />
                </div>
                <div className={css.catDetails}>
                  <div className={css.catDetailsInfo}>
                    <h3 className={css.catInfo}>{catModalItem.name}</h3>
                    <p className={css.catInfo}>{catModalItem.description}</p>
                  </div>
                  <div className={css.catDetailsInfo}>
                    <h3 className={css.catInfo}>Temperament</h3>
                    <p className={css.catInfo}>{catModalItem.temperament}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};


