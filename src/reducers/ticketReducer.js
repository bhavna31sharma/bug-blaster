export const ADD_TICKET = "ADD_TICKET";
export const DELETE_TICKET = "DELETE_TICKET";
export const UPDATE_TICKET = "UPDATE_TICKET";

// reducers are generally pure functions
export default function ticketReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_TICKET:
      // return [...state, action.payload];
      return { ...state, tickets: [...state.tickets, action.payload] };
    case UPDATE_TICKET:
      // return {
      //   ...state,
      //   tickets: state.tickets.map((ticket) =>
      //     ticket.id === action.payload.id ? action.payload : ticket
      //   ),
      // };

      return {
        ...state,
        tickets: state.tickets
          .filter((ticket) => ticket.id !== action.payload.id)
          .push(action.payload),
      };
    case DELETE_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
