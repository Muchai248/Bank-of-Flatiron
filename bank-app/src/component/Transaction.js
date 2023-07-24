import React from "react";
import TransactionItem from "./TransactionItem";


function Transaction({transactions}){

    const list=transactions.map(transaction=>{
        return<><tr  key={transaction.id}>
           
            <td>{transaction.date}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
        </tr></>
    
    
    }) 
    return(
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
            </tr>
             
             </thead>
             <tbody>
             {list}
             </tbody>

        </table>

    )
}

export default Transaction;