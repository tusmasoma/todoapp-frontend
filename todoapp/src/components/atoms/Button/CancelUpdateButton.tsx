
import  React from 'react'
import { Button } from '@mui/material'

export const CancelUpdateButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            sx={{ '&:hover': { backgroundColor: 'red' } }}
        >
            破棄
        </Button>
    )
}