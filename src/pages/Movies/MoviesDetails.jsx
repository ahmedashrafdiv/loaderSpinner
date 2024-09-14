import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviesDetails() {
  const { id } = useParams();

  const [movie, setMovies] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.sampleapis.com/movies/drama/${id}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ width: "500px" }}>
        <img src={movie.posterURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
}
