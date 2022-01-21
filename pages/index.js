import theme from '../utils/theme';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import PageSection from '../components/PageSection';

import Image from 'next/image';



export default function Home() {

  const LandingBlock = styled.article`
    width: 100%;
    height: max-content;
    padding: ${props => props.theme.space[5]};
    background-color: green;
    font-family: ${props => props.theme.fonts.main};
  `;

  const Heading = styled.h1`
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.space[2]};
  `;

  const CtaLink = styled.a`
    color: ${props => props.theme.colors.orange};
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  `;

  return (
    <>
      <Navigation />
      <PageSection style={{justifyContent: 'center', alignItems: 'flex-end',
      padding: '0'}}>
        <LandingBlock>
          <Heading>Vi printar logos.</Heading>
          <p>Structured Query Language är ett standardiserat programspråk för att hämta och modifiera data i en relationsdatabas. SQL uttalas bokstav för bokstav eller ibland "s'ikuell" som i engelskans "sequel"</p>
          <CtaLink><Image src='/arrow.png' width={200} height={200} />Vill ni veta mer? Kontakta oss här</CtaLink>
        </LandingBlock>
      </PageSection>
    </>
  )
}
