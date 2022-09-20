import React, { useState } from 'react';
import { css, useTheme } from '@emotion/react';


import image1 from '../../images/ham1-1.jpg';
import image2 from '../../images/ham2-1.jpg';
import image3 from '../../images/ham3-1.jpg';
import image4 from '../../images/ham4-1.jpg';
import image5 from '../../images/ham5-1.jpg';
import image6 from '../../images/ham6-1.jpg';
import image7 from '../../images/ham7-1.jpg';
import image8 from '../../images/ham8-1.jpg';
import image9 from '../../images/ham9-1.jpg';
import image10 from '../../images/ham10-1.jpg';
import image11 from '../../images/ham11-1.jpg';
import image12 from '../../images/ham12-1.jpg';
import image13 from '../../images/ham13-1.jpg';
import image14 from '../../images/ham14-1.jpg';
import image15 from '../../images/ham15-1.jpg';
import image16 from '../../images/ham16-1.jpg';
import image17 from '../../images/ham17-1.jpg';
import image18 from '../../images/ham18-1.jpg';
import image19 from '../../images/ham19-1.jpg';
import image20 from '../../images/ham20-1.jpg';
import image21 from '../../images/ham21-1.jpg';
import image22 from '../../images/ham22-1.jpg';
import image23 from '../../images/ham23-1.jpg';

import DefaultModalMap from '../default-modal-map';
import modalImage from '../../images/modal_map_60st.png';
import FoodInfoBox from '../anniversary/food-info-box';


export default function FoodListHam(){
    const theme = useTheme();
    const [dialogOpen, setDialogOpen] = useState(false);
    const showDialog = () => {
        setDialogOpen(true);
    };

    const list = [
        {
            id: 1,
            image: image1,
            title: '마약 닭꼬치',
            category: '닭꼬치',
            menu: '소금구이, 데리야끼, 핵불닭...',
        },
        {
            id: 2,
            title: 'OH ㅋ',
            image: image2,
            category: '음료',
            menu: '오레오쉐이크, 레모네이드, 크로플',
        },
        {
            id: 3,
            title: '떡삼이 나를 부르네',
            image: image3,
            category: '꼬치',
            menu: '떡삼, 음료, 콤보(떡삼2+음료1)',
        },
        {
            id: 4,
            title: '세상의 모든 꽃이',
            image: image4,
            category: '꼬치',
            menu: '닭꽃이, 소떡소떡, 소목살꽃이...',
        },
        {
            id: 5,
            title: '봄내사진관.',
            image: image5,
            category: '사진',
            menu: '보정사진, 사진인화',
        },
        {
            id: 6,
            title: '강타투',
            image: image6,
            category: '타투',
            menu: '타투프린팅, 3D 타투스티커 ...',
        },
        {
            id: 7,
            title: '강낭콩딱지',
            image: image7,
            category: '꾸미기용품',
            menu: '마우스패드, 그립톡, 키링',
        },
        {
            id: 8,
            title: '두리네 비닐 목테일',
            image: image8,
            category: '음료',
            menu: '블루 먼데이, 선샤인 블라섬 ...',
        },
        {
            id: 9,
            title: '나의 엔틱 악세서리',
            image: image9,
            category: '악세서리',
            menu: '레터링 영문학 목걸이, 오필리아 키링 ...',
        },
        {
            id: 10,
            title: 'SBBC',
            image: image11,
            category: '의류/굿즈',
            menu: 'SBBC T-shirt, SBBC Pants',
        },
        {
            id: 11,
            title: '검동 과일청 에이드',
            image: image11,
            category: '음료',
            menu: '청포도에이드, 딸기에이드 ...',
        },
        {
            id: 12,
            title: '두리네 문방구',
            image: image12,
            category: '잡화',
            menu: '스티커, 엽서, 떡메모지',
        },
        {
            id: 13,
            title: '아벨리',
            image: image13,
            category: '향수',
            menu: '향수 만들기 체험',
        },
        {
            id: 14,
            title: '소랑소랑',
            image: image14,
            category: '의류',
            menu: '',
        },
        {
            id: 15,
            title: '꽃갈피',
            image: image15,
            category: '사진',
            menu: '프로필사진set, 종이액자 ...',
        },
        {
            id: 16,
            title: 'Vincero',
            image: image16,
            category: '음료',
            menu: 'Berry Burlesque, Nacho',
        },
        {
            id: 17,
            title: '+82 alpharounge',
            image: image17,
            category: '의류',
            menu: '',
        },
        {
            id: 18,
            title: 'NH육튜브',
            image: image18,
            category: '치킨',
            menu: 'UFO치킨, 야광봉',
        },
        {
            id: 19,
            title: 'Twenty Eight Friet',
            image: image19,
            category: '감자튀김',
            menu: '델리갈릭, 와사비마요, 허니갈릭...',
        },
        {
            id: 20,
            title: 'UNCLE JACK',
            image: image20,
            category: '불초밥',
            menu: '직화 소고기 불초밥(8p)',
        },
        {
            id: 21,
            title: '타코야끼',
            image: image21,
            category: '타코야끼',
            menu: '타코야끼 순한맛 / 매운맛',
        },
        {
            id: 22,
            title: '크레아키친',
            image: image22,
            category: '음료',
            menu: '아메리카노, 카페라뗴, 레몬에이드...',
        },
        {
            id: 23,
            title: '닭강정 맛집',
            image: image23,
            category: '닭강정',
            menu: '닭강정 둘이서 / 셋이서 / 온가족',
        },
    ]

    return(
        <div 
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: column;

                row-gap: 8px;

                margin: 0px 20px;
            `}
        >
            {dialogOpen &&
                <div
                    // blur용 div
                    css={css`
                        position: fixed;

                        top: 0px;
                        left: 0px;

                        width: 100vw;
                        height: 100vh;

                        backdrop-filter: blur(20px);
                    `}
                >

                </div>
            }
            {dialogOpen && 
                <DefaultModalMap
                    setDialogOpen={setDialogOpen}
                    infoText={'게시판 이용시 로그인이 필요합니다.'}
                    image={modalImage}
                />
            }
            {list.map((item) => (
                <FoodInfoBox 
                    key={`food-info-${item.id}`}
                    page={'ham-square'}
                    data={item}
                />
            ))}
        </div>
    );
}