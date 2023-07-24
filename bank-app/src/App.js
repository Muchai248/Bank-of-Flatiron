import React, {useEffect} from "react";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import DateBar from "./component/DateBar";


function App() {
  useEffect(()=>{
    fetch(" http://localhost:8001/transactions")
    .then(resp=>resp.json())
    .then(transc=>console.log(transc))
  })



  return (
    <>
    <div>
      <Header/>
      <SearchBar/>
      <DateBar/>
    </div>
    </>
  );
}

export default App;