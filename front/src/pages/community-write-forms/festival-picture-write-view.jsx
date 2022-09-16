import React from 'react';

import DefalutLayout from '../../layouts/default';
import Header from '../../components/header';

import arrowIcon from '../../images/back-arrow.png';
import FestivalPictureWriteBox from '../../components/community/festival-picture-folder/festival-picture-write-box';
import WriteInputBox from '../../components/community/write-input-button';
import { useNavigate } from 'react-router-dom';

export default function FestivalPictureWriteView() {
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
            <FestivalPictureWriteBox />
            <WriteInputBox pictureAbled />
            
        </DefalutLayout>
    );
}