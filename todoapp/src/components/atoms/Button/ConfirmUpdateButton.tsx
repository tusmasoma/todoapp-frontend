
import  React from 'react'
import { Button } from '@mui/material'

type Props = {
    onClick: () => void;
    disabled: boolean;
};

export const ConfirmUpdateButton: React.FC<Props> = ({ onClick,disabled }) => {
    return (
        <Button
            onClick={disabled ? undefined : onClick}
            sx={{
                padding: '5px 10px',
                backgroundColor: disabled ? '#aaa' : '#ddd',
                color: '#fff',
                borderRadius: 0.5,
                cursor: disabled ? 'not-allowed' : 'pointer',
                '&:hover': {
                    backgroundColor: disabled ? '#aaa' : 'green',
                },                       
            }}
            >
                更新
        </Button>
    )
}