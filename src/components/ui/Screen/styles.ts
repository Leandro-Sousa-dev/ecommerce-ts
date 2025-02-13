import styled, { css } from "styled-components";

export const Screen = styled.div`
  ${({ theme }) => theme && css`
    background: ${theme.bgBaseColor};

  `}
`;