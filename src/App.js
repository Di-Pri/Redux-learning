import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";

function App() {
  // Есть dispatch, в него передаётся action
  // то, как action будет изменять state определено внутри reducer
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
    //  dispatch({ type: "GET_CASH", payload: cash });
  };
  console.log("cash", cash);

  const customers = useSelector((state) => state.customers.customers);
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };
  console.log("customers", customers);

  return (
    <div className="App">
      <div className="cash">Balance: {cash}</div>
      <div className="buttons">
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
      </div>
      <div className="buttons">
        <button onClick={() => addCustomer(prompt())}>Add customers</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>No customers</div>
      )}
    </div>
  );
}

export default App;
