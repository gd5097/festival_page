import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from './pages/main';
import HomePage from './pages/home';
import MiraeSquarePage from './pages/mirae-square';
import CommunityPage from './pages/community';
import AnniversaryPage from './pages/anniversary';
import RiverOfKnuPage from './pages/river-of-knu';
import FestivalPictureViewPage from './pages/festival-picture-view';

function App() {
    return(        
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/mirae-square" element={<MiraeSquarePage />} />
            <Route path="/anniversary" element={<AnniversaryPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/river-of-knu" element={<RiverOfKnuPage />} />
            <Route path="/community/festival-picture-view/:id" element={<FestivalPictureViewPage />} />
        </Routes>
    );
}

export default App;