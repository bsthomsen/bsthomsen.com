import {injectGlobal} from 'styled-components';
import { white } from './variables';

import { background } from './images';

/* eslint-disable */
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=PT+Sans');
    
    body {
        font-family: 'PT Sans', sans-serif;
        font-size: 14px;
        margin: 0;
        color: ${white};

        background-image: url(${background});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: 100% 0;
        background-size: cover;
    }

    h1, h2, h3 {
        font-weight: normal;
    }
`