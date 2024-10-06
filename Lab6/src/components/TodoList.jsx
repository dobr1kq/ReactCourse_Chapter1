import TodoItem from './TodoItem'

const TodoList = ({ todos, onRemove, onUpdate }) => {
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        ))
      ) : (
        <li>No ToDos available</li>
      )}
    </ul>
  )
}

export default TodoList
