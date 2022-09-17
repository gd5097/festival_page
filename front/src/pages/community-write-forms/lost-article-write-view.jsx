import React from 'react';

import DefalutLayout from '../../layouts/default';
import Header from '../../components/header';

import arrowIcon from '../../images/back-arrow.png';
import FestivalPictureWriteBox from '../../components/community/festival-picture-folder/festival-picture-write-box';
import { useNavigate } from 'react-router-dom';
import GroupWriteBox from '../../components/community/group-folder/group-write-box';
import LostArticleWriteBox from '../../components/community/lost-article-folder/lost-article-write-box';

export default function LostArticleWriteView() {
    const navigate = useNavigate();

    return(
        <DefalutLayout>
            <Header 
                title={'글 작성'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            navigate(-1);
                        }
                    }
                }
            />
            <LostArticleWriteBox pictureAbled />
            
        </DefalutLayout>
    );
}