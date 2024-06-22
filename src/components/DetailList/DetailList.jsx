import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import './DetailList.css';

function DetailList() {

  const dispatch = useDispatch();
  const movie = useSelector(store => store.movie);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      
      <section className="movie">
        
          
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
              <p>{movie.description}</p>
            </div>
          
        
      </section>
    </main>
  );
}

export default DetailList;
