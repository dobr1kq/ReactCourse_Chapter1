import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import SearchTodo from './SearchTodo'
import TodoList from './TodoList'
import useGetAllToDo from '../hooks/useGetAllToDo'

const Layout = () => {
  const { isLoading, error, todos, addTodo, removeTodo, handleSearch, search } =
    useGetAllToDo()
  return (
    <div className="layout">
      <h1>ToDo App</h1>

      {isLoading ? (
        <p>Loading ToDos...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <AddTodo onAdd={addTodo} />
          <SearchTodo onSearch={handleSearch} searchValue={search} />
          <TodoList todos={todos} onRemove={removeTodo} />
        </>
      )}
    </div>
  )
}

export default Layout
