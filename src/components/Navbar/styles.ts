import styled from 'styled-components';

interface Props {
    open: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 8px #000;
  z-index: 1000;
  position: fixed;
  background: #fff;
  

  .content {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 600px) {
        height: 60px;
        .logo h1 {
            width: 200px;
        }
    }

    .content-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .menu {
        margin: 0 10px 0 0;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo h1 {
        padding: 15px 0 15px 10px;
        font-family: Roboto, sans-serif;
        font-weight: 400px;
        font-size: 1.2em;
    }
  }

`;

export const Ul = styled.ul<Props>`
  width: 100%;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 20px;
    font-family: Roboto, sans-serif;
    font-weight: 300px;
    text-transform: uppercase;
    font-size: 0.9em;
    transition: 0.2s;
    color: #000;

    &:hover {
        cursor:pointer;
        color: #3C3F3F;
    }
  }

  @media (max-width: 1000px) {
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
      font-family: Roboto, sans-serif;
      font-weight: 300px;
      color: #fff;

      &:hover {
          cursor:pointer;
          color: #ccc;
      }
    }
  }
`;


export const StyledBurger = styled.div<Props>`
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  div:not(:last-child) {
      margin-bottom: 6px;
  } 

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#f00' : '#333'};
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