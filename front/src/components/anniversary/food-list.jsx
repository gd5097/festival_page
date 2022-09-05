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
        }
    ]

    return(
        <div 
            // 전체 컨테이너
            css={css`
                background-color: white;
                margin: 0px 20px;
            `}
        >
            {list.map((item) => (
                <FoodInfoBox />
            ))}
        </div>
    );
}