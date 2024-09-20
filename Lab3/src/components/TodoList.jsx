import TodoItem from './TodoItem'

const TodoList = ({ todos, onRemove }) => {
  return (
    <ul>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
        ))
      ) : (
        <li>No ToDos available</li>
      )}
    </ul>
  )
}

export default TodoList
