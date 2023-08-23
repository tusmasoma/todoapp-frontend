import React from 'react';
import { Typography } from '@mui/material';

type TodoCreateAtProps = {
    createdAt: string
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
