import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 0 0 2vh;
    background-color: peachpuff;
    font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
    }
`;

export const MainAdjust = styled.main`
    height: 100vh;
    @media screen and (max-width: 750px) {
        height: 90vh;
    }
`;

export const Title = styled.h3`
    text-align: center;
    margin: 2vh 0;
    font-size: calc(1px + 3vw);
    @media screen and (max-width: 750px) {
        margin: 2vh 0 1vh;
    }
`;

export const StyledH4 = styled.h4`
    margin: 2vh 2vw 0.5vh;
    font-size: calc(1px + 2.5vw);
    @media screen and (max-width: 750px) {
        margin: 1vh 2vw 0.25vh;
    }
`;

export const StyledH5 = styled.h5`
    margin: 1vh 2vw;
    font-size: calc(1px + 2vw);
    @media screen and (max-width: 750px) {
        margin: 0.25vh 2vw;
    }
`;

export const Details = styled.ul`
    margin: 0 2vw;
    font-size: calc(1px + 1.5vw);
    @media screen and (max-width: 750px) {
        margin: 0 2vw;
    }
`;

export const LongList = styled.ul`
    margin: 0 2vw;
    font-size: calc(1px + 1.5vw);
    @media screen and (max-width: 750px) {
        margin: 0 0;
    }
`;
