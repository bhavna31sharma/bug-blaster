import { useReducer } from "react";
import "./App.css";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import "./styles.css";
import TicketList from "./components/TicketList";

function App() {
  // const tickets = [];
  const initialState = { tickets: [] };
  
  // Registering a reducer
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} />

        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
