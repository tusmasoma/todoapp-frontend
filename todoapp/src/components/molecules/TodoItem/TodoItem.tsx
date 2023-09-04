import React from 'react';
import type { Task } from '../../../types/task';
import { DeleteButton } from '../../atoms/Button/DeleteButton';
import { TodoItemCard } from '../../atoms/Card/TodoItemCard';
import { TodoTitle } from '../../atoms/Typography/TodoTitle';
import { Link } from 'react-router-dom';
import { Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button } from '@mui/material';

export const TodoItem: React.FC<Task> = ({ id,title }) => {

    return (
        <TodoItemCard>
            <Link 
            to={`/todos/${id}`}
            style={{ textDecoration: 'none', color: 'inherit' }} 
            >
                <TodoTitle title={title}/>
            </Link>
            <DeleteButton/>
            <Dialog open={true}>
        <DialogTitle>確認</DialogTitle>
        <DialogContent>
          <DialogContentText>
            このタスクを削除してもよろしいですか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>
            キャンセル
          </Button>
          <Button>
            削除
          </Button>
        </DialogActions>
      </Dialog>
        </TodoItemCard>    
    )
}