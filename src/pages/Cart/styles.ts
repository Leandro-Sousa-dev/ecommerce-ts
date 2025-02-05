import styled from "styled-components";
import { theme } from "../../styles/variables";

export const CartContainer = styled.section`
    color: ${theme.baseColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem; 
    
    letter-spacing: 0.1rem;
    
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

`