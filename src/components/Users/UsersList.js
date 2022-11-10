import React from "react";

import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
  // gets the users info and returns it as a list with map
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;
