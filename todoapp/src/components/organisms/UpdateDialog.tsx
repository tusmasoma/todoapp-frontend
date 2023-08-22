import React, { useState } from 'react';
import { Task } from '../../types/task';
import { updateTask } from '../../apis/updateTask';
import { CancelUpdateButton } from '../atoms/Button/CancelUpdateButton';
import { ConfirmUpdateButton } from '../atoms/Button/ConfirmUpdateButton';
import { TitleEditField } from '../atoms/TextField/TitleEditField';
import { DescriptionEditField } from '../atoms/TextField/DescriptionEditField';
import { UpdateDialogTitle } from '../atoms/DialogTitle/UpdateDialogTitle';
import { UpdateDialogContent } from '../atoms/DialogContent/UpdateDialogContent';
import { UpdateDialogActions } from '../atoms/DialogActions/UpdateDialogActions';
import { UpdateDialog } from '../atoms/Dialog/UpdateDialog';

type UpdateTaskDialogProps = {
    open: boolean;
    onClose: () => void;
    setUpdateTrigger: (bool: boolean) => void 
}

export const UpdateTaskDialog: React.FC<Task & UpdateTaskDialogProps> = ({ id, title, description, open, onClose, setUpdateTrigger }) => {

    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleUpdate = () => {
        updateTask(id, {
            title: editedTitle,
            description: editedDescription,
        });
        onClose();
        setUpdateTrigger(true);
    }
    
    return (
        <UpdateDialog open={open} onClose={onClose}>
            <UpdateDialogContent>
                <UpdateDialogTitle title='タスクを編集' />
                <TitleEditField value={editedTitle} onChange={setEditedTitle} />
                <DescriptionEditField value={editedDescription} onChange={setEditedDescription} />
            </UpdateDialogContent>
            <UpdateDialogActions>
                <CancelUpdateButton onClick={onClose} />
                <ConfirmUpdateButton onClick={handleUpdate} />
            </UpdateDialogActions>
        </UpdateDialog>
    )
}
