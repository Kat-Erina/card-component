import mobileImage from "../assets/image-header-mobile.jpg";
import {
  ImageSection,
  OverlayComponent,
  ImageElement,
} from "../styled-components/styledComponents";
const Image = () => {
  return (
    <ImageSection>
      <ImageElement src={mobileImage}></ImageElement>
      <OverlayComponent />
    </ImageSection>
  );
};

export default Image;
