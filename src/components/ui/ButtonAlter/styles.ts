import styled, { css } from "styled-components";

export const ButtonAlterStyle = styled.input`
    ${({ theme }) => theme && css`

    padding: 1rem 2rem;

    color: ${theme.baseColor};
    
    background: ${theme.bgDarkColor};
    
    border: 2px solid ${theme.bgLightColor};
    border-radius: 4px;

    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    font-weight: 400;

    cursor: pointer;
    `}
`