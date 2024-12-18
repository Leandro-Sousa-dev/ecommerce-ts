import { css, styled } from "styled-components"

interface HaveImgProp {
  $imgButton: boolean
}

export const ButtonContainer = styled.div<HaveImgProp>`
  button{

    background-color: #6528d3;
    
    min-height: 52px;

    font-weight: 500;

    padding: 1.1rem 2.5rem;
    
    border: 0;
    border-radius: 4px;

  }

  ${({ $imgButton }) => $imgButton ? css`
  margin-right: 1rem;

    a{
      
    img{
      width: 2rem;
    }
    
    height: 32px;
    
    font-weight: 400;
    
    display: flex;
    
    padding-right: 1rem;
    
    border-right: 1px solid #6528D3;
    
    p{
      display: none;
      
    }
    
  }
  `
    : css`
  a{
  
    display: flex;
    align-items: center;
    
    min-height: 52px;

    background-color: #6528d3;
    
    font-weight: 500;

    padding: 1.1rem 2.5rem;
    
    border: 0;
    border-radius: 4px;
  
  }
  `
  }

  @media( min-width: 900px){
    a{
      height: 52px;

      background-color: #6528d3;

      font-weight: 400;
      
      white-space: nowrap;

      padding: 1.1rem 2.5rem;

      border: 0;
      
      border-radius: 4px;

      img{
        display: none;
      }

      p{
        display: flex;
      }
    
    }
  }
`;

export const ButtonContent = styled.button`
  
  color: #fff;

  font-size: 1rem;
  letter-spacing: 1.5px;
`