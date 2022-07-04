import React from 'react';
import { PostTitleDiv, PostTitle } from './styledComponent';

function WriteTitle() {
    return (
        <div>
            <PostTitleDiv>
                <PostTitle>글쓰기</PostTitle>
            </PostTitleDiv>
        </div>
    );
};

export default React.memo(WriteTitle);