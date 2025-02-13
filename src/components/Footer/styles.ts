import { css, styled } from 'styled-components'

export const FooterContainer = styled.footer`
    ${({ theme }) => theme && css`

    background-color: ${theme.bgDarkColor};
    
    whidth: 100%;
 
    >div{   
        max-width: 1250px;
        
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        padding: 3.5rem 2rem;
        margin: 0 auto;
        
        color: ${theme.bgLightColor};

        div{
            display: flex;
            flex-direction: column;

            gap: 1rem;

            h3{
                color: ${theme.baseColor};
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
`}
`
export const Attribuition = styled.div`
    ${({ theme }) => theme && css`

    background-color: ${theme.bgLightColor};

    display: flex;
    align-items: center;
    justify-content: center;

    height: 3.5rem;
    width: 100%;

    color: ${theme.baseColor};

    font-weight: 300;
    letter-spacing: 2px; 
`}
`