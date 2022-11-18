import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import PopularFilms from "./Containers/PopularFilms/PopularFilms";
import SearchFilms from "./Containers/SearchFilms/SearchFilms"; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<PopularFilms />} />
          <Route path="/search" element={<SearchFilms />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
