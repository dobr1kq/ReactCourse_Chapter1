import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Initial ToDo list state
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [search, setSearch] = useState('')

  // Add a new ToDo item
  const addTodo = () => {
    if (title.trim() === '') return

    const newTodo = {
      id: todos.length + 1,
      title: title,
    }

    setTodos([...todos, newTodo])
    setTitle('') // Clear input after adding
  }

  // Remove a ToDo item by id
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  // Filtered ToDo list based on search input
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <h1>My ToDo List</h1>

      {/* Add ToDo Item */}
      <div>
        <input
          type="text"
          placeholder="Enter ToDo Item Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTodo}>Add ToDo</button>
      </div>

      {/* Search ToDo Item */}
      <div>
        <input
          type="text"
          placeholder="Search by Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ToDo List */}
      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <li key={todo.id}>
              {todo.title}{' '}
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </li>
          ))
        ) : (
          <li>No ToDo items found</li>
        )}
      </ul>
    </div>
  )
}

export default App
