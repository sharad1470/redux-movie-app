import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/MovieApi';
import {ApiKey} from '../../common/apis/MovieApiKey'

const Home = () => {

    useEffect(()=>{

        const fetchMovies= async()=>{
            const movieText="Harry";
            const response=await movieApi.get(`?apiKey=${ApiKey}&s=${movieText}&type=movie`)
            .catch((err)=>{
                console.log('Err', err);
            });

            console.log(response);
        }


        fetchMovies();

    },[]);
    return (
        <div className='banner-img'>


            <MovieListing/>
        </div>
    );
};

export default Home; 