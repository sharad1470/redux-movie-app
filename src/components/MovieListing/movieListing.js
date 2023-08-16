import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.css';


const Movielisting = () => {

    const movies=useSelector(getAllMovies);
    //console.log(Object.keys(movies).length);
    console.log(movies.Response);

    let renderMovies='...Loading';

    
   
       
       renderMovies= movies.Response==="True"?
        (movies.Search.map((movie, index)=>{
            return <MovieCard key={index} data={movie}/>
        })):

        (<div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>)

        
    
   // (<div> <h3>{movies.Error}</h3></div>);
       

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movie</h2>
                <div className='movie-container'>
                    {/* {Object.keys(movies).length>0?(
   
       
                    movies.Search.map((movie)=>{
                        <MovieCard data={movie}/>

                })):(<></>)
            } */}
                {renderMovies}
                </div>

            </div>
            
        </div>
    );
};

export default Movielisting;