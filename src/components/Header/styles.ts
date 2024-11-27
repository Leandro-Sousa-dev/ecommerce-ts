import { styled, css } from 'styled-components'

export const HeaderContainer = styled.header`
border-bottom: 1px solid #6528d3;

#content{

  margin: 0 auto;
  max-width: 1250px;

  display: flex;

  color: #fff;

  padding: 0 2rem;

  position: relative;

  width: 100%;
  
  #menu {

    display: flex;
    justify-content: center;
    
    width: 2rem;
    height: 2rem;
    
    label{
      align-items: center;
      display: flex;
      justify-content: center;

      width: 2rem;
      height: 2rem;
      
      cursor: pointer;
      
      span{
        display: block;
        position: relative;
        
        background-color: #fff;
        
        border-radius: 3px;

        width: 1.5rem;
        height: 3px;

        &:before,
        &:after{
          content: '';
          
          width: 100%;
          height: 100%;

          position: absolute;
          left: 0;
          
          transition: 0.2s ease-in-out;
          
          background-color: #fff;
          
          border-radius: 3px;
        }
        
        &:before{
          top: -8px;
        }
        &:after{
          bottom: -8px;
        }

      }
    }

    #menuHamburguer:checked~label span {
        transform: rotate(45deg);
    }

    #menuHamburguer:checked~label span::before {
        transform: rotate(90deg);
        top: 0;
    }

    #menuHamburguer:checked~label span::after {
        transform: rotate(90deg);
        bottom: 0;
    }
  }

  ${props => props.theme && css`
    background-color: ${props.theme.backgroundColor};
    
    height: ${props.theme.height};
      
    align-items: ${props.theme.align};
    flex-direction: ${props.theme.direction};
    justify-content: ${props.theme.justify};
    
    gap: 1.5rem;
    
    >div {
      display: flex;
      align-items: ${props.theme.align};
      flex-direction: ${props.theme.direction};

      gap: 1.5rem;

    }

    div:first-child {
      div:last-child {
        img{
          width: 10rem;
        }
      }
    }
    
    nav {
      background-color: #130234;
      border-top: 1px solid #6528d3;
      
      display: ${props.theme.nav};

      position: absolute;
      top: 18rem;
      left: 0;

      width: 100%;
      min-height: 100vh;

      padding: 2rem;

      ul {
      display: flex;
      flex-direction: column;

      gap: 30px;
      }
    }

    #imgUser {
      display: ${props.theme.img};
      align-items: center;
      justify-content: center;

      img{
        width: 2rem;
        height: 2rem;
      }
        
      border-right: 1px solid #6528d3;
      padding-right: 1rem;
    }
      
    #buttonUser{
      a{
        display: ${props.theme.button};
        align-items: center;
        justify-content: center;
        
        white-space: nowrap;
 
        cursor pointer;
        
        margin: 0;
      }
    }

  #cartContainer {

    img{
      width: 2rem;
    }

    position: relative;

    display: flex;
    align-items: center;

    gap: 20px;

    div{
      position: absolute;
      bottom: -4px;
      left: 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      
      width: 1.3rem;
      height: 1.3rem;
      
      font-size: 0.8rem;
      
      background-color: #6528D3;
      
      border-radius: 50%;

      padding: 5px;  
    }
    
    p{
      display: ${props.theme.cartText};
    }
    
  }
}
`}

  @media (min-width: 1080px ){

  #content{

  
    div:first-child{
      #menu{
        display: none;
      }
    }
       

    nav {
      position: relative;

      display: flex;

      border-top: 0;

      top: 0;
      
      min-height: 0;
      height: 5rem;

      background-color: #111111;
      
      ul {

        display: flex;
        flex-direction: row;
        
        gap: 30px;
      }
    }

    div:last-child{

      #imgUser {
        display: none;
      }

      #buttonUser{
        a{
          display: flex;
        }
      }

      #cartContainer {
        p{
          display: none;
        }
      }
    }
  }
  }
`;
