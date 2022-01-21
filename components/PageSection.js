import styled from "styled-components";
import theme from '../utils/theme';

const PageSection = styled.section`
    width: 100%;
    height: 100vh;
    background-color: lightgoldenrodyellow;
    padding: 0 ${props => props.theme.space[5]} 0 ${props => props.theme.space[5]};

    display: flex;
`;

export default PageSection;