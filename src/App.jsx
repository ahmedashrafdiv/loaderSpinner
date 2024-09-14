import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/Movies";
import MoviesDetails from "./pages/Movies/MoviesDetails";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviesDetails/:id" element={<MoviesDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
