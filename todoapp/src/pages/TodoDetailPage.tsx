import React from "react";
import { useState, useEffect } from "react";
import { Typography, Stack, Container, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Task } from "@types/task";
import { getTaskBy } from "src/apis/getTaskById";
import { EditButton } from "src/components/atoms/Button/EditButton";
import { TaskUpdateDialog } from "src/components/organisms/UpdateTaskDialog";
import { useModal } from "src/hooks/useModal";

type Params = {
    id: string;
}

export const TodoDetailPage: React.FC = () => {

    const { id } = useParams<Params>();

    const [todoData, setTodoData] = useState<Task | undefined>();

    const fetchData = async () => {
        try {
            if (!id) {
                console.error("ID is not provided in the URL.");
                return;
            }
            const responseData: Task = await getTaskBy(id);
            setTodoData(responseData);
        } catch (error: any) {
            console.error(error);
        }
    };

    useEffect(() => {
        //dataの取得は最初のページ読み込みの時のみ
        fetchData();
    }, []);

    const { isOpen, open, close } = useModal();

    return (
        <Container
            maxWidth="sm"
            sx={{
                width: '80%',
                position: 'relative',
                top: '50%',
                transform: 'translateY(50px)',
            }}>
            {todoData ?
                <>
                    <Paper sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        padding: '20px',
                        minHeight: '400px',
                    }}>
                        <Stack sx={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '2rem', cursor: 'pointer' }}>{todoData.title}</Typography>
                            <EditButton openModal={open} />
                        </Stack>
                        <Typography sx={{ color: '#a7a6a6' }}>作成日時:{todoData.formatted_created_at}</Typography>
                        <Typography sx={{ whiteSpace: "pre-line" }}>{todoData.description}</Typography>
                    </Paper>
                    <TaskUpdateDialog task={todoData} isOpen={isOpen} onClose={close} onTaskUpdated={fetchData} />
                </>
                : (
                    <p>loading</p>
                )}
        </Container>
    )
}
