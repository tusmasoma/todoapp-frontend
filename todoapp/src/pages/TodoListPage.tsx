import React from 'react';
import type { Task } from '../types/task';
import { StyledContainer } from "../components/atoms/Container/Container.styles"
import { TodoItem } from "../components/molecules/TodoItem/TodoItem"

type TodoListPageProps = {
    data: Task[];
};

export const TodoListPage:React.FC<TodoListPageProps> = (props) => {
    const { data } = props
    return (
        <StyledContainer maxWidth="sm">
            {data.map((item, index) => (
            <TodoItem {...item} index={index}/>
            ))}
        </StyledContainer>    
    )
}