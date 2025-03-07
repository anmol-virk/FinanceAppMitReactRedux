import "./styles.css";
import IncomeExpenseForm from "./IncomeExpenseForm";
import FinanceSummary from "./FinanceSummary";

export default function App() {
  return (
    <div className="App">
      <IncomeExpenseForm />
      <FinanceSummary />
    </div>
  );
}
