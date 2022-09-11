import React, { useEffect } from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import bigMenuIcon from '../images/big-menu.png';
import arrowIcon from '../images/back-arrow.png';
import { useParams } from 'react-router-dom';
import GroupPostBox from '../components/community/group-folder/group-post-box';


export default function GroupViewPage() {

    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])
 
    return(
        <DefalutLayout>
            <Header 
                title={'번개모임'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            console.log("back Icon Clicked");
                        }
                    }
                }
                rightIcons={[
                    {
                        iconImage: bigMenuIcon,
                        onClick: () => {
                            console.log('menu btn clicked!');
                        }
                    },
                ]}
            />
            <GroupPostBox />
            
        </DefalutLayout>
    );
}