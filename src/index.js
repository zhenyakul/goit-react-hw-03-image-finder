import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PixabayApi } from 'components/api/pixabayApi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PixabayApi></PixabayApi>
  </React.StrictMode>
);
