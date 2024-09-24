// import React from 'react'

import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import axiosConfig from "../../AxiosConfig/axiosConfig";

export default function Movies() {
  const navigate = useNavigate();
  const movies = useLoaderData();
  const loader = useSelector((state) => state.loader.loader);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <div className="row row-cols g-4">
            {movies.map((movies) => (
              <div className="col" key={movies.id}>
                <div className="card" style={{ width: "500px" }}>
                  <img
                    src={movies.posterURL}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movies.title}</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigate(`/moviesDetails/${movies.id}`);
                    }}
                    className="btn btn-primary"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export const loader = async () => {
  try {
    const res = await axiosConfig.get("/movies/drama");
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
