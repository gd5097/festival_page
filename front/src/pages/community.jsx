import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import DocImage from '../images/document.png';
import homeIcon from '../images/home.png';
import NavigationButton from '../components/community/navigation-button';
import FestivalPicture from '../components/community/festival-picture';
import Group from '../components/community/group';
import LostArticle from '../components/community/lost-article';
import Suggestion from '../components/community/suggestion';

const Navigator = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;

    background-color: tomato;
    margin: 24px 20px;
`

export default function CommunityPage() {
    const [currentCommunity, setCurrentCommunity] = useState('festival-picture');

    return(
        <DefalutLayout>
            <Header 
                title={'게시판'}
                leftIcon={
                    {
                        iconImage: homeIcon,
                        onClick: () => {
                            console.log("Home Icon Clicked");
                        }
                    }
                }
                rightIcons={[
                    {
                        iconImage: DocImage,
                        onClick: () => {
                            console.log("Doc Icon Clicked");
                        }
                    },
                    
                ]}
            />
            <Navigator >
                <NavigationButton
                    text={'축제사진'}
                    onClick={() => {
                        setCurrentCommunity('festival-picture');
                    }}    
                />
                <NavigationButton
                    text={'번개모임'}
                    onClick={() => {
                        setCurrentCommunity('group');
                    }}
                />
                <NavigationButton
                    text={'분실물'}
                    onClick={() => {
                        setCurrentCommunity('lost-article');
                    }}    
                />
                <NavigationButton
                    text={'건의사항'}
                    onClick={() => {
                        setCurrentCommunity('suggestion');
                    }}    
                />
            </Navigator>
            {currentCommunity === 'festival-picture' ? 
            <FestivalPicture /> : null }
            {currentCommunity === 'group' ? 
            <Group /> : null }
            {currentCommunity === 'lost-article' ? 
            <LostArticle /> : null }
            {currentCommunity === 'suggestion' ? 
            <Suggestion /> : null }
        </DefalutLayout>
    );
}