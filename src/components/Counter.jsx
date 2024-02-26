import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount,reset } from '../redux/slices/CounterSlice'

const Counter = () => {

  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  const [addValue, setAddValue] = useState()
  const [subValue, setSubValue] = useState()

  function addChangeHandler(event) {
    setAddValue(event.target.value)
  }

  function subChangeHandler(event) {
    setSubValue(event.target.value)
  }

  function emptyInput() {
    setAddValue('')
    setSubValue('')
  }

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex gap-10 justify-center items-center'>
          <button onClick={() => dispatch(increment())}>+</button>
          <p>{count}</p>
          <button onClick={() => dispatch(decrement())}>-</button>
          </div>
        <div className='flex gap-5 justify-center items-center text-center'>
          <input onChange={() => addChangeHandler(event)} className='h-10 w-24 rounded-xl' type="text" name="" id="" value={addValue} />
          <button onClick={() => { dispatch(incrementByAmount(Number(addValue))); emptyInput(); }}>Add</button>
        </div>
        <div className='flex gap-5 justify-center items-center text-center'>
          <input onChange={() => subChangeHandler(event)} className='h-10 w-24 rounded-xl' type="text" name="" id="" value={subValue} />
          <button onClick={() => { dispatch(decrementByAmount(Number(subValue))); emptyInput();}}>Sub</button>
        </div>
        <div>
          <button className='w-48' onClick={() => {dispatch(reset()); emptyInput();}}>Reset</button>
        </div>
    </div>
  )
}

export default Counter