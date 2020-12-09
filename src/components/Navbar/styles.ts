import styled from 'styled-components';

interface props {
    open: boolean;
}

export const Container = styled.div<props>`
    width: 100%;
    display: flex;
    justify-content: center;

    .content {
        position: fixed;
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 2px 1px 5px #000;

        h1 {
            font-family: Roboto;
        }
    }


    .content-menu {
        padding: 10px;
    }

    .content-menu ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .content-menu ul li {
        padding: 5px;
        margin-left: 10px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #444;
        transition: 0.2s;
        font-size: 0.9em;

        &:hover {
            cursor: pointer;
            color: #000;
        }
    }

    @media (max-width: 780px) {
        .content {
            display: flex;
            flex-direction: column;

            height: 100px;
        }
    }

    
    @media (max-width: 600px) {
        .content .content-menu ul {
            flex-flow: column nowrap;
            background-color: #0D2538;
            position: fixed;
            top: 0;
            right: 0;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            height: 100vh;
            width: 300px;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;

            li {
                text-align: center;
                color: #fff;

                &:hover {
                    color: #ccc;
                }
            }
    }
}

    /* Media querys */
    
`;

export const StyledBurger = styled.div<props>`
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  div:not(:last-child) {
      margin-bottom: 6px;
  } 

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
  }

  div {
    border: 1px solid red;
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;