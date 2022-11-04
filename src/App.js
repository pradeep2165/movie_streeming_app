import { useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Popular from "./component/Popular";
// import { useGetSearchBasicQuery } from "./redux/services/Streaming_Availability";
import {data} from './rawdata';

function App() {  
  const [movies, setMovies] = useState(data.results);
// const { data, isFetching, error } = useGetSearchBasicQuery();
//   console.log(data);
//   if(isFetching){
//     console.log("fetching")
//   }
//   if(error){
//     console.log(error);
//   }
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Popular movies={movies}/>
    </div>
  );
}

export default App;
