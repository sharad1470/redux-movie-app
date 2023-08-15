import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/MovieApi';
import {ApiKey} from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch=useDispatch();

    useEffect(()=>{

        const fetchMovies= async()=>{
            const movieText="Harry";
            const response=await movieApi.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log('Err', err);
            });

           dispatch(addMovies(response.data));
            //console.log(response);
        }


        fetchMovies();

    },[dispatch]);
    return (
        <div className='banner-img'>


            <MovieListing/>
        </div>
    );
};

export default Home; 