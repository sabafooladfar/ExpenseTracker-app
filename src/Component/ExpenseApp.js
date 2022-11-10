import { useState } from "react";
import TransActions from "./TransActions";

const ExpenseApp = () => {
    const [expense,setExpense] = useState(0);
    const [income,setIncome] = useState(0);
    const [transActions,setTransActions] = useState([]);

    return ( 
        <section>
            <div className="balanceBox">
               <p>Balance : {expense - income}</p>
               <button>Add</button>
            </div>
            <div className="expenseBox">
                <p>Expense : {expense}</p>
                <p>Income : {income}</p>
            </div>
            <TransActions/>
        </section>
     );
}
 
export default ExpenseApp;