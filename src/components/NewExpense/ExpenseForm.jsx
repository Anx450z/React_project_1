import React,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandeler = (event) =>{
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandeler = (event) =>{
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandeler = (event) =>{
    setEnteredDate(event.target.value)
  }

  const submitHandeler = (event) =>{
    event.preventDefault()

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseDate)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }
  
  return <form onSubmit={submitHandeler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text'
          value = {enteredTitle}
          onChange={titleChangeHandeler} />
      </div>
    </div>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' 
          min ='0.01' 
          value = {enteredAmount}
          step='0.01' 
          onChange={amountChangeHandeler}/>
      </div>
    </div>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date'
          value = {enteredDate}
          min="2019-01-01" 
          max='2022-12-31' 
          onChange={dateChangeHandeler}/>
      </div>
    </div>
    <div className='new-expense__action'>
      <button type = 'submit'>Add Expense</button>
    </div>
  </form>
}


export default ExpenseForm