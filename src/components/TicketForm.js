import React, { useState } from "react";
import { ADD_TICKET } from "../reducers/ticketReducer";

export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
    //  a: "Low", -- variable a -- not related to const a
    //  [a]: "Low", -- value of a --- 10
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page should not reload

    const ticketData = {
      // id: crypto.randomUUID(),
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    console.log(ticketData);
    dispatch({ type: ADD_TICKET, payload: ticketData });
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>

        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="priority-input"
              onChange={(e) => setPriority(e.target.value)}
            ></input>
            {label}
          </label>
          // <>
          //   <input type="radio" id={label}></input>
          //   <label for={label}>{label}</label>
          // </>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

// Java

// class ReducerPayload {
//   [public] int id;
//    public Ticket ticket;
//  }

// class Reducer {
//   private state;

//   Reducer(initialState) {
//     state - initialState

//   }

//   function (enum actionType, ReducerPayload payload ) {
//     switch(actionTyper)
//   }
// }
