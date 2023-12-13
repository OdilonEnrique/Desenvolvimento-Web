import styled from "styled-components";

export const AppContainer = styled.div`
    display: grid;
    place-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.colors.backgroundPage};
    color: ${({theme}) => theme.colors.text}
`