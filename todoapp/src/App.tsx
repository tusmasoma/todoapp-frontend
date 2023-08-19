import React from 'react';
import type { Task } from './types/task'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TodoListPage } from './pages/TodoListPage';

export const App: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/todos" element={<TodoListPage />} />
                {/* 他のルートもここに追加 */}
            </Routes>
        </Router>
    )
}