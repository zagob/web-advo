import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
    height: 800px;
    background-color: #0D2538;

    @media (max-width: 600px) {
        /* width: 375px; */
        height: 1100px;
        /* width: auto; */
    }

    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            font-size: 2.2em;
            font-weight: 600;
            color: #fff;

            @media (max-width: 600px) {
                font-size: 2.2em;
                width: 200px;
            }
        }

        form {
            display: flex;
            flex-direction: column;

            label {
                margin: 20px 0 0 0;
                color: #fff;
            }

            input {
                border: 1px solid #fff;
                font-family: Roboto;
                width: 500px;
                height: 50px;
                font-size: 1em;
                padding-left: 10px;
                margin: 10px 0;
                overflow-x: hidden;
                background-color: #0D2538;
                color: #fff;

                @media (max-width: 600px) {
                    width: 300px;
                }
            }

            textarea {
                background-color: #0D2538;
                color: #fff;
                height: 50px;
                font-size: 1.5em;
                padding-left: 10px;
                margin: 10px 0;
                height: 80px;
                border: 1px solid #fff;
            }

            button {
                text-transform: uppercase;
                height: 40px;
                margin: 10px 0;
                border: none;
                background: orange;

                &:hover {
                    opacity: 60%;
                    cursor: pointer;
                }
            }
        }

        .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 150px;
            width: 500px;
            font-family: Roboto;
            color: #fff;

            .social {
                div {
                    display: flex;
                }
            }

            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;

                address {
                    margin-top: 20px;
                    width: 300px;
                    
                    h3 {
                        font-family: Roboto;
                        font-weight: 400;
                        font-size: 1.5em;
                    }
                }

                ul {
                    margin-top: 20px;
                    width: 300px;

                    p {
                        margin-left: 10px;
                    }

                    h3 {
                        font-family: Roboto;
                        font-weight: 400;
                        font-size: 1.5em;
                    }
                }
            }

            p {
                display: flex;
                align-items: center;
                margin: 10px 0 5px 0;
                transition: 0.2s;

                li{
                    margin: 0 5px 0 0;
                }

                p {
                    margin: 0 10px 0 0;
                }
                
                a:hover {
                    opacity: 60%;
                }
            }
        }
    }
`;