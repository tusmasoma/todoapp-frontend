
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
                backgroundColor: disabled ? '#aaa' : '#ddd',
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