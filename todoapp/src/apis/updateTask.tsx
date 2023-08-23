
import axios from 'axios';
import { Task } from '../types/task'

type updateTaskProps = {
    title: string;
    description: string;
}

export const updateTask = async (id:string, updatedData: updateTaskProps) => {
    try {
        const response = await axios.put<Task>(`http://127.0.0.1:8000/tasks/${id}/?format=json`, updatedData);
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};