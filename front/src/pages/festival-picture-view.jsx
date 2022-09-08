import React, { useEffect } from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import FoodList from '../components/anniversary/food-list';
import { useParams } from 'react-router-dom';
import FestivalPostBox from '../components/community/festival-picture-folder/festival-post-box';

export default function FestivalPictureViewPage() {



    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])
 
    return(

        
        <DefalutLayout>
            <Header 
                title={'축제사진'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            console.log("back Icon Clicked");
                        }
                    }
                }
            />
            <FestivalPostBox />
            
        </DefalutLayout>
    );
}