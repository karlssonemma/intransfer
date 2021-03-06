import theme from '../utils/theme';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import PageSection from '../components/PageSection';
import CtaLink from '../components/CtaLink';

import Image from 'next/image';



export default function Home() {

  const LandingBlock = styled.article`
    width: 100%;
    height: max-content;
    padding: ${props => props.theme.space[5]};

    background-color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 200;
    line-height: 180%;

    z-index: 10;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
      width: 50%;
      padding: 80px;
      padding-right: 200px;
    }
  `;

  const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  `;

  const Heading = styled.h1`
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.space[2]};
    font-weight: 400;
  `;

  const Subtitle = styled.h2`
    margin-bottom: ${props => props.theme.space[2]};

    font-size: ${props => props.theme.fontSizes.l};
    font-family: ${props => props.theme.fonts.main};
    font-weight: 400;
  `;

  const Arrow = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    top: 2px;
  `;

  const AboutText = styled.p`
    font-family: ${props => props.theme.fonts.main};
    line-height: 180%;

    font-weight: 200;
    
    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
      width: 50%;
    }
  `;

  const GridContainer = styled.article`
    display: grid;
    /* background-color: green; */
    width: 100%;
    gap: 50px;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: auto;
    }
  `;
  
  const GridImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    :first-of-type {
      @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        grid-row-start: 1;
        grid-row-end: span 2;
      }
    }
  `;

  const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    max-width: 600px; // vet ej om denna

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
      flex-direction: row;
    }
  `;

  const ContactText = styled.article`
    width: 100%;
    height: max-content; //ikke bra
    /* padding: 0 ${props => props.theme.space[4]}; */
    margin-bottom: ${props => props.theme.space[4]};

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-weight: 200;
    line-height: 180%;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
      text-align: right;
      margin-right: ${props => props.theme.space[5]};
    }
  `;

  const ContactInfo = styled.article`
    width: 100%;
    height: auto; //ikke bra
    padding: ${props => props.theme.space[5]};
    background-color: ${props => props.theme.colors.orange};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `;

  return (
    <>
      <Navigation />
      <PageSection className='landing-section'>
        <BgImage src='/bank-phrom-Tzm3Oyu_6sk-unsplash.jpg' />
        <LandingBlock>
          <Heading>Vi printar logos.</Heading>
          <p>Structured Query Language ??r ett standardiserat programspr??k f??r att h??mta och modifiera data i en relationsdatabas. SQL uttalas bokstav f??r bokstav eller ibland "s'ikuell" som i engelskans "sequel"</p>
          <CtaLink />
        </LandingBlock>
      </PageSection>

      <PageSection className='about-section' id='about'>
        <Subtitle>Subtitle</Subtitle>
        <AboutText>Bacon ipsum dolor amet jowl bacon chislic corned beef ham hock, short loin alcatra rump shank bresaola ham burgdoggen. Cow short loin tenderloin short ribs sausage leberkas pork loin. Shoulder tail rump pig tenderloin t-bone tongue ham ribeye ball tip cupim boudin hamburger. Turducken drumstick boudin, doner ribeye sausage sirloin tail salami pork. Leberkas andouille chuck hamburger short ribs. Pork chop picanha meatloaf biltong ribeye prosciutto brisket kevin. Tri-tip bacon pork loin filet mignon frankfurter burgdoggen, strip steak brisket picanha buffalo beef ribs tenderloin venison.</AboutText>
      </PageSection>

      <PageSection className='image-section'>
        <GridContainer>
          <GridImg
            src='/markus-spiske-hqCEQTc5gZA-unsplash.jpg'
          />
          <GridImg
            src='/bank-phrom-Tzm3Oyu_6sk-unsplash.jpg'
          />
          <GridImg
            src='/mika-baumeister-PtabTe6iJ_8-unsplash.jpg'
          />
        </GridContainer>
      </PageSection>

      <PageSection className='contact-section' id='contact'>
        <ContactContainer>
          <ContactText>
            <Subtitle>Kontakta oss</Subtitle>
            <p>Bacon ipsum dolor amet jowl bacon chislic corned beef ham hock, short loin alcatra rump shank bresaola ham burgdoggen. Cow short loin tenderloin short ribs sausage leberkas pork loin. Shoulder tail rump pig tenderloin t-bone tongue ham ribeye ball tip cupim boudin hamburger.</p>
          </ContactText>
          <ContactInfo>
              <a><Arrow src='/message.png' /> eva@intransfer.se</a>
              <p><Arrow src='/telephone.png' /> eva@intransfer.se</p>
              <p><Arrow src='/placeholder.png' /> eva@intransfer.se</p>  
          </ContactInfo>
        </ContactContainer>
      </PageSection>
    </>
  )
}
