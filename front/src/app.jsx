import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from './pages/main';
import HomePage from './pages/home';
import MiraeSquarePage from './pages/mirae-square';
import CommunityPage from './pages/community';
import AnniversaryPage from './pages/anniversary';
import FestivalPictureViewPage from './pages/festival-picture-view';
import YeonjeogjiPage from './pages/yeonjeogji';
import GroupViewPage from './pages/group-view';
import FestivalPictureWriteView from './pages/community-write-forms/festival-picture-write-view';
import GroupWriteView from './pages/community-write-forms/group-write-view';

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
            <Route path="/community/group-view/:postId" element={<GroupViewPage />} />
            <Route path="/community/festival-picture-view/festival-picture-write-view" element={<FestivalPictureWriteView />} />
            <Route path="/community/festival-picture-view/group-write-view" element={<GroupWriteView />} />
        </Routes>
    );
}

export default App;