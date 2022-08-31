import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import DocImage from '../images/document.png';
import homeIcon from '../images/home.png';

export default function CommunityPage() {
    return(
        <DefalutLayout>
            <Header 
                title={'게시판'}
                leftIcon={
                    {
                        iconImage: homeIcon,
                        onClick: () => {
                            console.log("Home Icon Clicked");
                        }
                    }
                }
                rightIcons={[
                    {
                        iconImage: DocImage,
                        onClick: () => {
                            console.log("Doc Icon Clicked");
                        }
                    },
                    
                ]}
            />
            <div>
                미래광장
            </div>
        </DefalutLayout>
    );
}