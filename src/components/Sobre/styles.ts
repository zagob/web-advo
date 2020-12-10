import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 600px;

    @media (max-width: 600px){
        height: 900px;
    }

    .content {
        width: 90%;
    }

    .content .title {
        font-family: Roboto, sans-serif;
        font-size: 2.2em;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .content .paragrafos p {
        margin-top: 15px;
        font-family: Roboto, sans-serif;
        text-align: justify;
    }
`;