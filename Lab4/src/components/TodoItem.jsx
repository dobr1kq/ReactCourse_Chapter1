const TodoItem = ({ todo, onRemove }) => {
  return (
    <li className="todo-item">
      {todo.title}
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </li>
  )
}

export default TodoItem
