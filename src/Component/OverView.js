import { useState } from "react";
import TransActionsForm from "./TransActionsForm";

const OverView = ({ income, expense, addTransactionHandler }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="balanceBox">
        <p>Balance : {income - expense} $</p>
        <button className={`btn ${isShow && "cancel"}`} onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionsForm addTransaction={addTransactionHandler} />}
      <div className="expenseBox">
        <p className="expense">Expense<span> {expense} $</span></p>
        <p className="income">Income<span> {income} $</span></p>
      </div>
    </>
  );
};

export default OverView;
