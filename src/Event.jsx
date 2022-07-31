import React from 'react';
import {
    PostSection,
    PostTitleDiv,
    PostTitle,
  } from './styledComponent';
const Event = () => {
    return (
        <>
            <PostSection>
                <PostTitleDiv>
                    <PostTitle>행사 시간표</PostTitle>
                    <PostTitle>추천 구경 코스</PostTitle>
                    <PostTitle>편의시설</PostTitle>
                    <PostTitle>축제 사진 게시판</PostTitle>
                </PostTitleDiv>
            </PostSection>
        </>
    );
};

export default Event;