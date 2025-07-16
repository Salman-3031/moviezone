import React, { useState } from "react";

import Tabs from "./components/Tabs";
import MovieCard from "./components/MovieCard";
import { movies } from "./data";

const App = () => {
  const [movieList, setmovieList] = useState(movies);

  const filterbyCategory = (genere) => {
    if (genere === "All") {
      setmovieList(movies);
    } else {
      setmovieList(movies.filter((data) => data.category == genere));
    }
  };
  return (
    <>
      <main className=" bg-black text-white min-h-screen">
        <Tabs filterbyCategory={filterbyCategory} />

        <div className="flex flex-wrap justify-center mt-5 gap-5  px-5">
          {movieList.map((data) => {
            return <MovieCard key={data.id} data={data} />;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
