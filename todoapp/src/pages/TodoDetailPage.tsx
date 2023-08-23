import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Task } from "../types/task";
import { getTaskById } from "../apis/getTaskById";
import { TodoDetailContainer } from "../components/atoms/Container/TodoDetailContainer";
import { TodoDetailPaper } from "../components/atoms/Paper/TodoDetailPaper";
import { DetailHeader } from "../components/atoms/Box/DetailHeader";
import { TodoDetailTitle } from "../components/atoms/Typography/TodoDetailTitle";
import { CreatedAt } from "../components/atoms/Typography/CreatedAt";
import { TodoDetailContent } from "../components/atoms/Typography/TodoDetailContent";
import { EditButton } from "../components/atoms/Button/EditButton";

type MatchParams = {
    id: string;
}

export const TodoDetailPage:React.FC = () => {

    const { id } = useParams<MatchParams>();

    const [TodoData, setTodoData] = useState<Task | null>(null);

    const fetchData = async () => {
        try {
            if (!id) {
                console.error("ID is not provided in the URL.");
                return;
            }
            const responseData:Task = await getTaskById(id);
            setTodoData(responseData);
        } catch (error:any) {
            console.error(error);
        }
    };

    useEffect(() => {
        //dataの取得は最初のページ読み込みの時のみ
        fetchData();
    }, []);


    return (
        <TodoDetailContainer maxWidth="sm">
            {TodoData ? 
            <TodoDetailPaper>
                <DetailHeader>
                    <TodoDetailTitle title={TodoData.title}/>
                    <EditButton />
                </DetailHeader>
                <CreatedAt createdAt={TodoData.formatted_created_at}/>
                <TodoDetailContent content={TodoData.description}/>
            </TodoDetailPaper>
          :(
          <p>loading</p>
          )}
        </TodoDetailContainer>
    )
}
