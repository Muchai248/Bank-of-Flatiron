import React from "react";
import TransactionItem from "./TransactionItem";


function Transaction({transactions}){

    const list=transactions.map(transaction=>{
        return<TransactionItem
        key={transaction.id}
        date={transaction.date}
        amount={transaction.amount}
        description={transaction.description}
        category={transaction.category}
        />
    }) 
    return(
        <table>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
            </tr>
             {list}

        </table>

    )
}

export default Transaction;