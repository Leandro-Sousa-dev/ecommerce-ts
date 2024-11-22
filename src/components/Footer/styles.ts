import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #130234;
    
    whidth: 100%;
 
    >div{   
        max-width: 1250px;
        
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        padding: 3.5rem 2rem;
        margin: 0 auto;
        
        color: #6528D3;

        div{
            display: flex;
            flex-direction: column;

            gap: 1rem;

            h3{
                color: #fff;
            }
            
            ul{
                display: flex;
                flex-direction: column;

                gap: 1rem;
            }
        }
    }

    @media (min-width: 600px){
        >div{ 
            grid-template-columns: repeat(3, 1fr);
        }
    }

`