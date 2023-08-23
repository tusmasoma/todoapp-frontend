import React from 'react';
import type { Task } from '../../../types/task';
import { DeleteButton } from '../../atoms/Button/DeleteButton';
import { TodoItemCard } from '../../atoms/Card/TodoItemCard';
import { TodoTitle } from '../../atoms/Typography/TodoTitle';
import { Link } from 'react-router-dom';

export const TodoItem: React.FC<Task> = ({ id,title }) => {

    return (
        <TodoItemCard>
            <Link 
            to={`/todos/${id}`}
            style={{ textDecoration: 'none', color: 'inherit' }} 
            >
                <TodoTitle title={title}/>
            </Link>
            <DeleteButton/>
        </TodoItemCard>    
    )
}