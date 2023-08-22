
import  React from 'react'
import { Button } from '@mui/material'

export const CancelUpdateButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <Button
            onClick={onClick}
            sx={
                {
                    padding: '5px 10px',
                    backgroundColor: '#ddd',
                    color: '#fff',
                    borderRadius: 0.5,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'red',
                    },
                }
            }
        >
            破棄
        </Button>
    )
}