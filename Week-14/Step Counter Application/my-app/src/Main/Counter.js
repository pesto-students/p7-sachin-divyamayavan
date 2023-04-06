import React from 'react'
import { increaseValue, decreaseValue } from '../redux/action-creator';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const myState = useSelector(state => state.ourState.count)
  const dispatch = useDispatch()
  console.log("++++ myState ++++", myState)

  return (

    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgrey",
      height: "100vh"


    }}>
      <h1>Counter Application</h1>
      <button style={{
        backgroundColor: "green",
        color: "black",
        padding: "10px 30px"
      }}
        onClick={() => dispatch(increaseValue())}>Increment</button>
      <p> {myState} </p>
      <button
        style={{
          backgroundColor: "green",
          color: "black",
          padding: "10px 30px"
        }}
        onClick={() => dispatch(decreaseValue())}>Decrement</button>
    </div>
  )
}



export default Counter