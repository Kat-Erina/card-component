import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import mobileImage from "./assets/image-header-mobile.jpg";
import desktopImage from "./assets/image-header-desktop.jpg";

const GlobalStyles = createGlobalStyle`
* {padding:0;
margin:0;
box-sizing:border-box}
body{
 height: 100vh;
 width:100vw;
 background-color:purple;
}
#root{
  height: 100%;
  width:100%;

}`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainStyle>
        <SectionStyledComponent>
          <ImageSection>
            <Image src={mobileImage}></Image>
            <OverlayComponent />
          </ImageSection>
          <Section>
            <Header>
              Get <Span>insights</Span> that help your business grow.
            </Header>
            <PStyled>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience and overall efficiency.
            </PStyled>
            <ListSection>
              <LiElement>
                <PInSList>10K+</PInSList>
                <SpanInList>companiess</SpanInList>
              </LiElement>
              <LiElement>
                <PInSList>314</PInSList>
                <SpanInList>templates</SpanInList>
              </LiElement>
              <LiElement>
                <PInSList>12M+</PInSList>
                <SpanInList>quesries</SpanInList>
              </LiElement>
            </ListSection>
          </Section>
        </SectionStyledComponent>
      </MainStyle>
    </>
  );
}

export default App;

const MainStyle = styled.main`
  height: 100%;
  width: 100%;
  padding: 88px 24px;
  background-color: #0a0c1c;
`;

const SectionStyledComponent = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1b1937;
  border-radius: 0.5rem;
  box-shadow: 0px 20px 20px -10px rgba(23, 25, 41, 0.2);
`;

const ImageSection = styled.section`
  height: 50%;
  width: 100%;
  position: relative;
  /* background-image: url(${mobileImage});
  background-size: auto;
  background-repeat: no-repeat;
  /* background-position: center; */
  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #653285;
    opacity: 0.65;
    z-index: 1;
  } */
  /* @media screen and (min-width: 800px) {
    background-image: url(${desktopImage});
  }  */
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const OverlayComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4f1574;
  opacity: 0.6;
`;

const Section = styled.section`
  padding: 40px 32px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  color: white;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;

  text-align: center;
  padding: 10px;
  margin-bottom: 1rem;
`;

const Span = styled.span`
  color: #ab5cdb;
`;

const PStyled = styled.p`
  display: flex;
  color: #fff;

  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 40px;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const ListSection = styled.ul`
  background-color: white;
  padding: 3.2rem, 2rem;
  text-align: center;
`;

const LiElement = styled.li`
  margin-bottom: 24px;
  list-style: none;
`;

const PInSList = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SpanInList = styled.span`
  text-align: center;
  font-family: "Lexend Deca";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
