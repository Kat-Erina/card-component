import {
  Header,
  Span,
  PStyled,
  StyledSection,
} from "../styled-components/styledComponents";
import List from "./List";

const Section = () => {
  return (
    <StyledSection>
      <Header>
        Get <Span>insights</Span> that help your business grow.
      </Header>
      <PStyled>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience and overall efficiency.
      </PStyled>
      <List />
    </StyledSection>
  );
};

export default Section;
