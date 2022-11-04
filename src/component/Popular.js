import React, { useState } from "react";
import PosterCard from "./PosterCard";

const Popular = ({ movies }) => {
  const [streemingActive, setStreemingActive] = useState("Streeming");
  console.log(movies);

  return (
    <>
      <div className="flex m-4">
        <div>
          <h1 className="font-bold text-2xl">What's Popular</h1>
        </div>
        <div className="border-black border-2 rounded-full mx-3 items-center">
          <ul className=" hidden md:flex list-none flex-row justify-center items-center flex-initia gap-2">
            {["Streeming", "On TV", "For Rent", "In Theaters"].map((item) => (
              <li key={item} className={`font-bold p-1 ${item === streemingActive ? "bg-slate-900 rounded-full text-green-500 px-6" : "px-6"} `} onClick={() => setStreemingActive(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container flex justify-start overflow-x-auto gap-3 mx-auto">
         {movies?.map((movie)=>
        <PosterCard key={movie.imdbID} movie={movie}/>
      )}
        
      </div>
    </>
  );
};

export default Popular;
