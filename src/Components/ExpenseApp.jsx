import { useEffect } from "react";
import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActions from "./TransActions";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transActions, setTransActions] = useState([]);
  const addTransActions = (formValue) => {
    const data = { ...formValue, id: Date.now() };
    setTransActions([...transActions, data]);
   
    console.log(transActions);
  };
 
  
   
  useEffect(()=>{
    let exp = 0;
    let inc = 0;
  transActions.forEach(action => action.type === 'expense' ? exp = exp + parseFloat(action.amount) : inc = inc + parseFloat(action.amount) )
  setExpense(exp);
  setIncome(inc)
  },[transActions])
  return (
    <section>
      <OverViewComponent
        income={income}
        expense={expense}
        addTransA
        addTransActions={addTransActions}
      />
      <TransActions transActions={transActions} />
    </section>
  );
};

export default ExpenseApp;
