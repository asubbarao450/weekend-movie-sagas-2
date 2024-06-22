import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  //connects with the takeevery of the detail list
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_MOVIE', fetchAMovie);
  yield takeEvery('FETCH_GENRE', fetchGenres);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}


function* fetchAMovie(action) {

  //the movid returns the movie id that was clicked
  let movid = action.payload

  try {

    //stores the specific movie that was clicked 
    const movieResponse = yield axios.get(`/api/movies/${movid}`);
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIE',
      payload: movieResponse.data
    });
  } catch (error) {
    console.log('fetchAMovie error:', error);
  }
}


function* fetchGenres(action) {

  //the movid returns the movie id that was clicked
  let movid = action.payload

  try {

    //axios function call to the genre router database
    const movieResponse = yield axios.get(`/api/genres/${movid}`);
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_GENRES',
      payload: movieResponse.data
    });
  } catch (error) {
    console.log('fetchGenres error:', error);
  }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

const movie = (state = 0, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'SET_MOVIE':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    movie,
    genres

  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
