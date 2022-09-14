import React from 'react';

import DefalutLayout from '../../layouts/default';
import Header from '../../components/header';

import arrowIcon from '../../images/back-arrow.png';
import FestivalPictureWriteBox from '../../components/community/festival-picture-folder/festival-picture-write-box';

export default function FestivalPictureWriteView() {
    return(
        <DefalutLayout>
            <Header 
                title={'글 작성'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onCLick: () => {
                            console.log('arrow Clicked!');
                        }
                    }
                }
            />
            <FestivalPictureWriteBox />
            
        </DefalutLayout>
    );
}