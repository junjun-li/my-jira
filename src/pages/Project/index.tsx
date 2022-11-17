import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Epic from '@/pages/Epic';
import KanBan from '@/pages/KanBan';

const Project = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        {/*projects/:projectId/kanban*/}
        <Route path="/kanban" element={<Epic />} />
        {/*projects/:projectId/epic*/}
        <Route path="/epic" element={<KanBan />} />
        {/*<Route path="*" element={<Navigate to={window.location.pathname + '/kanban'} />} />*/}
      </Routes>
    </div>
  );
};

export default Project;
