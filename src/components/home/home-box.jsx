import React, { useState } from 'react';
import { css } from '@emotion/react';
import TempButton from './tempButton';
import DefaultModal from '../default-modal';
import DefaultDialog from '../default-dialog';
import { useNavigate } from 'react-router-dom';

import homeBackGroundImage from '../../images/bg_off.png';
import miraeSquareImage from '../../images/future_square.png';
import anniversaryImage from '../../images/60st.png';
import communityImage from '../../images/board.png';
import yeonjeogjiImage from '../../images/playground.png';
import hamSquareImage from '../../images/hamsquare.png';
import useAuth from '../../hooks/use-auth';
import ComTempButton from './comTempButton';

export default function HomeBox() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [curPosition, setCurPosition] = useState([]);

    const showDialog = () => {
        setDialogOpen(true);
    };

    const auth = useAuth();

    const navigate = useNavigate();

    return(
        <div css={css`
            margin: 0px auto;
            height: 120vh;

            overflow: hidden;
        `}>
            <img
                src={homeBackGroundImage}
                css={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    z-index: -1;
                    
                    object-fit: cover;
                    width: 100%;
                `}
            />
            {/* <TempButton
                size={48}
                positionx={6}
                positiony={11}
                image={miraeSquareImage}
                link={'/mirae-square'} 
            /> */}
            <TempButton
                size={50}
                positionx={17}
                positiony={92}
                image={anniversaryImage}
                link={'/anniversary'} 
            />
            
            
            <ComTempButton
                size={30}
                positionx={57}
                positiony={-35}
                onClick={() => {
                    if(auth.auth === ""){
                        showDialog();
                    }
                    else{
                        navigate('/community');
                    }
                }}
                image={communityImage}
                link={'/community'} 
            />
            
            <TempButton
                size={50}
                positionx={50}
                positiony={-27}
                image={yeonjeogjiImage}
                link={'/yeonjeogji'} 
            />
            <TempButton
                size={50}
                positionx={47}
                positiony={30}
                image={hamSquareImage}
                link={'/ham-square'} 
            />

            {dialogOpen &&
                <div
                    // blur용 div
                    css={css`
                        position: fixed;

                        top: 0px;
                        left: 0px;

                        width: 100vw;
                        height: 100vh;

                        backdrop-filter: blur(20px);
                    `}
                >

                </div>
            }
            {dialogOpen && 
                <DefaultDialog
                    setDialogOpen={setDialogOpen}
                    infoText={'준비 중입니다!'}
                    functions={[
                        {
                            name: '닫기',
                            color: '#12183f',
                            onClick: () => {
                                setDialogOpen(false);
                            }
                        },
                    ]}
                />
            }
            
        </div>
    );
}