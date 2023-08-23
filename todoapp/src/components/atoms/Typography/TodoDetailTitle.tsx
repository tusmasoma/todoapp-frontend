import React from 'react';
import { Typography } from '@mui/material';

type TodoTitleProps = {
    title: string;
}

export const TodoDetailTitle: React.FC<TodoTitleProps> = ({ title }) => {
    return (
        <Typography
            sx={
                {
                    fontSize: '2rem',
                    cursor: 'pointer'
                }
            }
        >
            {title}
        </Typography>
    )
}