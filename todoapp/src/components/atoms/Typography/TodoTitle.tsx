import React from 'react';
import { Typography } from '@mui/material';


export type TodoTitleProps = {
    title: string;
}

export const TodoTitle: React.FC<TodoTitleProps> = ({ title }) => {
    return (
        <Typography
        sx={
            {
                flex: 1,
                padding: '10px',
                paddingLeft: '20px',
                cursor: 'pointer',        
            }
        }
        >
            {title}
        </Typography>

    )
}