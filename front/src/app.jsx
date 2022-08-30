import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from './pages/main';
import HomePage from './pages/home';

function App() {
    return(        
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

export default App;