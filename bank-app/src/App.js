import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import TransactionItem from "./component/TransactionItem";
import "./App.css";
import Form from "./component/Form";
import Transaction from "./component/Transaction";


function App() {
const[originalTransaction, setoriginalTransaction]=useState([])


  const[transaction, setTransactions]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:8001/transactions")
    .then(resp=>resp.json())
    .then(transc=>{
      setTransactions(transc)
      setoriginalTransaction(transc)
      
      console.log(transaction)
    })
  },[])
 
  


  return (
    <>
    <div>
    
      {/* <TransactionItem/> */}
      <Header/>
      <SearchBar transaction={transaction} setTransactions={setTransactions} originalTransaction={originalTransaction}/>
    <Form transaction={transaction} setTransactions={setTransactions} />
      <Transaction transactions={transaction} />
    </div>
    </>
  );
}

export default App;