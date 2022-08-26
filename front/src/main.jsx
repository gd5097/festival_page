import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import ReactDom, { BrowserRouter } from 'react-router-dom';

import App from './app';

const app = document.getElementById('app');

const root = createRoot(app);

const theme = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        primary1: '#12183F',
    },
};

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

