import React from "react";
import "./form.css";
function Form({ handleSubmit }) {
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input className="enter"
          type="float"
          name="amountEntered"
          placeholder="Enter Amount to add"
        />
        <br />
        <input className="enter"
          type="text"
          name="descriptionEntered"
          placeholder="Enter description"
        />
        <br />
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
