import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTpyes from 'prop-types';

import tempImage from '../../images/festival-image3.jpg';
import BaseTitleForm from '../base-title-form';
import CategoryIndicator from '../category-indicator';
import NumberBox from '../number-box';
import { Link } from 'react-router-dom';

export default function FoodInfoBox( {data} ){
    const theme = useTheme();

    return(
        <Link 
            // 전체 컨테이너
            to={`/anniversary/food-info-view/${data.id}`}
            css={css`
                display: grid;
                grid-template-columns: auto 1fr auto;
                grid-template-rows: 1fr 1fr;

                column-gap: 8px;

                background-color: white;
                border: 0;
                border-radius: 18px;
                padding: 8px;

                align-items: center;
                text-align: left;

                height: 100px;
            `}
        >
            <div
                // 이미지
                css={css`
                    grid-column: 1;
                    grid-row-start: 1;
                    grid-row-end: 3;

                    background-color: #C0C0C6;
                    height: 84px;
                    width: 84px;
                    

                    border-radius: 8px;

                    overflow: hidden;
                `}
            >
                <img
                    src={data.image}
                    css={css`
                        width: 100%;
                        height: 100%;

                        object-fit: cover;

                    `}
                />
            </div>
            <div
                // 푸드트럭 이름 및 분류
                css={css`
                    grid-column: 2;
                    grid-row: 1;

                    display: flex;

                    column-gap: 8px;
                `}
            >
                <BaseTitleForm>
                    {data.title}
                </BaseTitleForm>
                <CategoryIndicator>
                    {data.category}
                </CategoryIndicator>
            </div>
            <div
                // 대표 메뉴
                css={css`
                    grid-column: 2;
                    grid-row: 2;

                    color: #767687;
                    align-self: flex-start;
                    font-size: 0.75rem;
                `}
            >
                {data.menu}
            </div>
            <div
                // 목록 번호
                css={css`
                    grid-column: 3;
                    grid-row: 1;

                    align-self: flex-start;
                `}
            >
                <NumberBox>
                    {data.id}
                </NumberBox>
            </div>
        </Link>
    );
}

FoodInfoBox.propTypes = {
    data: PropTpyes.object.isRequired,
}