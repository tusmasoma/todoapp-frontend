import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoListPage } from './pages/TodoListPage';
import { TodoDetailPage } from './pages/TodoDetailPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '5px 10px',
                    backgroundColor: '#ddd',
                    color: '#fff',
                    borderRadius: '0.5',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#a7a6a6',
                    },
                },
            },
        },
    },
});

export const App: React.FC = () => {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/todos" element={<TodoListPage />} />
                    <Route path="/todos/:id" element={<TodoDetailPage />} />
                    {/* 他のルートもここに追加 */}
                </Routes>
            </Router>
        </ThemeProvider>
    )
}