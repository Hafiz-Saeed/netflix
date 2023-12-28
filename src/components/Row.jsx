import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css'


function Row({ title, fetchUrl,isPoster }) {

  const [allMovies, setAllMovies] = useState();

  const base_url = `https://image.tmdb.org/t/p/original/`;
  // console.log(fetchUrl);

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    setAllMovies(data.results);
  }

  // console.log(allMovies);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='row'>
      <h1 style={{fontFamily:"serif",paddingTop:"12px"}}>{title}</h1>

      <div className="movies-row">
        {
          allMovies?.map(item => (
            <img className={`${isPoster && 'movie-poster'} movie-image`} src={`${base_url}/${isPoster ? item.poster_path : item?.backdrop_path}`} alt="movieimg" />
          ))
        }
      </div>

    </div>
  )
}

export default Row