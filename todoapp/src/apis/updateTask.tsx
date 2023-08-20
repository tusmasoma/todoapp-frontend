
import axios from 'axios';
import { Task } from '../types/types';

export const updateTask = async (id:string, updatedData: Task) => {
    try {
        const response = await axios.put<Task>(`http://127.0.0.1:8000/task/${id}/?format=json`, updatedData);
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};