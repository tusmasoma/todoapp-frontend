
import  React from 'react'
import { Button } from '@mui/material'

export const ConfirmUpdateButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
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
                        backgroundColor: 'green',
                    },                       
                }
            }
            >
                更新
        </Button>
    )
}