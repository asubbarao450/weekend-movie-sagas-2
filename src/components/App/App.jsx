import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import DetailList from '../DetailList/DetailList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
      

        <Route path="/DetailList" exact>
          <DetailList/>
        </Route>

        
        

      </Router>
    </div>
  );
}

export default App;
