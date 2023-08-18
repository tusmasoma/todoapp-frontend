import React from 'react';
import type { Task } from '../../../types/task';
import { StyledButton } from '../../atoms/Button/Button.styles';
import { StyledCard } from '../../atoms/Card/Card.styles';
import { StyledTypography} from '../../atoms/Typography/Typography.styles';

export const TodoItem: React.FC<Task & { index: number }> = (props) => {

    const { id,title } = props;

    return (
        <StyledCard key={id}>
            <StyledTypography>
                {title}
            </StyledTypography>
            <StyledButton>
                削除
            </StyledButton>
        </StyledCard>    
    )
}