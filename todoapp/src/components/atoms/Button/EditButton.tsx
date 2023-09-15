import React from 'react';
import { Button } from '@mui/material';

export const EditButton: React.FC<{openModal: () => void;}> = ({ openModal }) => {
    return (
        <Button onClick={openModal}>
            編集
        </Button>    
    )
}