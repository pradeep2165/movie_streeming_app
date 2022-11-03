import { useState } from "react";
import "./App.css";
// import { useGetSearchBasicQuery } from "./redux/services/Streaming_Availability";
import {data} from './rawdata';
function App() {
  
  const [movies, setMovies] = useState(data.results);
  console.log(movies);
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
