// component in react is a function

import './ExpenseItem.css';

function ExpenseItem(){

  const expenseDate = new Date(2022, 2, 28); //regular javascript code
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 550.33
  
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
    
}

export default ExpenseItem;