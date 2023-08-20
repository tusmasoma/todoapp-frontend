import React from 'react';
import { Typography } from '@mui/material';
import { TodoTitleProps,TodoCreateAtProps,TodoContentProps } from '../../../types/types';

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

export const CreatedAt: React.FC<TodoCreateAtProps> = ({ createdAt }) => {
    return (
        <Typography
            sx={
                {
                    color: '#a7a6a6'
                }
            }
            >
                作成日時: {createdAt}
        </Typography>
    )
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