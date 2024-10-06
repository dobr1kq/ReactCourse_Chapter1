import { useState, useEffect } from "react";
import useTodos from "./useTodos";


const useGetAllToDo = () => {
    const { todos, addTodo, removeTodo, handleSearch, setTodos, search } = useTodos();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
        try {
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
            setTodos(json);
            setIsLoading(false);
            });
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    fetchData();
    }, []);

    return { isLoading, todos, error, addTodo, removeTodo, handleSearch, search };
};

export default useGetAllToDo;