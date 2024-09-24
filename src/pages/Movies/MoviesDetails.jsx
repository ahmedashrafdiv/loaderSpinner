import { useLoaderData } from "react-router-dom";
import axiosConfig from "../../AxiosConfig/axiosConfig";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";

export default function MoviesDetails() {
  const movieDetails = useLoaderData();
  const loader = useSelector((state) => state.loader.loader);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <div className="card" style={{ width: "500px" }}>
            <img
              src={movieDetails.posterURL}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{movieDetails.title}</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const loader = async ({ params }) => {
  try {
    const res = await axiosConfig.get(`/movies/drama/${params.id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
