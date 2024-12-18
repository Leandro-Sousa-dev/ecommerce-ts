import { styled } from "styled-components";

interface ContainerProps {
  $isMenuOpen: boolean;
}

export const HeaderContainer = styled.header<ContainerProps>`

  color: #fff;

  border-bottom: 1px solid #6528D3;

  z-index: 1;

  >div{
    
    position: relative;
    
    background: #111111;
    
    max-width: 1250px;

    margin: 0 auto;

    padding: 0 2rem;
    
    height: 5rem;

    display: flex;
    align-items: center;

   >div:nth-child(1){

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  
    gap: 1rem;

    div:first-child{
      display: flex;

      gap: 1rem;

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
      
      background: #130234;

      height: 100vh;
      width: 100%;

      font-size: 1rem;

      transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
      transition: transform 0.3s ease-in-out;

      #asideHeader{
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
        border-top: 1px solid #6528D3;

        li{
          font-size: 1.5rem;
          padding: 1rem 0;
        }

      } 
    }
    @media( min-width: 900px){
   
      nav ul{
       display: flex;
    
      }
    }
    

    }
   
    }
    
   
  }

`;
