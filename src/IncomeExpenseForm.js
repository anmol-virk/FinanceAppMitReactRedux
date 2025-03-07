import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from "./actions";

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handelAddIncome = () => {
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };

  const handelAddExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button onClick={handelAddIncome}>Add Income</button>
      <button onClick={handelAddExpense}>Add Expense</button>
    </div>
  );
};

export default IncomeExpenseForm;
