import styled from "styled-components";
import { theme } from "../../../styles/variables";

interface InputWidth {
    $width: string
}

export const InputStyle = styled.input<InputWidth>`
    padding: 1rem;
    
    color: ${theme.baseColor};
    font-size: 1rem;
    
    width: ${({ $width }) => $width ?? ''};

    &::placeholder {
        color: ${theme.bgLightColor};
        letter-spacing: 0.1rem;

    }

    background: ${theme.bgDarkColor};
    border: 1px solid ${theme.bgLightColor};
    border-radius: ${theme.baseBRadius};
`