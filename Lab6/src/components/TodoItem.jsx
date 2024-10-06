import React, { useState } from 'react'

const TodoItem = ({ todo, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [error, setError] = useState('')

  const handleEdit = () => {
    if (isEditing) {
      if (editTitle.trim() === '') {
        setError('Title is required')
        return
      }
      onUpdate(todo.id, editTitle)
      setError('')
    }
    setIsEditing(!isEditing)
  }

  const handleChange = (e) => {
    setEditTitle(e.target.value)
  }

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={handleChange}
            style={{ borderColor: error ? 'red' : 'black' }}
          />
          <button onClick={handleEdit}>Save</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <span>{todo.title}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem
