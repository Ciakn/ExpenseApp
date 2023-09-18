import { useRef } from "react";
import { useState } from "react";

const TransActionForm = ({ addTransActions }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    console.log(formValue);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const submithandler = (e) => {
    e.preventDefault();
    addTransActions(formValue);

   
  };
  return (
    <form onSubmit={submithandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValue.desc}
      
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValue.amount}
      />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValue.type === "expense"}
          id = 'expense'
        />
        <label htmlFor="expense">Expense</label>
        <input
          checked={formValue.type === "income"}
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          id = 'income'
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary" type="submit">Add Transaction</button>
    </form>
  );
};

export default TransActionForm;
