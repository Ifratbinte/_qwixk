import React from 'react'
import type { RootState } from '#/app'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '#/app/store/counter/CounterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.count.value)
  const dispatch = useDispatch()

  return (
    <div>
        <button aria-label="Increment value" className='border px-4 py-1 mx-2' onClick={() => dispatch(increment())}>Increment</button>
        <button className='border px-4 py-1 mx-2'>{count}</button>
        <button aria-label="Decrement value" className='border px-4 py-1 mx-2' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
  )
}