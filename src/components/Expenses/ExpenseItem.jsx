import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [title, setTitle]= useState(props.title); //react Hook, starts with use..., return array with 2 values

  const clickHandeler = () => {
    setTitle('Updated');
    console.log('Clicked!!');
  };
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandeler}>Change Title</button> 
    </Card>
  );  
}

export default ExpenseItem;