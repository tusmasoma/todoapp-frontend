import axios from 'axios';
import { Task } from '@types/task';

export const updateTask = async (id:string, updatedTask: Task) => {
    try {
        const response = await axios.put<Task>(`http://127.0.0.1:8000/tasks/${id}/?format=json`, updatedTask);
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};