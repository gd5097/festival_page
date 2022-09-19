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

export default function HomeBox() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [curPosition, setCurPosition] = useState([]);

    const showDialog = () => {
        setDialogOpen(true);
    };

    const navigate = useNavigate();

    return(
        <div css={css`
            margin: 0px auto;
            height: auto;

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
            <TempButton
                size={48}
                positionx={6}
                positiony={11}
                image={miraeSquareImage}
                link={'/mirae-square'} 
            />
            <TempButton
                size={50}
                positionx={17}
                positiony={48}
                image={anniversaryImage}
                link={'/anniversary'} 
            />
            
            
            <TempButton
                size={25}
                positionx={70}
                positiony={-75}
                image={communityImage}
                link={'/community'} 
            />
            
            <TempButton
                size={50}
                positionx={50}
                positiony={-64}
                image={yeonjeogjiImage}
                link={'/yeonjeogji'} 
            />
            <TempButton
                size={50}
                positionx={47}
                positiony={-13}
                image={hamSquareImage}
                link={'/ham-square'} 
            />
            

            <button 
                type='button'
                onClick={(e) => {
                    showDialog();
                }}
            >
                test
            </button>

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
                    infoText={'게시판 이용시 로그인이 필요합니다.'}
                    functions={[
                        {
                            name: '회원가입',
                            color: '#12183f',
                            onClick: () => {
                                navigate('/sign-up');
                            }
                        },
                        {
                            name: '로그인',
                            color: '#12183f',
                            onClick: () => {
                                navigate('/login');
                            }
                        },
                    ]}
                />
            }
            
        </div>
    );
}