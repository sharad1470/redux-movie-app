
import './App.css';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    
      <div className='container'>
      <Router>
      <Header/>
      
        <Routes>
          
        <Route 
              path='/' 
              exact

              element={<Home/>} 
        />
         <Route 
              path='movie/:imdbId' exact element={<MovieDetail/>}
          />
          <Route element={<PageNotFound/>} />
              

               
        
        </Routes>
        <Footer/>
      </Router>
      
      </div>
      </div>
  );
}

export default App;

