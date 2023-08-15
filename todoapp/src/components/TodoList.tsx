
import React from 'react';
import { Card, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import type { Task } from '../types/task'

const StyledCard = styled(Card)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    border: '2px solid #ddd',
    borderRadius: 10,
    marginBottom: 20,
});

const StyledTypography = styled(Typography)({
    flex: 1,
    padding: '10px',
    paddingLeft: '20px',
    cursor: 'pointer',
});

const StyledButton = styled(Button)({
    padding: '5px 10px',
    backgroundColor: '#ddd',
    color: '#fff',
    borderRadius: 5,
    cursor: 'pointer',
    marginRight: '20px',
    '&:hover': {
        backgroundColor: '#a7a6a6',
    },
});


export const TodoList: React.FC<Task & { index: number }> = (props) => {

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

