import React from 'react';
import type { Task } from '../../../types/task';
import { DeleteButton } from '../../atoms/Button/DeleteButton';
import { TodoItemCard } from '../../atoms/Card/TodoItemCard';
import { TodoTitle } from '../../atoms/Typography/TodoTitle';

export const TodoItem: React.FC<Task> = ({ title }) => {

    return (
        <TodoItemCard>
            <TodoTitle title={title}/>
            <DeleteButton/>
        </TodoItemCard>    
    )
}