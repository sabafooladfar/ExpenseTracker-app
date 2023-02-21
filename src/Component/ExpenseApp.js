import { useEffect, useState } from "react";
import OverView from "./OverView";
import TransActions from "./TransActions";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transActions, setTransActions] = useState([]);

  const addTransactionHandler = (formValues) => {
    setTransActions([...transActions, { ...formValues, id: Date.now() }]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transActions.forEach((t) => {
      t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transActions]);
  return (
    <section className="container">
      <OverView
        income={income}
        expense={expense}
        addTransactionHandler={addTransactionHandler}
      />
      <TransActions transActions={transActions} />
    </section>
  );
};

export default ExpenseApp;
