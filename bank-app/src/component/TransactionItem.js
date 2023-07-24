import React from "react";

function TransactionItem({date, description, category, Amount}){
    return(
        <>
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{Amount}</td>
        </tr>
        </>

    )
}

export default TransactionItem;