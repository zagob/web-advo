import styled from 'styled-components';

export const Container = styled.div`
    height: 700px;
    background: #0D2538;

    @media (max-width: 600px){
        height: 900px;
    }

    .blocos .title {
        text-align: center;
        h1 {
            font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 600;
            font-size: 2.2em;
            color: #fff;
            padding-top: 50px;
        }
    }

    section section {
        display: flex;
        justify-content: center;
        height: 500px;

        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .contatos {

        }

        .contatos form {
            display: flex;
            flex-direction: column;
            margin-right: 20px;

            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            
            label {
                color: #fff;
                font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-weight: 400;
                text-transform: uppercase;
                margin-bottom: 10px;
            }
            
            input {
                width: 600px;
                height: 50px;
                margin-bottom: 20px;
                padding-left: 10px;
                background-color: #0D2538;
                border: 1px solid #fff;
                font-size: 1em;
                color: #fff;

                @media (max-width: 600px) {
                    width: 200px;
                }
            }

            textarea {
                width: 600px;
                height: 80px;
                margin-bottom: 20px;
                padding-left: 10px;
                background-color: #0D2538;
                border: 1px solid #fff;
                font-size: 1.4em;
                color: #fff;
            }

            button {
                height: 40px;
                border: none;
                background-color: orange;
                font-size: 1.2em;
                font-family: Roboto;
                font-weight: 600;
                color: #000;
                transition: 0.2s;

                @media (max-width: 600px) {
                    width: 100%;
                }

                &:hover {
                    opacity: 50%;
                    cursor: pointer;
                }
            }
        }

        .endereco {
                width: 40%;
                color: #fff;
                font-family: Roboto;

                h2 {
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #fff;
                    margin: 25px 0 25px 0;
                }

                div {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;

                    span {
                        margin-left: 10px;
                    }
                }
            .redes-sociais {
                display: flex;
                align-items: center;
                height: 50px;

                h2 {
                    margin-right: 20px;
                }

                .face {
                    margin-right: 10px;
                    &:hover {
                        color: blue;
                        cursor: pointer;
                    }
                }

                .wpp {
                    &:hover {
                        color: green;
                        cursor: pointer;
                    }
                }
                
            }
        }
    }
`;