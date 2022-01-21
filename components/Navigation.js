import styled from "styled-components";

const Navbar = styled.nav`
    width: 100%;
    height: 200px;
    padding: 0 2em 0 2em;

    background-color : lightblue;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        justify-content: space-between;
    }
`;

const NavLink = styled.a`
    font-family: ${props => props.theme.fonts.main};
    margin-left: 2em;
    display: none;
    font-weight: 400;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        display: inline-block;
    }
`;

const Navigation = () => {

    return(
        <Navbar>
            <p>Logo</p>
            <div>
                <NavLink>om oss</NavLink>
                <NavLink>kontakt</NavLink>
            </div>
        </Navbar>
    )
}

export default Navigation;