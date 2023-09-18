import { useState } from "react";
import TransActionForm from "./TransActionForm";
const OverViewComponent = ({ income, expense, addTransActions }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expense}</p>
        <button
          className={`btn ${isShow ? "cansel" : ""}`}
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "Cansel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          income={income}
          expense={expense}
          addTransActions={addTransActions}
        />
      )}
      <div className="topSection">
        <div>
          {" "}
          Expense : <span style={{ color: "red" }}>{expense}$</span>{" "}
        </div>
        <div>
          {" "}
          Income : <span>{income}$</span>{" "}
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
