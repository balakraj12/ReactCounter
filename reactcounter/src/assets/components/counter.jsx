import React from 'react'

const counter = () => {
     const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };  
  return (
   
    <div className='counter'>
        <p id='counter-value'>you have clicked {count} times</p>
        <button id='increment-btn' onClick={handleIncrement}>
          Increment
        </button>    
      
    </div>
  )
}

export default counter
