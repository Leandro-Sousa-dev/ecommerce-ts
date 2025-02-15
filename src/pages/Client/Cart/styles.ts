import styled, { css } from "styled-components";

export const CartContainer = styled.section`
    ${({ theme }) => theme && css`

    color: ${theme.baseColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem; 
        
    .responsive{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem; 

    }   

    @media (min-width: 992px){
        .responsive{
            display: grid;
            align-items: start;
            
            grid-template-columns: 7fr 3fr;
        }
    
    }
`}
`