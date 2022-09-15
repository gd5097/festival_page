import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import FoodList from '../components/anniversary/food-list';
import { useNavigate } from 'react-router-dom';

export default function AnniversaryPage() {
    const navigate = useNavigate();

    return(
        <DefalutLayout>

            
            <Header 
                title={'육십주년관'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            navigate(-1);
                        }
                    }
                }
            />
            <FoodList />
            
        </DefalutLayout>
    );
}