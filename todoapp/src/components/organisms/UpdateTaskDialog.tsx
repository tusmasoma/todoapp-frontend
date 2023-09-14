import React, { useState } from 'react';
import { Task } from '@types/task';
import { updateTask } from 'src/apis/updateTask';
import { CancelUpdateButton } from 'src/components/atoms/Button/CancelUpdateButton'; 
import { ConfirmUpdateButton } from 'src/components/atoms/Button/ConfirmUpdateButton';
import { TitleEditField } from 'src/components/atoms/TextField/TitleEditField';
import { DescriptionEditField } from 'src/components/atoms/TextField/DescriptionEditField';
import { DialogTitle } from 'src/components/atoms/DialogTitle/DialogTitle';
import { DialogContent } from 'src/components/atoms/DialogContent/DialogContent';
import { DialogActions } from 'src/components/atoms/DialogActions/DialogActions';
import { Dialog } from 'src/components/atoms/Dialog/Dialog'  

type Props = {
    task: Task; // Taskの全ての属性を持つtaskオブジェクト
    isOpen: boolean;
    onClose: () => void;
    onTaskUpdated: () => void; // タスクが更新されたときのコールバック
}

export const TaskUpdateDialog: React.FC<Props> = ({ task, isOpen, onClose, onTaskUpdated }) => {

    const { id, initialTitle, initialDescription } = task;

    const [title, setTitle] = useState<string>(initialTitle);
    const [description, setDescription] = useState<string>(initialDescription);

    const update = () => {
        updateTask(id, {
            title: title,
            description: description,
        })
        .then(() => {
            onClose();
            onTaskUpdated();
        })
        .catch( err => {
            console.error("Failed to update task:", err);
            // 必要に応じて、ユーザーへのエラーメッセージの表示や、エラー時の処理を追加する
        })
    }

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogContent>
                <DialogTitle title='タスクを編集' />
                <TitleEditField value={title} onChange={setTitle} />
                <DescriptionEditField value={description} onChange={setDescription} />
            </DialogContent>
            <DialogActions>
                <CancelUpdateButton onClick={onClose} />
                <ConfirmUpdateButton onClick={update} disabled={!title.trim() || !description.trim()}/>
            </DialogActions>
        </Dialog>
    )
}
