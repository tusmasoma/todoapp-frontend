
import axios from 'axios';
import { Task } from '../types/types';

export const getTaskById = async (id:string) => {
    try {
        const response = await axios.get<Task>(`http://127.0.0.1:8000/task/${id}/?format=json`);
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};