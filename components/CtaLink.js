import styled from 'styled-components';


const Link = styled.a`
    display: block;
    color: ${props => props.theme.colors.orange};
    cursor: pointer;
    margin-top: ${props => props.theme.space[2]};
    font-weight: 400;
    :hover {
      text-decoration: underline;
    }
`;

const Arrow = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    position: relative;
    top: 8px;

    color: orange;
`;

const CtaLink = () => {

    return(
        <Link><Arrow src='/arrow.png'/> Vill ni veta mer? Kontakta oss</Link>
    )
}


export default CtaLink;