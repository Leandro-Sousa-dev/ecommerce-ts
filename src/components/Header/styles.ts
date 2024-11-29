import { styled, css } from "styled-components";

interface ContainerProps {
  isMenuOpen: boolean;
}

export const HeaderContainer = styled.header<ContainerProps>`
  position: relative;

  background: #111111;

  width: 100%;

  display: flex;
  justify-content: space-between;

  aside {
    button {
      background: transparent;
      border: none;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  
    position: fixed;
    top: 0;
    left: 0;
    background: #130234;
    height: 100vh;
    width: 100%;
    padding: 2rem;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
  }






`;
