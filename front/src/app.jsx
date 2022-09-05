import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from './pages/main';
import HomePage from './pages/home';
import MiraeSquarePage from './pages/mirae-square';
import TempPage from './pages/temp';
import CommunityPage from './pages/community';

function App() {
    return(        
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/mirae-square" element={<MiraeSquarePage />} />
            <Route path="/temp" element={<TempPage />} />
            <Route path="/community" element={<CommunityPage />} />
        </Routes>
    );
}

export default App;