import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 700px;

    @media (max-width: 600px) {
        height: 1300px;
    }
    
    section h1 {
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        font-size: 2.2em;
    }

    section {
        width: 100%;
    }

    section .titulo {
        text-align: center;
    }

    section .titles {
        width: 100%;
        display: grid;
        justify-content: space-around;
        grid-template-columns: auto auto auto;
        margin-bottom: 40px;

        @media (max-width: 600px) {
            display: grid;
            justify-content: space-around;
            grid-template-columns: auto;
        }

        div {
            width: 300px;
        }

        div h2 {
            font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            margin: 20px 0 10px 0;
        }

        div li {
            font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 300;
            list-style: circle;
            margin-bottom: 10px;
        }
    }

`;