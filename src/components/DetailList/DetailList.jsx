import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './DetailList.css';

function DetailList() {

  const history = useHistory();
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movie);
  const genres = useSelector(store => store.genres);

  

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  let handleClick = () => {
    dispatch({ type: 'FETCH_MOVIE', payload: 0 })

    history.push('/')

  }

  //I'm getting confused by why the JSON.stringify outputs genres
  //while the map function doesnt work 
  //Something related to how the object is being returned
  return (
    <main>

      <section className="movie">


        <div data-testid="movieDetails">

          <h3>{movie.length > 0 && movie[0].title}</h3>

          {movie.length > 0 &&

            <img data-testid="toDetails" src={movie[0].poster} />}

          <p>{movie.length > 0 && movie[0].description}</p>

          <br></br>

          <p>{JSON.stringify(genres)}</p>

        </div>

        <button data-testid="toList" onClick={() => handleClick()}>Return</button>
      </section>
    </main>
  );
}

export default DetailList;
