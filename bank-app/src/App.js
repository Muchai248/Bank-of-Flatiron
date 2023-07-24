import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import DateBar from "./component/DateBar";
import transaction from "./component/transaction";


function App() {

  const[transaction, setTransactions]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:8001/transactions")
    .then(resp=>resp.json())
    .then(transc=>setTransactions(transc))
  },[])
  console.log(transaction)



  return (
    <>
    <div>
      <Header/>
      <SearchBar/>
      <DateBar/>
      <transaction transactions={transaction} />
    </div>
    </>
  );
}

export default App;