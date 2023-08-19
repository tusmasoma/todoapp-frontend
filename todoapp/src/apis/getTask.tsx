
import axios from 'axios';
import { Task } from '../types/types';

export const getTask = async () => {
    try {
        const response = await axios.get<Task[]>('http://127.0.0.1:8000/task/?format=json');
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};