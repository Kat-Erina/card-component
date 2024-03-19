// import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import mobileImage from "./assets/image-header-mobile.jpg";

import {
  MainStyle,
  SectionStyledComponent,
  ImageSection,
  Image,
  OverlayComponent,
  Section,
  Header,
  PStyled,
  LiElement,
  ListSection,
  PInSList,
  SpanInList,
  Span,
} from "./styled-components/styledComponents";
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
