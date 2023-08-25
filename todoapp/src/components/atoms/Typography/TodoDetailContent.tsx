import React from 'react';
import { Typography } from '@mui/material';

export type Props = {
    content: string
}

export const TodoDetailContent: React.FC<Props> = ({ content }) => {
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