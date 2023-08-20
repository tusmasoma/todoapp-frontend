
import { Container } from '@mui/material';
import { style, styled } from '@mui/system';

export const TodoListContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '80%',
    padding: '20px',
    boxShadow: '0 4px 8px #ccc',
    position: 'relative',
    top: '50%',
    transform: 'translateY(50px)',
})

export const TodoDetailContainer = styled(Container)({
    width: '80%',
    position: 'relative',
    top: '50%',
    transform: 'translateY(50px)',
})