import AddTodo from './AddTodo'
import SearchTodo from './SearchTodo'
import TodoList from './TodoList'
import useGetAllToDo from '../hooks/useGetAllToDo'
import Loading from './Loading'

const Layout = () => {
  const { isLoading, error, todos, addTodo, removeTodo, handleSearch, search } =
    useGetAllToDo()
  return (
    <div className="layout">
      <h1>ToDo App</h1>
      <Loading isLoading={isLoading}>
        <>
          <AddTodo onAdd={addTodo} />
          <SearchTodo onSearch={handleSearch} searchValue={search} />
          <TodoList todos={todos} onRemove={removeTodo} />
        </>
      </Loading>
    </div>
  )
}

export default Layout
