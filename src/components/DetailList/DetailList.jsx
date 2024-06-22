import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; 
import './DetailList.css';

function DetailList() {

  const history = useHistory();
  const dispatch = useDispatch();
  let movie = useSelector(store => store.movie);
  

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES'});
  }, []);

  let handleClick = () => {

    
    
        dispatch({type:'FETCH_MOVIE', payload: 0})
    
        history.push('/')
    
      }

  return (
    <main>
      
      <section className="movie">
        
          
            <div data-testid='movieItem'>
              <h3>{movie}</h3>
             
            </div>
          
        <button onClick={()=>handleClick()}>Return</button>
      </section>
    </main>
  );
}

export default DetailList;
