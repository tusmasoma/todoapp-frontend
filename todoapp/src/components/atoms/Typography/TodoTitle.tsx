import React from 'react';
import { Typography } from '@mui/material';


export type Props = {
    title: string;
}

export const TodoTitle: React.FC<Props> = ({ title }) => {
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