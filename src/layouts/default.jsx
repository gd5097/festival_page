import 'normalize.css';
import '../../styles/style.scss';

import { css } from '@emotion/react';
import React from 'react';

function DefalutLayout({children}){
    return(
        <div>
            {children}
        </div>
    );
}

export default DefalutLayout;