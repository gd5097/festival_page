import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import DocImage from '../images/document.png';
import homeIcon from '../images/home.png';
import NavigationButton from '../components/community/navigation-button';
import FestivalPicture from '../components/community/festival-picture-folder/festival-picture';
import Group from '../components/community/group-folder/group';
import LostArticle from '../components/community/lost-article-folder/lost-article';
import Suggestion from '../components/community/suggestion';
import { useNavigate } from 'react-router-dom';

const Navigator = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;

    background-color: transparent;
    margin: 24px 20px;
`

export default function CommunityPage() {
    const [currentCommunity, setCurrentCommunity] = useState('festival-picture');
    const navigate = useNavigate();

    return(
        <DefalutLayout>
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
            <Header 
                title={'게시판'}
                leftIcon={
                    {
                        iconImage: homeIcon,
                        onClick: () => {
                            navigate(`/`);
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
                    color={currentCommunity === 'festival-picture' ? 'white' : 'rgba(255,255,255, 0.6)'}
                    onClick={() => {
                        setCurrentCommunity('festival-picture');
                    }}    
                />
                <NavigationButton
                    text={'번개모임'}
                    color={currentCommunity === 'group' ? 'white' : 'rgba(255,255,255, 0.6)'}
                    onClick={() => {
                        setCurrentCommunity('group');
                    }}
                />
                <NavigationButton
                    text={'분실물'}
                    color={currentCommunity === 'lost-article' ? 'white' : 'rgba(255,255,255, 0.6)'}
                    onClick={() => {
                        setCurrentCommunity('lost-article');
                    }}    
                />
                
            </Navigator>

            {currentCommunity === 'festival-picture' ? 
            <FestivalPicture /> : null }
            {currentCommunity === 'group' ? 
            <Group /> : null }
            {currentCommunity === 'lost-article' ? 
            <LostArticle /> : null }
            
        </DefalutLayout>
    );
}