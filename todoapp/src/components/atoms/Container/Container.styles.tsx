
import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const TodoListContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '80%',
    padding: '20px',
    boxShadow: '0 4px 8px #ccc',
    position: 'relative',
    top: '50%',
    transform: 'translateY(30%)',
})