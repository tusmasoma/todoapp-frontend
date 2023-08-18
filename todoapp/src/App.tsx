
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TodoListPage } from './pages/TodoListPage';
import { getTask } from './apis/getTask';

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