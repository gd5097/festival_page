import React from 'react';
import { css, useTheme } from '@emotion/react';
import FoodInfoBox from './food-info-box';

export default function FoodList(){
    const theme = useTheme();

    const list = [
        {
            id: 1,
            title: '만두BOX',
            category: '분식/육류',
            menu: '김치삼겹살, 갈비만두, 삼겹살+목살',
        },
        {
            id: 2,
            title: '치킨BOX',
            category: '1인/육류',
            menu: '후라이드 치킨, 양념 치킨, 반반 치킨',
        },
        {
            id: 3,
            title: '치킨BOX',
            category: '1인/육류',
            menu: '후라이드 치킨, 양념 치킨, 반반 치킨',
        },
        {
            id: 4,
            title: '치킨BOX',
            category: '1인/육류',
            menu: '후라이드 치킨, 양념 치킨, 반반 치킨',
        },
        {
            id: 5,
            title: '치킨BOX',
            category: '1인/육류',
            menu: '후라이드 치킨, 양념 치킨, 반반 치킨',
        },
        {
            id: 6,
            title: '치킨BOX',
            category: '1인/육류',
            menu: '후라이드 치킨, 양념 치킨, 반반 치킨',
        },
        {
            id: 7,
            title: '치킨BOX',
            category: '1인/육류',
            menu: '후라이드 치킨, 양념 치킨, 반반 치킨',
        },
        {
            id: 8,
            title: '치킨BOX',
            category: '1인/육류',
            menu: '후라이드 치킨, 양념 치킨, 반반 치킨',
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