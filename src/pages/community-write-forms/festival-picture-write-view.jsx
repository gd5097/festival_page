import React, { useEffect } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../../layouts/default';
import Header from '../../components/header';

import arrowIcon from '../../images/back-arrow.png';
import FestivalPictureWriteBox from '../../components/community/festival-picture-folder/festival-picture-write-box';
import WriteInputBox from '../../components/community/write-input-button';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';

export default function FestivalPictureWriteView() {
    const navigate = useNavigate();

    const auth = useAuth();
    useEffect(() => {
        console.log(auth.auth.token);
    },[]);

    return(
        <DefalutLayout>
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
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
            
            <FestivalPictureWriteBox pictureAbled/>
            
        </DefalutLayout>
    );
}