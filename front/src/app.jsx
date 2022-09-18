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
import LostArticleWriteView from './pages/community-write-forms/lost-article-write-view';
import LostArticleViewPage from './pages/lost-article-view';
import FoodInfoViewPage from './pages/food-info-view';
import AnniversaryListViewPage from './pages/anniversary-list-view';
import MiraeSquareListViewPage from './pages/mirae-square-list-view';
import HamSquarePage from './pages/ham-square';
import HamSquareListViewPage from './pages/ham-square-list-view';

function App() {
    return(        
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/mirae-square" element={<MiraeSquarePage />} />
            <Route path="/anniversary" element={<AnniversaryPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/yeonjeogji" element={<YeonjeogjiPage />} />
            <Route path="/ham-square" element={<HamSquarePage />} />
            <Route path="/community/festival-picture-view/:postId" element={<FestivalPictureViewPage />} />
            <Route path="/community/group-view/:postId" element={<GroupViewPage />} />
            <Route path="/community/lost-article-view/:postId" element={<LostArticleViewPage />} />
            <Route path="/anniversary/food-info-view/:postId" element={<FoodInfoViewPage />} />
            <Route path="/community/festival-picture-view/festival-picture-write-view" element={<FestivalPictureWriteView />} />
            <Route path="/community/festival-picture-view/group-write-view" element={<GroupWriteView />} />
            <Route path="/community/festival-picture-view/lost-article-write-view" element={<LostArticleWriteView />} />
            <Route path="/anniversary/list" element={<AnniversaryListViewPage />} />
            <Route path="/mirae-square/list" element={<MiraeSquareListViewPage />} />
            <Route path="/ham-square/list" element={<HamSquareListViewPage />} />
        </Routes>
    );
}

export default App;