import { createContext, useContext, useState } from 'react';
import { trendingMovies } from '../API/Api';
//import { catMoviez } from '../API/Api';
import { movieSearchFinder } from '../API/Api';
import { movieDetailsFinder } from '../API/Api';
import { movieReviewsFinder } from '../API/Api';
import { movieCastFinder } from '../API/Api';
import { useEffect } from 'react';
import Recommendations from '../API/Recommendations';
import { fetchBreeds } from '../API/Api';
import { fetchCatByBreed } from '../API/Api';

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

  const clearingFilmName = () => {
    setMovieName('');
  };

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

        //console.log(Home);
      })
      .catch(error => {
        setLoadingStatus(false);
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
},[])

  
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

        //console.log(response.results);
      })
      .catch(error => {
        setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, [filmName]);

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
    //console.log(evt.currentTarget.dataset.id);
  };

  const handleInfoClose = () => {
    setCatInfo(undefined);
    setCatModal([]);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
