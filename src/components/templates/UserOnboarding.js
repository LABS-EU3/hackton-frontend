import React from "react";
import { FormLayout, Header, Footer } from "../organisms/index";

const UserOnboarding = ({
  ctaText,
  imageType,
  imageText,
  formHeader,
  formParagraph
}) => {
  return (
    <div>
      <Header />
      <FormLayout
        ctaText={ctaText}
        imageType={imageType}
        imageText={imageText}
        formHeader={formHeader}
        formParagraph={formParagraph}
      />
      <Footer />
    </div>
  );
};

export default UserOnboarding;
