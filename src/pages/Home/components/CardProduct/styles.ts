import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    div:first-child {
        width: 100%;

        img {
            width: 100%;
            height: auto
            object-fit: cover;
        }
    }

    div:nth-child(2) {
        padding: 40px 20px;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        background: #130234;

        color: #fff;
    }
`;