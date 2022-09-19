import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import ReactDom, { BrowserRouter } from 'react-router-dom';

import App from './app';
import { AuthProvider } from './context/auth-context';

const app = document.getElementById('app');

const root = createRoot(app);

const theme = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        gray: '#C0C0C6',
        primary1: '#12183F',
    },
};

root.render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);

