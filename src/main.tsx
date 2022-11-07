import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { loadDevTools } from 'jira-dev-tool';
import Context from '@/context';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

loadDevTools(() =>
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <Context>
      <App />
    </Context>,
    // </React.StrictMode>,
  ),
);
