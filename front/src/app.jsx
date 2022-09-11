import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from './pages/main';
import HomePage from './pages/home';
import MiraeSquarePage from './pages/mirae-square';
import CommunityPage from './pages/community';
import AnniversaryPage from './pages/anniversary';
import FestivalPictureViewPage from './pages/festival-picture-view';
import YeonjeogjiPage from './pages/yeonjeogji';

function App() {
    return(        
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/mirae-square" element={<MiraeSquarePage />} />
            <Route path="/anniversary" element={<AnniversaryPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/yeonjeogji" element={<YeonjeogjiPage />} />
            <Route path="/community/festival-picture-view/:postId" element={<FestivalPictureViewPage />} />
        </Routes>
    );
}

export default App;