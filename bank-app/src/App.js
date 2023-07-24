import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import TransactionItem from "./component/TransactionItem";
import "./App.css";

import Transaction from "./component/Transaction";


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
      <TransactionItem/>
      <Header/>
      <SearchBar/>
   
      <Transaction transactions={transaction} />
    </div>
    </>
  );
}

export default App;