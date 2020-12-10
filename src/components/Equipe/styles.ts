import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    background: #0D2538;

    h1 {
        font-family: Roboto;
        font-size: 2.5em;
        color: #fff;
        text-align: center;
        margin-bottom: 30px;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: orange;
        width: 300px;
        height: 500px;

        .titles {
            margin: 10px 0 0 20px;

            h3 {
                font-family: Roboto, sans-serif;
            }

            p {
                font-family: Roboto, sans-serif;
                font-weight: 300;
                font-size: 0.9em;
            }

            h4 {
                font-family: Roboto, sans-serif;
                font-weight: 400;
            }
        }
    }
`;