import React from "react";
import { FormLayout, Header, Footer } from "../organisms/index";

const Unboarding = ({ catText, imageType, imageText, formHeader, formParagraph }) => {
  return (
    <div>
      <Header />
      <FormLayout
        catText={catText}
        imageType={imageType}
        imageText={imageText}
        formHeader={formHeader}
        formParagraph={formParagraph}
      />
      <Footer />
    </div>
  );
};

export default Unboarding;
