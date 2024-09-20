const TodoItem = ({ todo, onRemove }) => {
  return (
    <li>
      {todo.id}: {todo.title}
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </li>
  )
}

export default TodoItem
