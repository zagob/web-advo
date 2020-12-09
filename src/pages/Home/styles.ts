import styled from 'styled-components';

export const ContainerBg = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;

    section {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    section .titulo {
        width: 550px;
    }

    section h1 {
        color: #fff;
        font-family: Roboto;
        font-weight: 400;
        font-size: 4em;

        span {
            font-weight: bold;
        }
    }

    section .element{
        margin-top: 20px;
        span {
            color: #fff;
            font-family: Roboto, sans-serif;
            font-weight: 300;
            font-size: 1.1em;
        }
    }

    @media (max-width: 600px) {
        section {
            display: flex;
            justify-content: center;
        }
        section .bg {
            display: none;
        }
        section .titulo {
            width: 400px;
            padding: 0 0 0 20px;
        }
        section h1 {
            font-size: 4em;
        }
    }
`;