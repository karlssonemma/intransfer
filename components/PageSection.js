import styled from "styled-components";
import theme from '../utils/theme';

const PageSection = styled.section`
    width: 100%;
    min-height: 100vh;
    height: max-content;
    background-color: white;
    padding: 0 ${props => props.theme.space[5]} 0 ${props => props.theme.space[5]};

    display: flex;
    //annan løsning bætter om man vill ændra font i framtiden
    font-family: ${props => props.theme.fonts.main};

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
      //padding
        padding: 200px;
    }
`;

export default PageSection;