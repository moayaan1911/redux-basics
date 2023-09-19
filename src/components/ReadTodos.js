/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/features/todoSlice';

export default function ReadTodos() {
  //  read todos from redux
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  console.log('read todos', todos);

  async function deleteFunc(e, input) {
    e.preventDefault();
    const todo = dispatch(removeTodo(input));
    console.log(todo);
  }
  return (
    <div>
      ReadTodos
      {todos.map((todo) => (
        <div className={todo.id}>
          {todo.text}{' '}
          <button
            className='btn btn-primary text-xs text-red-500'
            onClick={(e) => deleteFunc(e, todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
