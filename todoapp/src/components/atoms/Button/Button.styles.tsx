
import { Button } from '@mui/material';
import { styled } from '@mui/system';


export const DeleteButton = styled(Button)({
    padding: '5px 10px',
    backgroundColor: '#ddd',
    color: '#fff',
    borderRadius: 5,
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#a7a6a6',
    },
});
