import React from "react";


import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import HeroImage from "../atoms/HeroImage";
import Form from "./Form";

const FormLayout = ({
  catText,
  imageType,
  imageText,
  formHeader,
  formParagraph
}) => (
  <WideBody>
    <BodyContainer>
      <HeroImage src={imageType} alt={imageText} />
      <Form
        cta={catText}
        formHeader={formHeader}
        formParagraph={formParagraph}
      />
    </BodyContainer>
  </WideBody>
);

export default FormLayout;
