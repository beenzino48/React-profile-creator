import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  // allows username and age to become valid input
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // ensures empty forms are not submitted
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age higher than 0'
      })
      return;
    }
    // forward username and age to App.js on every click on the form button
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  // sets button to close error page
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {/* if error occurs retunr this ErrorModal component */}
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        // button sets error to null, closing it
        onConfirm={errorHandler}
      ></ErrorModal>}
      {/* // takes the class component with its css */}
      <Card className={classes.input}>
        {/* form inputs new value when submitted */}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit"> Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
