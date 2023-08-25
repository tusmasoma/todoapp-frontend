
import axios from 'axios';
import { Task } from '../types/task';

export const getTaskBy = async (id:string) => {
    try {
        const response = await axios.get<Task>(`http://127.0.0.1:8000/tasks/${id}/?format=json`);
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};