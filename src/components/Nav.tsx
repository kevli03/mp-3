import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    text-align: center;
    background-color: lightsteelblue;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        text-align: center;
    }
`;

const NavLi = styled.li`
    width: 85%;
    padding: 1vh 0;
    margin: 2vh auto;
    font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
    font-size: calc(2px + 1.75vw);
    background-color: lightgray;
    @media screen and (max-width: 750px) {
        width: 10%;
        padding: 0.5vh 1vw;
        margin: 1vh auto;
        font-size: calc(1px + 1vw);
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

export default function Header() {
    return (
        <StyledNav>
            <NavUl>
                <NavLi><NavLink to={"/"}>Home</NavLink></NavLi>
                <NavLi><NavLink to={"/education"}>Education</NavLink></NavLi>
                <NavLi><NavLink to={"/research"}>Research</NavLink></NavLi>
                <NavLi><NavLink to={"/experience"}>Experience</NavLink></NavLi>
                <NavLi><NavLink to={"/projects"}>Projects</NavLink></NavLi>
                <NavLi><NavLink to={"/knowledge"}>Areas of Knowledge</NavLink></NavLi>
                <NavLi><NavLink to={"/skills"}>Skills</NavLink></NavLi>
            </NavUl>
        </StyledNav>
    );
}
