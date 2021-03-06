import styled from "styled-components";
import Image from "next/image";

const Navbar = styled.nav`
    width: 100%;
    height: 200px;
    padding: 0 2em 0 2em;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        justify-content: space-between;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        padding: 0 200px;
    }
`;

const NavLink = styled.a`
    font-family: ${props => props.theme.fonts.main};
    margin-left: 2em;
    display: none;
    font-weight: 400;
    scroll-behavior: smooth;
    text-decoration: none;
    color: black;

    &:hover {
        color: ${props => props.theme.colors.orange};
    }

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        display: inline-block;
    }
`;

const Logo = styled.img`
    width: 300px;
    height: auto;
`;

const Navigation = () => {

    return(
        <Navbar>
            <a href='#'><Logo src='/logo.png' /></a>
            
            <div>
                <NavLink href="#about">om oss</NavLink>
                <NavLink href="#contact">kontakt</NavLink>
            </div>
        </Navbar>
    )
}

export default Navigation;