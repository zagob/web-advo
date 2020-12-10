import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        text-align: center;
    }

    h2 {
        font-family: Roboto;
        font-weight: 400;
        font-size: 0.8em;
    }
`;