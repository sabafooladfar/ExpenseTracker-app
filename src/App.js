import ExpenseApp from "./Component/ExpenseApp";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="appTitle">Expense Tracker App</h1>
      <ExpenseApp />
    </div>
  );
};

export default App;
