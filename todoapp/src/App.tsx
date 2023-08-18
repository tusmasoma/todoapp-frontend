import React from 'react';
import type { Task } from './types/task'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TodoListPage } from './pages/TodoListPage';

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
        <Router>
            <Routes>
                <Route path="/todos" element={<TodoListPage data={data} />} />
                {/* 他のルートもここに追加 */}
            </Routes>
        </Router>
    )
}