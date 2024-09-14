// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/movies/drama")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="row row-cols g-4">
        {movies.map((movies) => (
          <div className="col" key={movies.id}>
            <div className="card"  style={{width:"500px"}} >
              <img src={movies.posterURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movies.title}</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <button  onClick={()=>{navigate(`/moviesDetails/${movies.id}`)}} className="btn btn-primary">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
