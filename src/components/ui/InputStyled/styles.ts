import styled from "styled-components";
import { theme } from "../../../styles/variables";

export const InputStyle = styled.input`
    padding: 1rem;
    
    color: ${theme.baseColor};
    font-size: 1.2rem;
    
    width: 100%;

    &::placeholder {
        color: ${theme.bgLightColor};
        letter-spacing: 0.1rem;

    }
    
    &:focus,
    &:active{
        outline: 1px solid ${theme.baseColor};
    }

    background: ${theme.bgDarkColor};
    border: 1px solid ${theme.bgLightColor};
    border-radius: ${theme.baseBRadius};
`