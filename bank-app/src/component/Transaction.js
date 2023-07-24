import React from "react";
import TransactionItem from "./TransactionItem";

function Transaction(transaction){
    return(
        <table>
            <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Description</th>

            </tr>
            {transaction.map(transac=>{
                return<TransactionItem
                key={transaction.id}
                date={transaction.date}
                amount={transaction.amount}
                description={transaction.description}
                category={transaction.category}
                />
            })}

        </table>

    )
}

export default Transaction;