import React from "react"
import { useState, useEffect } from "react"
import { TodoDetailTitle,CreatedAt,TodoDetailContent } from "../components/atoms/Typography/Typography.styles";
import { TodoDetailPaper } from "../components/atoms/Paper/Paper.styles";
import { TodoDetailContainer } from "../components/atoms/Container/Container.styles";
import { EditButton } from "../components/atoms/Button/Button.styles";
import { DetailHeader } from "../components/atoms/Box/Box.styles";
import { useParams } from 'react-router-dom';
import { getTaskById } from "../apis/getTaskById";
import { Task,MatchParams } from "../types/types";

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
