const SearchTodo = ({ onSearch, searchValue }) => {
  return (
    <input
      type="text"
      placeholder="Search ToDo"
      value={searchValue}
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export default SearchTodo
