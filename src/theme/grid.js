import styled from 'styled-components';
import media from './media';

export const Container = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    ${media.phone`
        padding: 0;
    `}
`;


export const Row = styled.div`
    margin: 0 -15px;

    ${media.phone`
        margin: 0;
    `}
`

export const Col = styled.div`
    padding: 0 15px;
    
    ${media.phone`
        padding: 0;
    `}
`