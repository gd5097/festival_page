import React, { useState } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import mapIcon from '../images/map.png';
import { useNavigate } from 'react-router-dom';
import FoodList60st from '../components/anniversary/food-list-60st';
import DefaultModalMap from '../components/default-modal-map';
import modalImage from '../images/modal_map_60st.png';

export default function AnniversaryListViewPage() {
    const navigate = useNavigate();
    const [dialogOpen, setDialogOpen] = useState(false);
    const showDialog = () => {
        setDialogOpen(true);
    };
    
    return(
        <DefalutLayout>
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
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
                rightIcons={[
                    {
                        iconImage: mapIcon,
                        onClick: () => {
                            showDialog();
                        }
                    },
                ]}
            />

            <FoodList60st />

            {dialogOpen &&
                <div
                    // blur용 div
                    css={css`
                        position: fixed;

                        top: 0px;
                        left: 0px;

                        width: 100vw;
                        height: 100vh;

                        backdrop-filter: blur(10px);
                    `}
                >

                </div>
            }
            {dialogOpen && 
                <DefaultModalMap
                    setDialogOpen={setDialogOpen}
                    image={modalImage}
                />
            }
        </DefalutLayout>
    );
}