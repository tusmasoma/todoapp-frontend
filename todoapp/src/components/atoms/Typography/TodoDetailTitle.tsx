import React from 'react';
import { Typography } from '@mui/material';

type Props = {
    title: string;
}

export const TodoDetailTitle: React.FC<Props> = ({ title }) => {
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