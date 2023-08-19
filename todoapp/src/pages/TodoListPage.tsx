import React from 'react';
import { useState, useEffect } from "react"
import type { Task } from '../types/task';
import { TodoListContainer } from "../components/atoms/Container/Container.styles"
import { TodoItem } from "../components/molecules/TodoItem/TodoItem"
import { getTask } from '../apis/getTask';

export const TodoListPage:React.FC = () => {
    const [data, setData] = useState<Task[] | null>(null);

    useEffect(() => {
        // dataの取得は最初の読み込み時のみ
        const fetchData = async () => {
            try {
                const responseData:Task[] = await getTask();
                setData(responseData);
            } catch (error:any) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <TodoListContainer maxWidth="sm">
            {data ? data.map( item => (
            <TodoItem key={item.id} {...item} />
            )):
            (<p>loading</p>
            )}
        </TodoListContainer>    
    )
}