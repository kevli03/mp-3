import { Link } from "react-router";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 0.7vh 0.7vw;
    background-color: darkolivegreen;
    font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
    font-size: calc(1px + 1.5vw);
    @media screen and (max-width: 750px) {
        padding: 1vh 0.7vw;
        font-size: calc(1px + 2vw);
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Kevin Li <Link to={"/credits"}>Credits</Link> &copy;</p>
        </StyledFooter>
    );
}
