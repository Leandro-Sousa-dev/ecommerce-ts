import styled from "styled-components";
import { theme } from "../../../../styles/variables";

export const Shipment = styled.form`
    display: flex;
    flex-direction: column;

    .container{
        padding: 1rem;
        
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        .shipment{
            display: flex;
            flex-direction: column;
            font-size: 1.1rem;
            font-weight: 300;

            gap: 1rem;

        }

        input{
            margin-top: 0.3rem;
        }

        select{
            background: ${theme.bgDarkColor};
            border: 1px solid ${theme.bgLightColor};
            border-radius: ${theme.baseBRadius};
            padding: 1rem 0.5rem;

            width: 100%;

            color:${theme.baseColor};

            font-size: 1rem;

            &:focus,
            &:active{
                outline: 1px solid ${theme.baseColor};
            }
            margin-top: 0.3rem;

        }

        background: ${theme.bgDarkColor}
        
    }

    .sumPrice{
        display: flex;
        flex-direction: column;
        font-weight: 300;

        gap: 1.5rem;

        margin-top: 1rem;

        div:last-child{
            margin-top: 1rem;

            font-size: 1.3rem;
            font-weight: 500;

            span{
                font-size: 1.6rem;
                
            }
        }

        div{
            display: grid;
            grid-template-columns: minmax(max-content, 12rem) max-content;

            p{
                text-align: right;
            }
            span{
                color:${theme.priceColor};
                padding: 0 2rem;
                font-weight: 500;

            }    
        }
    }

    .submitBtn{
        button{
            width: 100%;
            margin: 2rem 0;
        }
    
    }

`