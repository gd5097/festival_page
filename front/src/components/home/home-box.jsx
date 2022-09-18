import React, { useState } from 'react';
import { css } from '@emotion/react';
import TempButton from './tempButton';
import DefaultModal from '../default-modal';
import DefaultDialog from '../default-dialog';
import { useNavigate } from 'react-router-dom';

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
            //background: white;    // for test
        `}>
            <TempButton
                size={80}
                text={'미래광장'}
                link={'/mirae-square'} 
            />
            <TempButton
                size={80}
                text={'60주년관'}
                link={'/anniversary'} 
            />
            <TempButton
                size={80}
                text={'게시판'}
                link={'/community'} 
            />
            <TempButton
                size={80}
                text={'연적지'}
                link={'/yeonjeogji'} 
            />
            <TempButton
                size={80}
                text={'함인섭'}
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