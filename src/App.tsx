import React from 'react';
import { Route } from 'react-router';
import Header from './Components/Header';
import Movie from './Containers/Movie';
// import AllShows from './containers/AllShows';
import MoviesList from './Containers/MoviesList';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Route path="/" exact component={MoviesList} />
        {/* <Route path="/shows" exact component={AllShows} /> */}
        <Route path="/movies_list/:movieId" exact component={Movie} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
