import React from 'react';
import { useState, useEffect } from "react"
import type { Task } from '../types/types';
import { TodoListContainer } from "../components/atoms/Container/Container.styles"
import { TodoItem } from "../components/molecules/TodoItem/TodoItem"
import { getTask } from '../apis/getTask';
import { SearchForm } from '../components/molecules/SearchForm/SearchForm';

export const TodoListPage:React.FC = () => {
    const [TodoList, setTodoList] = useState<Task[] | null>(null);

    const fetchData = async () => {
        try {
            const responseData:Task[] = await getTask();
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
            <SearchForm />
            {TodoList ? 
            TodoList.map( item => (<TodoItem key={item.id} {...item} />))
            :
            (<p>loading</p>
            )}
        </TodoListContainer>    
        )
    }
