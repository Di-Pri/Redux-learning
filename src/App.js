import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // Есть dispatch, в него передаётся action
  // то, как action будет изменять state определено внутри reducer
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  console.log("cash", cash);

  const customers = useSelector((state) => state.customers.customers);
  const addCustomer = (customers) => {
    dispatch({ type: "ADD_CUSTOMER", payload: customers });
  };

  const getCustomers = (customers) => {
    dispatch({ type: "GET_CUSTOMERS", payload: customers });
  };
  console.log("customers", customers);

  return (
    <div className="App">
      <div className="cash">{cash}</div>
      <div className="buttons">
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
      </div>
      <div className="buttons">
        <button onClick={() => addCustomer(String(prompt()))}>Add customer</button>
        <button onClick={() => getCustomers(String(prompt()))}>Get customers</button>
      </div>
      <div className="customers">{customers.join(", ")}</div>
    </div>
  );
}

export default App;
