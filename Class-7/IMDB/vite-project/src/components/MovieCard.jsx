import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function MovieCard({ movieObj }) {
  // function which will check that
  //if a movie id exists inside the watchlist or not
  // if yes return true
  // if not return false

  const { watchList, handleAddToWatchList } = useContext(MovieContext);

  function doesContain(movieObject) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-cover flex items-end rounded-lg hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
          &#10060;
          {/* // code for cross */}
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
        {movieObj.title}
      </div>
    </div>
  );
}

export default MovieCard;
