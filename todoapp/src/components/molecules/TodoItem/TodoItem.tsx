import React from 'react';
import type { Task } from '../../../types/types';
import { DeleteButton } from '../../atoms/Button/Button.styles';
import { TodoItemCard } from '../../atoms/Card/Card.styles';
import { TodoTitle } from '../../atoms/Typography/Typography.styles';
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