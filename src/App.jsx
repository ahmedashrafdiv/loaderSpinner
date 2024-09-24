import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Movies, { loader as loaderMovies } from "./pages/Movies/Movies";
import MoviesDetails, {loader as loaderMoviesDetails} from "./pages/Movies/MoviesDetails";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./Store/store";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "movies", element: <Movies />, loader:loaderMovies },
      { path: "moviesDetails/:id", element: <MoviesDetails />, loader:loaderMoviesDetails },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
