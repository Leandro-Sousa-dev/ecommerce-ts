import styled from "styled-components";

export const Cupom = styled.form`
    width: 100%;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    label{
        display: flex;
        flex-direction: column;

        font-weight: 300;
        font-size: 1.2rem;
    }

    input{
        margin-top: 0.3rem;
        max-width: 30rem;
    }

    @media (min-width: 640px){
        flex-direction: row;
        align-items: end;
        gap: 2rem;

    }
`