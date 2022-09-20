import { css} from '@emotion/react';

export default function BadgeBox() {

    return (

            <div
                // 전체 컨테이너
                css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 8px;
                    gap: 8px;

                    width: 320px;
                    height: 100px;

                    background: #FFFFFF;
                    border-radius: 18px;

                    flex: none;
                    order: 0;
                    flex-grow: 0;

                `}
            >
                <div
                    css={css`
                        display: flex;
                        order: 0;
                        flex-grow: 0;`}
                //1래퍼
                >
                    <div
                        // 1번째
                        // 큰 뱃지 박스 (좌측)
                        css={css`
                    
                            width: 84px;
                            height: 84px;
                            background: #C0C0C6;
                            border-radius: 8px;
                            flex: none;
                            order: 0;
                            flex-grow: 0;
                            padding-top: 8px;
                            padding-bottom: 8px;
                        
                        `}
                    >
                    </div>

                    <div
                    // 2번째
                    css={css`
                        display: flex;
                        flex-flow: column wrap;
                        order: 1;
                        flex-grow: 0;
                        padding-left: 8px;
                    `}>



                        <div css={css`
                            overflow:none;
                            white-space:nowrap;
                            
                            display: flex;
                            // 만두와 종류 래퍼
                            order: 0;
                            flex-grow: 0;
                            padding-bottom: 14.5px;
                        `}>

                            <div
                                css={css`
                                /* 만두BOX */


                                width: 55px;
                                height: 18px;

                                font-family: 'HGGGothicssi';
                                font-style: normal;
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 18px;
                                /* identical to box height */


                                /* BLACK/100 */

                                color:#0C112C;


                                /* Inside auto layout */

                                flex: none;
                                order: 0;
                                flex-grow: 0;
                                margin-right: 4px;
                                margin-left: 4px;
                                margin-top: 16px;

                            `}
                                >만두BOX
                            </div>

                            
                            <div
                            // 분식/육류
                            css={css`

                            overflow:none;
                            white-space:nowrap;

                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            padding: 4px 10px;
                            gap: 8px;

                            width: 68px;
                            height: 21px;

                            background: #D8E7F2;
                            border-radius: 30px;

                            /* Inside auto layout */

                            flex: none;
                            order: 1;
                            flex-grow: 0;

                            margin-left: 18px;
                            margin-top: 10px;
                            
                            `}
                        >
                                <div
                                
                                    css={css`
                                
                                    width: 48px;
                                    height: 13px;

                                    font-family: 'HGGGothicssi';
                                    font-style: normal;
                                    font-weight: 400;
                                    font-size: 12px;
                                    line-height: 13px;
                                    text-align: center;

                                    color: #7C9DD2;

                                    flex: none;
                                    order: 0;
                                    flex-grow: 0;

                                    `}>분식/육류
                                </div>
                            </div>
                    
                        </div>

                        
                        <div
                        css={css`
                        /* 김치삼겹살, 갈비만두, 삼겹살+목살 */


                        width: 184px;
                        height: 13px;

                        font-family: 'HGGGothicssi';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 13px;

                        /* BLACK/80 */

                        color: #767687;


                        /* Inside auto layout */

                        flex: none;
                        order: 1;
                        flex-grow: 0;

                        overflow:none; 
                        white-space:nowrap;
                        
                        `}
                    >김치삼겹살, 갈비만두, 삼겹살+목살</div>





                    </div>

                </div>



                <div
                    // 2래퍼
                    css={css`
                    box-sizing: border-box;

                    /* Auto layout */

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 8px;
                    gap: 8px;

                    width: 24px;
                    height: 24px;

                    background: #FFFFFF;
                    /* BLACK/40 */

                    border: 1px solid #D3D3D9;
                    border-radius: 8px;

                    /* Inside auto layout */

                    flex: none;
                    order: 2;
                    flex-grow: 0;

                    margin-top: 8px;
                   `}>
                        <div
                        css={css`
                            /* 1 */


                            width: 6px;
                            height: 18px;

                            font-family: 'HGGGothicssi';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 18px;
                            /* identical to box height */


                            /* BLACK/80 */

                            color: #767687;


                            /* Inside auto layout */

                            flex: none;
                            order: 0;
                            flex-grow: 0;

                        
                        `}>
                            1</div>
                </div>

            </div>
            
            
    );
}
