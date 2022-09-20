import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import DocImage from '../images/document.png';
import homeIcon from '../images/home.png';
import NavigationButton from '../components/yeonjeogji/navigation-button';

import { useNavigate } from 'react-router-dom';

import AllPage from '../components/yeonjeogji/all/all';
import ClubPage from '../components/yeonjeogji/club/club';
import StarPage from '../components/yeonjeogji/star/star';

const Navigator = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;

    margin: 24px 20px;

    column-gap: 10px;

    display: flex;
    justify-content: center;
`

export default function CommunityPage() {
    const [currentCommunity, setCurrentCommunity] = useState('all');
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
                title={'대운동장'}
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
                    text={'전체'}
                    abled={currentCommunity === 'all' ? true : false}
                    onClick={() => {
                        setCurrentCommunity('all');
                    }}    
                />
                <NavigationButton
                    text={'동아리'}
                    abled={currentCommunity === 'group' ? true : false}
                    onClick={() => {
                        setCurrentCommunity('group');
                    }}
                />
                <NavigationButton
                    text={'연예인'}
                    abled={currentCommunity === 'star' ? true : false}
                    onClick={() => {
                        setCurrentCommunity('star');
                    }}    
                />

            </Navigator>
            {currentCommunity === 'all' ? 
            <AllPage /> : null }
            {currentCommunity === 'group' ? 
            <ClubPage /> : null }
            {currentCommunity === 'star' ? 
            <StarPage /> : null }
        </DefalutLayout>
    );
}