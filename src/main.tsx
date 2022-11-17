import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import { DevTools, loadServer } from 'jira-dev-tool';
import Context from '@/context';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

loadServer(() =>
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Context>
        <DevTools />
        <App />
      </Context>
    </React.StrictMode>,
  ),
);
