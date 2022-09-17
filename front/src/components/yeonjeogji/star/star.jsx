import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../../../layouts/default';

import Day from '../Day';

import Bar2 from '../Bar2';

import { useNavigate } from 'react-router-dom';
import SquareTag from '../SquareTag';

export default function StarPage() {
    const navigate = useNavigate();

    return(
        <DefalutLayout>
        

        <Day day={'Day 1'} date={'9/20 (화)'} dayleft={117.5} daytop={147} dateleft={184.5} datetop={151}/>

        </DefalutLayout>
    );
}