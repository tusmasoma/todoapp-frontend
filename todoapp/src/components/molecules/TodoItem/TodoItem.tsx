import React from 'react';
import type { Task } from '../../../types/task';
import { DeleteButton } from '../../atoms/Button/Button.styles';
import { TodoItemCard } from '../../atoms/Card/Card.styles';
import { TodoTitle } from '../../atoms/Typography/Typography.styles';

export const TodoItem: React.FC<Task> = ({ title }) => {

    return (
        <TodoItemCard>
            <TodoTitle>
                {title}
            </TodoTitle>
            <DeleteButton>
                削除
            </DeleteButton>
        </TodoItemCard>    
    )
}