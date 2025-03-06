import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: darkolivegreen;
    font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
    @media (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Kevin Li</h1>
            <p>Resume</p>
        </StyledHeader>
    );
}
