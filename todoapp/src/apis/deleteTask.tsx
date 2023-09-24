import axios from 'axios';

export const deleteTask = async (id: string) => {
    try {
        await axios.delete(`http://127.0.0.1:8000/tasks/${id}/`);
    } catch (error: any) {
        throw new Error(error);
    }
};
