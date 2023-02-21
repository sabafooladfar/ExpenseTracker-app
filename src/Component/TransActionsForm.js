import { useState } from "react";

const TransActionsForm = ({ addTransaction }) => {
  const [formValues, setFormValue] = useState({
    type: "expense",
    desc: "",
    amount: NaN,
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="description"
      />
      <br />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
        placeholder="amount"
      />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          checked={formValues.type === "income"}
          name="type"
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button className="btn" type="submit">Add Transaction</button>
    </form>
  );
};

export default TransActionsForm;
