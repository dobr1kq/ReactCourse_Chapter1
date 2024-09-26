import { useState } from 'react'

const useTodos = () => {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')

  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: Date.now(),
        title,
      }
      setTodos([...todos, newTodo])
    }
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleSearch = (query) => {
    setSearch(query)
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return {
    todos: filteredTodos,
    addTodo,
    removeTodo,
    handleSearch,
  }
}

export default useTodos
