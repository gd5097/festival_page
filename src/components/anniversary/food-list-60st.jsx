import React, { useState } from 'react';
import { css, useTheme } from '@emotion/react';
import FoodInfoBox from './food-info-box';

import image1 from '../../images/60st1-1.jpg';
import image2 from '../../images/60st2-1.jpg';
import image3 from '../../images/60st3-1.jpg';
import image4 from '../../images/60st4-1.jpg';
import image5 from '../../images/60st5-1.jpg';
import image6 from '../../images/60st6-1.jpg';
import image7 from '../../images/60st7-1.jpg';
import image8 from '../../images/60st8-1.jpg';
import image9 from '../../images/60st9-1.jpg';
import image10 from '../../images/60st10-1.jpg';
import image11 from '../../images/60st11-1.jpg';
import image12 from '../../images/60st12-1.jpg';
import image13 from '../../images/60st13-1.jpg';
import image14 from '../../images/60st14-1.jpg';




export default function FoodList60st(){
    const theme = useTheme();
    

    const list = [
        {
            id: 1,
            image: image1,
            title: 'Luxury Bear',
            category: '육류',
            menu: '싱글스테이크, 더블스테이크',
        },
        {
            id: 2,
            title: 'Hungry Bear',
            image: image2,
            category: '피자',
            menu: '페페빡빡피자, 치즈뿜뿜피자, 매콤할라피자',
        },
        {
            id: 3,
            title: '미미즈쿠',
            image: image3,
            category: '타코야끼',
            menu: '타코야끼 오리지널 / 매운맛 / 갈릭치즈',
        },
        {
            id: 4,
            title: '박스터그릴',
            image: image4,
            category: '핫도그/소세지',
            menu: '소시지, 오리지널 / 스파이시 핫도그',
        },
        {
            id: 5,
            title: 'on street.',
            image: image5,
            category: '닭강정',
            menu: '닭강정 후라이드, 닭강정 양념',
        },
        {
            id: 6,
            title: '밤차',
            image: image6,
            category: '초밥',
            menu: '소고기 불초밥, 새우 불초밥',
        },
        {
            id: 7,
            title: '그릴마스터',
            image: image7,
            category: '야채곱창',
            menu: '야채곱창 (2인분)',
        },
        {
            id: 8,
            title: '아뿔싸',
            image: image8,
            category: '닭꼬치',
            menu: '롱~ 닭꼬치 48cm',
        },
        {
            id: 9,
            title: '만두BOX',
            image: image9,
            category: '만두',
            menu: '환장할만두',
        },
        {
            id: 10,
            title: '엄지척푸드트럭',
            image: image10,
            category: '전',
            menu: '해물파전, 부추전, 김치전',
        },
        {
            id: 11,
            title: 'Shrimp King',
            image: image11,
            category: '새우구이',
            menu: '버터새우구이, 하와이안쉬림프',
        },
        {
            id: 12,
            title: 'HANK street food',
            image: image12,
            category: '기타',
            menu: '제육볶음, 마녀핫도그',
        },
        {
            id: 13,
            title: '꺼야꺼야',
            image: image13,
            category: '분식',
            menu: '제육 / 새우 / 치즈 떡볶이, 떡순튀 범벅 ...',
        },
        {
            id: 14,
            title: '033: FOOD LAB',
            image: image14,
            category: '소야볶',
            menu: '메쏘야, 로쏘야',
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
            {list.map((item) => (
                <FoodInfoBox 
                    key={`food-info-${item.id}`}
                    data={item}
                />
            ))}
        </div>
    );
}