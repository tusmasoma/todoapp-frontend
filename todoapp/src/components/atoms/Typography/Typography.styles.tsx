import React from 'react';
import { Typography } from '@mui/material';
import { TodoTitleProps } from '../../../types/types';

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