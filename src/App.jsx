import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import mobileImage from "./assets/image-header-mobile.jpg";

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
                <SpanInList>queries</SpanInList>
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
  min-height: 100%;
  width: 100%;
  padding: 6rem 0;
  background-color: #0a0c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1400px) {
    padding: 177px 150px;
  }
`;

const SectionStyledComponent = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  background-color: #1b1937;
  border-radius: 0.5rem;
  box-shadow: 0px 20px 20px -10px rgba(23, 25, 41, 0.2);
  @media screen and (min-width: 950px) {
    width: 75%;
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row-reverse;
    width: 80%;
  }
`;

const ImageSection = styled.section`
  height: 16rem;
  width: 100%;
  position: relative;
  @media screen and (min-width: 500px) {
    height: 350px;
  }
  @media screen and (min-width: 1000px) {
    height: auto;
    flex: 1;
  }
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
  flex: 1;
  @media screen and (min-width: 1000px) {
  }
  @media screen and (min-width: 1400px) {
    height: auto;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.h1`
  color: white;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;
  padding: 10px;
  margin-bottom: 1rem;
  @media screen and (min-width: 750px) {
    font-size: 3rem;
    line-height: 4rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 36px;
    line-height: 2rem;
    text-align: start;
    padding-left: 0;
  }
  @media screen and (min-width: 1400px) {
    width: 26rem;
    line-height: 44px;
  }
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
  @media screen and (min-width: 750px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 15px;
    line-height: 1.5;
    text-align: start;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 1400px) {
    width: 26rem;
    float: left;
    line-height: 25px;
    margin-bottom: 70px;
  }
`;

const ListSection = styled.ul`
  padding: 3.2rem, 2rem;
  text-align: center;
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    width: 100%;
  }
  @media screen and (min-width: 1400px) {
    width: 26rem;
  }
`;

const LiElement = styled.li`
  padding-bottom: 24px;
  list-style: none;
`;

const PInSList = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: white;
  @media screen and (min-width: 750px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
    text-align: start;
  }
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
  color: white;
  @media screen and (min-width: 1000px) {
    font-size: 12px;
  }
`;
