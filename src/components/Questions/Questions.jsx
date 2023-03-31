import React from 'react';
import './Questions.css';

const Questions = () => {
  return (
    <div className='questions'>
      <h3>What is difference between props and state?</h3>
      <p>The state is a built-in React object that is used to contain data or information about the component. State holds the data and can change over time.On the other hand,props are used to pass data and event handlers to the children components.Props are immutable—once set, props cannot be changed.I think this is the main difference between state and props.</p>

      <h3>How does useState() work?</h3>
      <p>States are mutable, meaning their value can change, and for that, the useState() hook is used to handle and manage your states.The useState() hook takes in the initial value of the state variable as an argument and returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.


      <h3>what can useEffect do without loading data?</h3>
      <p> There are many usages of useEffect. Among them
          1.Running once on mount: fetch API data
          2.Running on state change: validating input field
          3.Running on state change: live filtering
          4.Running on state change: trigger animation on new array value
          5.Running on props change: update paragraph list on fetched API data update
          6Running on props change: updating fetched API data to get BTC updated price</p>


        <h3>How does react work?</h3>  
        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>

        <h3></h3>

</p>
    </div>
  );
};

export default Questions;