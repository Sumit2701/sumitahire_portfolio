import './App.css';
import {Home} from './pages/home/Home'
import {Header} from './components/header/header.js'
import {BrowserRouter as Router , Routes, Route, } from 'react-router-dom'
import { MovieList } from './pages/MovieList/MovieList';
import { Movie } from './pages/Moviedetails/Movie';
import { Search } from './pages/search/search';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
       
        <Routes>
        <Route path="/" element={<Home />} />
        
          <Route path="/:type" element={<MovieList />} />
          <Route path="/movie/:id" element={<Movie/>} />
          <Route path="/search/:search" element={<Search/>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
      </Router>
     
    </div>
  );
}
export default App;
