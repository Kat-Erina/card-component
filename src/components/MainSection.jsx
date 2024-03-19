import {
  MainStyle,
  SectionStyledComponent,
} from "../styled-components/styledComponents";
import Image from "./Image";
import Section from "./Section";

const MainSection = () => {
  return (
    <MainStyle>
      <SectionStyledComponent>
        <Image />
        <Section />
      </SectionStyledComponent>
    </MainStyle>
  );
};

export default MainSection;
