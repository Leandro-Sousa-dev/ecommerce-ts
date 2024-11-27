import { styled } from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #130234;

    div:first-child {
        display: flex;
        width: 100%;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    div:nth-child(2) {
        padding: 2.5rem 1.3rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        color: #fff;

        letter-spacing: 1.5px;

        font-weight: 300;

        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        h3{
            font-size: 1.3rem;
            font-weight: 500;
        }
       
        div{
            display: flex;
            justify-content: flex-end;
            
            color: #6BB27C;

            font-size: 1.6rem;
            font-weight: 500;
            text-align: center;
        }
    }
`;