import React from "react";
import banner from "../Images/wonder-woman.webp";
const Banner = () => {
  return (
    <div className="bg-no-repeat bg-cover p-5 w-auto" style={{ backgroundImage: `url(${banner})` }}>
      {/* // <div>       */}
      {/* <img src={`${banner}`} alt="" className="bg-no-repeat bg-cover p-5 w-auto brightness-50 "/>   */}
      <div className="items-center m-10">
        <h1 className="text-7xl font-bold brightness-100 text-white">Welcome</h1>
        <p className="text-3xl text-white">Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className="flex mt-10">
        <input type="" placeholder="Search for a movie, tv shows, person..." className="w-full rounded-full p-2"/>

        <button className="items-center rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white relative right-10 px-5 font-bold hover:text-black">Search</button>
        
        </div>
      </div>
    </div>
  );
};

export default Banner;
