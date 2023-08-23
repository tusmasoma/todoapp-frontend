import React from 'react';
import { Button } from '@mui/material';

export const EditButton: React.FC<{openModal: () => void;}> = ({ openModal }) => {
    return (
        <Button
        sx={
            {
                padding: '5px 10px',
                backgroundColor: '#ddd',
                color: '#fff',
                borderRadius: 2.5,
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#a7a6a6',
                },
            }
        }
        onClick={openModal}
        >
            編集
        </Button>    
    )
}