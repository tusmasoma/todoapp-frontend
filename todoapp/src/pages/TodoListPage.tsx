import React from 'react';
import { useState, useEffect } from "react"
import type { Task } from '../types/task';
import { TodoListContainer } from "../components/atoms/Container/Container.styles"
import { TodoItem } from "../components/molecules/TodoItem/TodoItem"
import { getTasks } from '../apis/getTasks';

export const TodoListPage:React.FC = () => {
    const [TodoList, setTodoList] = useState<Task[]>([]);

    const fetchData = async () => {
        try {
            const responseData:Task[] = await getTasks();
            setTodoList(responseData);
        } catch (error:any) {
            console.error(error);
        }
    };

    useEffect(() => {
        //dataの取得は最初のページ読み込みの時のみ
        fetchData();
    }, []);

    return (
        <TodoListContainer maxWidth="sm">
            {TodoList ? TodoList.map( item => (
            <TodoItem key={item.id} {...item} />
            )):
            (<p>loading</p>
            )}
        </TodoListContainer>    
    )
}