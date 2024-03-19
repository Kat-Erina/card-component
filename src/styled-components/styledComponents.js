import styled from "styled-components";

export const MainStyle = styled.main`
  min-height: 100%;
  width: 100%;
  padding: 6rem 0;
  background-color: #0a0c1c;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1400px) {
    padding: 11rem 9.5rem;
  }
`;

export const SectionStyledComponent = styled.section`
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

export const ImageSection = styled.section`
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

export const ImageElement = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const OverlayComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #4f1574;
  opacity: 0.6;
`;

export const StyledSection = styled.section`
  padding: 3.2rem 2rem;
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

export const Header = styled.h1`
  color: white;
  font-size: 1.75rem;
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
    font-size: 2.25rem;
    line-height: 2rem;
    text-align: start;
    padding-left: 0;
  }
  @media screen and (min-width: 1400px) {
    width: 26rem;
    line-height: 2.75rem;
  }
`;

export const Span = styled.span`
  color: #ab5cdb;
`;

export const PStyled = styled.p`
  display: flex;
  color: #fff;
  text-align: center;
  font-size: 1.06rem;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 2.5rem;
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

    line-height: 25px;
    margin-bottom: 70px;
  }
`;

export const ListSection = styled.ul`
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

export const LiElement = styled.li`
  padding-bottom: 1.5rem;
  list-style: none;
`;

export const PInSList = styled.p`
  font-size: 1.5rem;
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
export const SpanInList = styled.span`
  text-align: center;
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
