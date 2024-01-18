import axios from "axios";

export const fetchTodosApi = async () => {
    return await axios.get('http://localhost:3001/todos')
}

export const createTodoApi = async (todo) => {
    return await axios.post('http://localhost:3001/todos', todo)
}

export const editTodoApi = async (id, data) => {
    return await axios.put(`http://localhost:3001/todos/${id}`, data)
}

export const deleteTodoApi = async (id) => {
    return await axios.delete(`http://localhost:3001/todos/${id}`)
}