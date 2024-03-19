import {
  LiElement,
  ListSection,
  PInSList,
  SpanInList,
} from "../styled-components/styledComponents";

const List = () => {
  return (
    <ListSection>
      <LiElement>
        <PInSList>10K+</PInSList>
        <SpanInList>companies</SpanInList>
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
  );
};

export default List;
