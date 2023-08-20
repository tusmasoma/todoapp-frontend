
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TodoListPage } from './pages/TodoListPage';
import { TodoDetailPage } from './pages/TodoDetailPage';

export const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/todos" element={<TodoListPage />} />
                <Route path="/todos/:id" element={<TodoDetailPage />} />
                {/* 他のルートもここに追加 */}
            </Routes>
        </Router>
    )
}