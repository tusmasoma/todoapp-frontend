import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
import type { Task } from './types/task'
import { TodoList } from './components/TodoList'

const StyledContainer = styled(Container)({
    width: '80%',
    margin: '50px auto',
    padding: '20px',
    boxShadow: '0 4px 8px #ccc',
})

export const App: React.FC = () => {
    const data: Task[] = [
        {
            "id": "fd57699c-641e-499a-bd25-346634d6a6ce",
            "title": "backend開発",
            "description": "来週の月曜までに基本的なToDoアプリケーションの実装を終わらせる",
            "created_at": "2023-08-09T09:13:59.777401Z",
            "formatted_created_at": "2023-08-09"
        },
        {
            "id": "f771a715-285b-4bcd-b97c-f38713a5ee62",
            "title": "reactの勉強",
            "description": "金曜までに、reactの本§６まで読んで、休日に実装する",
            "created_at": "2023-08-09T09:14:23.060394Z",
            "formatted_created_at": "2023-08-09"
        }
    ]

    return (
        <StyledContainer maxWidth="sm">
            {data.map((item, index) => (
            <TodoList {...item} index={index}/>
            ))}
        </StyledContainer>
    )
}