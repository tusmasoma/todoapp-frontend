import React from 'react';
import { Typography } from '@mui/material';

export type TodoContentProps = {
    content: string
}

export const TodoDetailContent: React.FC<TodoContentProps> = ({ content }) => {
    return (
        <Typography
        sx={
            {
                whiteSpace: "pre-line",
            }
        }
        >
            {content}
        </Typography>    
    )
}