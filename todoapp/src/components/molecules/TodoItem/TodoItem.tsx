import React from 'react';
import type { Task } from '../../../types/types';
import { DeleteButton } from '../../atoms/Button/Button.styles';
import { TodoItemCard } from '../../atoms/Card/Card.styles';
import { TodoTitle } from '../../atoms/Typography/Typography.styles';

export const TodoItem: React.FC<Task & { onClick: () => void; }> = ({ title,onClick }) => {

    return (
        <TodoItemCard>
            <TodoTitle title={title}/>
            <DeleteButton/>
        </TodoItemCard>    
    )
}