import { css, styled } from "styled-components";

interface ContainerProps {
  $isMenuOpen: boolean;
}

export const HeaderContainer = styled.header<ContainerProps>`
  ${({ theme, $isMenuOpen }) => theme && css`

  color: ${theme.baseColor};

  border-bottom: 1px solid ${theme.bgLightColor};

  z-index: 1;

  .header{
    position: relative;
    
    background: ${theme.bgBaseColor};
    
    max-width: 1550px;

    margin: 0 auto;

    padding: 0 2rem;
    
    height: 5rem;

    display: flex;
    align-items: center;

   .main{

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  
    gap: 1rem;

    div:first-child{
      display: flex;
      align-items: center;
      gap: 1rem;
      
    }
      
    .logo{
      width: 10rem;
    }

    nav ul{
      display: none;

      gap: 1rem;
    
    }

    >div:last-child{

      display: flex;
      align-items: center;
    }

    aside {
      z-index: 2;
      position: fixed;
      top: 0;
      left: 0;
      
      background: ${theme.bgDarkColor};

      min-height: 100vh;
      width: 100%;

      scrollbar-width: none;

      font-size: 1rem;

      transform: ${$isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
      transition: transform 0.3s ease-in-out;

      .asideHeader{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 2rem;

        padding: 1.5rem 20px;

      }

      button {
        background: transparent;
        border: none;

        display: flex;

        img {

          width: 32px;
          height: 32px;  
          }
      }
       ul{
        width: 100%;

        padding: 2.5rem 2rem;
        border-top: 1px solid ${theme.bgLightColor};

        li{
          font-size: 1.5rem;
          padding: 1rem 0;
        }

      } 
    }
    @media( min-width: 992px){
        aside{
          width: 15rem;
        }
        nav ul{
        display: flex;
        
      }

    }

    }
   
    }
  
  }
`}
`;
