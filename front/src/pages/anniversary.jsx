import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import FoodList from '../components/anniversary/food-list';

export default function AnniversaryPage() {
    return(
        <DefalutLayout>
            <Header 
                title={'육십주년관'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            console.log("back Icon Clicked");
                        }
                    }
                }
            />
            <FoodList />
            
        </DefalutLayout>
    );
}