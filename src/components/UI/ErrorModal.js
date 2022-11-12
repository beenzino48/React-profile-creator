import React from 'react'
// reusing components is the key to React
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
  // displays the error message popup
  return <div>
    {/* sets the overlay for the error so you cannot
    interact with the form when the error occurs */}
    {/* sets error onClick to close popup */}
    <div className={classes.backdrop} onClick={props.onConfirm}>
    <Card className={classes.modal}>
    {/* classes takes css classes predefined in the css file */}
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>
        {props.message}
      </p>
    </div>
    <footer>
      {/* onConfirm is linked with the button component */}
    <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
  </div>
  </div>
}

export default ErrorModal
