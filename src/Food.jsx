import React from 'react';
import {
    PostSection,
    PostTitleDiv,
    PostTitle,
  } from './styledComponent';
import FoodTruck from './FoodTruck';

const Food = () => {

    return (
        <>
            <PostSection>
                <PostTitleDiv>
                    <PostTitle>푸드트럭</PostTitle>
                </PostTitleDiv>
                <FoodTruck name="청년 컵밥" content="바바바바밥" />
                <FoodTruck name="청년 컵밥" content="바바바바밥" />
                <FoodTruck name="청년 컵밥" content="바바바바밥" />
                <FoodTruck name="청년 컵밥" content="바바바바밥" />
            </PostSection>
        </>
    );
};

export default Food;