/** @format */

import AddTodo from './components/AddTodo';
import ReadTodos from './components/ReadTodos';

export default function App() {
  return (
    <h1 className='text-3xl font-bold underline'>
      <AddTodo />
      <ReadTodos />
    </h1>
  );
}
