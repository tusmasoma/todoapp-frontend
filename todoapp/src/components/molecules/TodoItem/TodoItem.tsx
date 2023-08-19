import React from 'react';
import type { Task } from '../../../types/task';
import { StyledButton } from '../../atoms/Button/Button.styles';
import { TodoItemCard } from '../../atoms/Card/Card.styles';
import { StyledTypography} from '../../atoms/Typography/Typography.styles';

export const TodoItem: React.FC<Task & { index: number }> = ({ title }) => {

    return (
        <TodoItemCard>
            <StyledTypography>
                {title}
            </StyledTypography>
            <StyledButton>
                削除
            </StyledButton>
        </TodoItemCard>    
    )
}