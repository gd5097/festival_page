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

import AnniversaryListViewPage from './pages/anniversary-list-view';
import MiraeSquareListViewPage from './pages/mirae-square-list-view';
import HamSquarePage from './pages/ham-square';
import HamSquareListViewPage from './pages/ham-square-list-view';
import LoginPage from './pages/login';
import SignUpPage from './pages/sign-up';


import FoodInfoViewPage1 from './pages/info-pages/60st/food-info-view1';
import FoodInfoViewPage2 from './pages/info-pages/60st/food-info-view2';
import FoodInfoViewPage3 from './pages/info-pages/60st/food-info-view3';
import FoodInfoViewPage4 from './pages/info-pages/60st/food-info-view4';
import FoodInfoViewPage5 from './pages/info-pages/60st/food-info-view5';
import FoodInfoViewPage6 from './pages/info-pages/60st/food-info-view6';
import FoodInfoViewPage7 from './pages/info-pages/60st/food-info-view7';
import FoodInfoViewPage8 from './pages/info-pages/60st/food-info-view8';
import FoodInfoViewPage9 from './pages/info-pages/60st/food-info-view9';
import FoodInfoViewPage10 from './pages/info-pages/60st/food-info-view10';
import FoodInfoViewPage11 from './pages/info-pages/60st/food-info-view11';
import FoodInfoViewPage12 from './pages/info-pages/60st/food-info-view12';
import FoodInfoViewPage13 from './pages/info-pages/60st/food-info-view13';
import FoodInfoViewPage14 from './pages/info-pages/60st/food-info-view14';
import FoodInfoViewPageHam1 from './pages/info-pages/ham-square/food-info-view1';
import FoodInfoViewPageHam2 from './pages/info-pages/ham-square/food-info-view2';
import FoodInfoViewPageHam3 from './pages/info-pages/ham-square/food-info-view3';
import FoodInfoViewPageHam4 from './pages/info-pages/ham-square/food-info-view4';
import FoodInfoViewPageHam5 from './pages/info-pages/ham-square/food-info-view5';
import FoodInfoViewPageHam6 from './pages/info-pages/ham-square/food-info-view6';
import FoodInfoViewPageHam7 from './pages/info-pages/ham-square/food-info-view7';
import FoodInfoViewPageHam8 from './pages/info-pages/ham-square/food-info-view8';
import FoodInfoViewPageHam9 from './pages/info-pages/ham-square/food-info-view9';
import FoodInfoViewPageHam10 from './pages/info-pages/ham-square/food-info-view10';
import FoodInfoViewPageHam11 from './pages/info-pages/ham-square/food-info-view11';
import FoodInfoViewPageHam12 from './pages/info-pages/ham-square/food-info-view12';
import FoodInfoViewPageHam13 from './pages/info-pages/ham-square/food-info-view13';
import FoodInfoViewPageHam14 from './pages/info-pages/ham-square/food-info-view14';
import FoodInfoViewPageHam15 from './pages/info-pages/ham-square/food-info-view15';
import FoodInfoViewPageHam16 from './pages/info-pages/ham-square/food-info-view16';
import FoodInfoViewPageHam17 from './pages/info-pages/ham-square/food-info-view17';
import FoodInfoViewPageHam18 from './pages/info-pages/ham-square/food-info-view18';
import FoodInfoViewPageHam19 from './pages/info-pages/ham-square/food-info-view19';
import FoodInfoViewPageHam20 from './pages/info-pages/ham-square/food-info-view20';
import FoodInfoViewPageHam21 from './pages/info-pages/ham-square/food-info-view21';
import FoodInfoViewPageHam22 from './pages/info-pages/ham-square/food-info-view22';
import FoodInfoViewPageHam23 from './pages/info-pages/ham-square/food-info-view23';


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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/community/festival-picture-view/:postId" element={<FestivalPictureViewPage />} />
            <Route path="/community/group-view/:postId" element={<GroupViewPage />} />
            <Route path="/community/lost-article-view/:postId" element={<LostArticleViewPage />} />
            
            <Route path="/community/festival-picture-view/festival-picture-write-view" element={<FestivalPictureWriteView />} />
            <Route path="/community/festival-picture-view/group-write-view" element={<GroupWriteView />} />
            <Route path="/community/festival-picture-view/lost-article-write-view" element={<LostArticleWriteView />} />
            <Route path="/anniversary/list" element={<AnniversaryListViewPage />} />
            <Route path="/mirae-square/list" element={<MiraeSquareListViewPage />} />
            <Route path="/ham-square/list" element={<HamSquareListViewPage />} />


            {/*60주년관*/}
                <Route path="/anniversary/food-info-view/1" element={<FoodInfoViewPage1 />} />
                <Route path="/anniversary/food-info-view/2" element={<FoodInfoViewPage2 />} />
                <Route path="/anniversary/food-info-view/3" element={<FoodInfoViewPage3 />} />
                <Route path="/anniversary/food-info-view/4" element={<FoodInfoViewPage4 />} />
                <Route path="/anniversary/food-info-view/5" element={<FoodInfoViewPage5 />} />
                <Route path="/anniversary/food-info-view/6" element={<FoodInfoViewPage6 />} />
                <Route path="/anniversary/food-info-view/7" element={<FoodInfoViewPage7 />} />
                <Route path="/anniversary/food-info-view/8" element={<FoodInfoViewPage8 />} />
                <Route path="/anniversary/food-info-view/9" element={<FoodInfoViewPage9 />} />
                <Route path="/anniversary/food-info-view/10" element={<FoodInfoViewPage10 />} />
                <Route path="/anniversary/food-info-view/11" element={<FoodInfoViewPage11 />} />
                <Route path="/anniversary/food-info-view/12" element={<FoodInfoViewPage12 />} />
                <Route path="/anniversary/food-info-view/13" element={<FoodInfoViewPage13 />} />
                <Route path="/anniversary/food-info-view/14" element={<FoodInfoViewPage14 />} />
            {/*미래광장*/}

            {/*함인섭광장*/}
            <Route path="/ham-square/food-info-view/1" element={<FoodInfoViewPageHam1 />} />
            <Route path="/ham-square/food-info-view/2" element={<FoodInfoViewPageHam2 />} />
            <Route path="/ham-square/food-info-view/3" element={<FoodInfoViewPageHam3 />} />
            <Route path="/ham-square/food-info-view/4" element={<FoodInfoViewPageHam4 />} />
            <Route path="/ham-square/food-info-view/5" element={<FoodInfoViewPageHam5 />} />
            <Route path="/ham-square/food-info-view/6" element={<FoodInfoViewPageHam6 />} />
            <Route path="/ham-square/food-info-view/7" element={<FoodInfoViewPageHam7 />} />
            <Route path="/ham-square/food-info-view/8" element={<FoodInfoViewPageHam8 />} />
            <Route path="/ham-square/food-info-view/9" element={<FoodInfoViewPageHam9 />} />
            <Route path="/ham-square/food-info-view/10" element={<FoodInfoViewPageHam10 />} />
            <Route path="/ham-square/food-info-view/11" element={<FoodInfoViewPageHam11 />} />
            <Route path="/ham-square/food-info-view/12" element={<FoodInfoViewPageHam12 />} />
            <Route path="/ham-square/food-info-view/13" element={<FoodInfoViewPageHam13 />} />
            <Route path="/ham-square/food-info-view/14" element={<FoodInfoViewPageHam14 />} />
            <Route path="/ham-square/food-info-view/15" element={<FoodInfoViewPageHam15 />} />
            <Route path="/ham-square/food-info-view/16" element={<FoodInfoViewPageHam16 />} />
            <Route path="/ham-square/food-info-view/17" element={<FoodInfoViewPageHam17 />} />
            <Route path="/ham-square/food-info-view/18" element={<FoodInfoViewPageHam18 />} />
            <Route path="/ham-square/food-info-view/19" element={<FoodInfoViewPageHam19 />} />
            <Route path="/ham-square/food-info-view/20" element={<FoodInfoViewPageHam20 />} />
            <Route path="/ham-square/food-info-view/21" element={<FoodInfoViewPageHam21 />} />
            <Route path="/ham-square/food-info-view/22" element={<FoodInfoViewPageHam22 />} />
            <Route path="/ham-square/food-info-view/23" element={<FoodInfoViewPageHam23 />} />
        
        
        </Routes>
    );
}

export default App;