
import { Button } from '@mui/material';
import { styled } from '@mui/system';


export const StyledButton = styled(Button)({
    padding: '5px 10px',
    backgroundColor: '#ddd',
    color: '#fff',
    borderRadius: 5,
    cursor: 'pointer',
    marginRight: '20px',
    '&:hover': {
        backgroundColor: '#a7a6a6',
    },
});
