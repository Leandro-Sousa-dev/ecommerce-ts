import { MenuOpenProp } from "@interfaces/MenuOpenProp";
import styled, { css } from "styled-components";

export const DashboardContainer = styled.div<MenuOpenProp>`
    ${({ theme, $isMenuOpen }) => css`
        color: ${theme.baseColor};
        height: 100vh;
        background: red;

        justify-self: end;

        width:${$isMenuOpen ? "calc(100% - 15rem)" : "100%"};   
        transition: 0.3s ease-in-out;
    `}
`