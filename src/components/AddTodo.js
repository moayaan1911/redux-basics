/** @format */

import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/features/todoSlice';
import { useState } from 'react';
export default function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const addFunction = (e) => {
    e.preventDefault();
    console.log('called');
    dispatch(addTodo(input));
    setInput('');
  };
  return (
    <div className='flex justify-center'>
      <form
        className='bg-white p-6 rounded-lg shadow-md'
        onSubmit={addFunction}>
        <input
          className='border border-gray-300 p-2 rounded-md w-full'
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}
