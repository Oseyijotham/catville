import { createContext, useContext, useState } from 'react';
import { trendingMovies } from '../API/Api';
import { fetchCatPics } from '../API/Api';
import { fetchMoreCatPics } from '../API/Api';
import { movieSearchFinder } from '../API/Api';
import { movieDetailsFinder } from '../API/Api';
import { movieReviewsFinder } from '../API/Api';
import { movieCastFinder } from '../API/Api';
import { moreMovieSearchFinder } from '../API/Api';
import { useEffect } from 'react';
import Recommendations from '../API/Recommendations';
import { fetchBreeds } from '../API/Api';
import { fetchCatByBreed } from '../API/Api';
import Notiflix from 'notiflix';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [myMovies, setMovies] = useState([]);
  const [catMovies, setCatMovies] = useState([...Recommendations]);
  const [filmName, setMovieName] = useState('%20');
  const [movieResults, setMovieResults] = useState([]);
  //const [myMovieId, setMovieId] = useState();
  const [movieDetails, setDetails] = useState();
  const [moviePoster, setPoster] = useState();
  const [filmId, setFilmDetails] = useState();
  const [filmReviews, setFilmReviews] = useState([]);
  const [filmCast, setFilmCast] = useState([]);
  const [name, setName] = useState();
  const [isLoading, setLoadingStatus] = useState();
  const [isOpen, setIsOpen] = useState();
  const [breedList, setBreedList] = useState([]);
  const [showCatInfo, setCatInfo] = useState();
  const [catId, setCatId] = useState();
  const [catModal, setCatModal] = useState([]);
  const [catImage, setCatImage] = useState([]);
  const [initLoaded, setInitLoader] = useState();
  const [resultsAmount, setResultsAmount] = useState();
  const [fewResponse, setResponseStatus] = useState();
  const [pageItems, setPageItems] = useState();
  const [pageNums, setPageNums] = useState();
  const [didUserSearch, setSearchStatus] = useState();
  const [catPics, setCatPics] = useState([]);
  const [catPageNums, setCatPageNums] = useState();
  const [galleryLoaded, setGalleryLoader] = useState();

  const clearingFilmName = () => {
    setMovieName('');
  };

  useEffect(() => {
    setGalleryLoader(true);
    fetchCatPics()
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setCatPics([...response]);

        setTimeout(() => {
          setGalleryLoader(false);
        }, 2000);
        setCatPageNums(1);

        console.log(response);
      })
      .catch(error => {
        //setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, []);

  const handleGalleryButtonPress = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow =
        '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
    }, 2000);
    setGalleryLoader(true);
    let catStorageVar = catPageNums;
    catStorageVar += 1;

    fetchMoreCatPics(catStorageVar)
      .then(response => response.json())
      .then(response => {
        setCatPics([...response]);

        setPageNums(catStorageVar);

        setTimeout(() => {
          setGalleryLoader(false);
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  };

  /* 
  useEffect(() => {
    //setLoadingStatus(true);
    fetchMoreCatPics()
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        //setMovies([...response.results]);

        //setLoadingStatus(false);

        console.log(response);
      })
      .catch(error => {
        //setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, []); */

  useEffect(() => {
    setInitLoader(true);
    trendingMovies()
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setMovies([...response.results]);

        //setLoadingStatus(false);

        //console.log(Home);
      })
      .catch(error => {
        //setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, []);

  useEffect(() => {
    setInitLoader(true);
    fetchBreeds()
      .then(response => {
        if (!response.ok) {
          /*loaderMsg.classList.add('hide');
            errorMsg.classList.remove('hide');*/
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setBreedList([...response]);
        setInitLoader(false);
        //console.log(response);
      })
      .catch(error => {
        setInitLoader(false);
        console.error(`Error message ${error}`);
      });
  }, []);

  useEffect(() => {
    setLoadingStatus(true);
    fetchCatByBreed(catId)
      .then(response => {
        if (!response.ok) {
          /*loaderMsg.classList.add('hide');
            errorMsg.classList.remove('hide');*/
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setCatModal([...response[0].breeds]);
        setCatImage(response[0].url);

        setLoadingStatus(false);
      })
      .catch(error => {
        setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, [catId]);

  useEffect(() => {
    setLoadingStatus(true);
    movieSearchFinder(filmName)
      .then(response => response.json())
      .then(response => {
        setMovieResults([...response.results]);
        setLoadingStatus(false);
        const totalResponse = response.total_results;
        setResultsAmount(totalResponse);
        setPageNums(1);
        setPageItems(20);
        setSearchStatus(true);
        if (totalResponse !== 0) {
          Notiflix.Notify.success(
            `Hooray! We found ${response.total_results} movies.`
          );
        }

        if (totalResponse <= 20 && totalResponse !== 0) {
          Notiflix.Notify.warning(
            "We're sorry, but you've reached the end of search results."
          );
          setResponseStatus(true); //If page is not refreshed this stays true(even when false), hence the need for the else{}
        } else {
          setResponseStatus(false);
        }
        //console.log(response.results);
      })
      .catch(error => {
        setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, [filmName]);

  const handleButtonPress = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow =
        '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
    }, 2000);

    let storageVar = pageNums;
    storageVar += 1;
    let storageVarItems = pageItems;
    storageVarItems += 20;
    if (storageVarItems >= resultsAmount) {
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );

      setResponseStatus(true);
    }
    setLoadingStatus(true);

    moreMovieSearchFinder(filmName, storageVar)
      .then(response => response.json())
      .then(response => {
        setMovieResults([...movieResults, ...response.results]);
        console.log(movieResults);
        setPageNums(storageVar);
        setPageItems(storageVarItems);

        setTimeout(() => {
          setLoadingStatus(false);
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  };

  useEffect(() => {
    setDetails('');
    setPoster('');
    setLoadingStatus(true);
    movieDetailsFinder(filmId)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setDetails(response.overview);
        setPoster(response.poster_path);
        setName(response.title);

        setLoadingStatus(false);

        //console.log(response);
      })
      .catch(error => {
        setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, [filmId]);

  useEffect(() => {
    movieReviewsFinder(filmId)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setFilmReviews([...response.results]);
        //console.log(response);
      })
      .catch(error => {
        console.error(`Error message ${error}`);
      });
  }, [filmId]);

  useEffect(() => {
    movieCastFinder(filmId)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setFilmCast([...response.cast]);
        //console.log(response.cast);
      })
      .catch(error => {
        console.error(`Error message ${error}`);
      });
  }, [filmId]);

  const handlePlayClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(undefined);
  };

  const handleInfoClick = evt => {
    setCatId(evt.currentTarget.dataset.id);
    setCatInfo(true);
    console.log(evt.currentTarget.dataset.id);
  };

  const handleInfoClose = () => {
    setCatInfo(undefined);
    //setCatModal([]);
  };

  return (
    <UserContext.Provider
      value={{
        myMovies,
        movieDetails,
        moviePoster,
        filmReviews,
        filmCast,
        movieResults,
        name,
        isLoading,
        filmName,
        setFilmDetails,
        setMovieName,
        clearingFilmName,
        catMovies,
        handlePlayClick,
        isOpen,
        handleClose,
        breedList,
        showCatInfo,
        handleInfoClick,
        handleInfoClose,
        catModal,
        catImage,
        setCatMovies,
        initLoaded,
        handleButtonPress,
        fewResponse,
        setSearchStatus,
        didUserSearch,
        catPics,
        handleGalleryButtonPress,
        galleryLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
