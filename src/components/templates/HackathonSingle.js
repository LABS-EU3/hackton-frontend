import React from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H2, H3 } from "../atoms/Heading";
import { BoldSpan } from "../atoms/Span";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { CardWide } from "../atoms/Card";
import { LetterIcon } from "../atoms/Icon";
import { Paragraph } from "../atoms/Paragraph";
import { ButtonGradientGrey, ButtonGradientBlue } from "../atoms/Button";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const TitleContainer = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  align-items: baseline;
`;

const StyledLetterIcon = styled(LetterIcon)`
  margin: 0 20px 0 0 !important;
`;

const Details = styled.div`
  display: flex;

  & div {
    margin: 0 20px 0 0;
  }
`;

const ButtonsGroup = styled(Details)`
  margin: 40px 0 0 0;

  a {
    margin: 0 10px 0 0;
  }
`;

const Separator = styled.hr`
  border-top: 0;
  border-bottom: 1px solid #c3cfd9;
  margin: 0 0 20px 0;
`;

const Onboarding = ({ user }) => {
  const { id } = useParams();
  const history = useHistory();

  // Filter out event by URL param & grab user ID
  const events = useSelector(state => state.events.data);
  const event = events.filter(event => event.id === Number(id));
  const { token } = useSelector(state => state.currentUser);
  const { subject } = jwtDecode(token);
  const userId = subject;

  // Destructure object inside array
  const [
    {
      creator_id,
      event_title: title,
      event_description: description,
      start_date,
      end_date,
      guidelines,
      location
    }
  ] = event;

  // Grab the first letter of title
  const initial = title && title.charAt(0);

  // Date formatting
  const startDate = start_date.split("T")[0];
  const startDateArr = startDate.split("-");
  const formattedStartDate =
    startDateArr[2] + "-" + startDateArr[1] + "-" + startDateArr[0];

  const endDate = end_date.split("T")[0];
  const endDateArr = endDate.split("-");
  const formattedEndDate =
    endDateArr[2] + "-" + endDateArr[1] + "-" + endDateArr[0];

  const handleEditClick = e => {
    e.preventDefault();
    history.push(`/dashboard/event/${id}/edit`);
  };

  return (
    <div>
      <UserHeader user={user} />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>{title}</H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <TitleContainer>
                <StyledLetterIcon>{initial}</StyledLetterIcon>
                <H2>{title}</H2>
              </TitleContainer>

              <Paragraph>
                <BoldSpan>Description:</BoldSpan>
                {description}
              </Paragraph>

              <Separator />

              <Details>
                <div>
                  <Paragraph>
                    <BoldSpan>Event starts:</BoldSpan>
                    {formattedStartDate}
                  </Paragraph>
                </div>

                <div>
                  <Paragraph>
                    <BoldSpan>Event ends:</BoldSpan>
                    {formattedEndDate}
                  </Paragraph>
                </div>
              </Details>

              <Separator />

              <Details>
                <div>
                  <Paragraph>
                    <BoldSpan>Location:</BoldSpan>
                    {location}
                  </Paragraph>
                </div>
              </Details>

              <Separator />

              <Paragraph>
                <BoldSpan>Guidelines:</BoldSpan>
                {guidelines}
              </Paragraph>

              <ButtonsGroup>
                <div>
                  <Link to={"/dashboard"}>
                    <ButtonGradientGrey>Back to Dashboard</ButtonGradientGrey>
                  </Link>
                  {creator_id === userId ? (
                    <Link to={"#"}>
                      <ButtonGradientBlue onClick={handleEditClick}>
                        Edit
                      </ButtonGradientBlue>
                    </Link>
                  ) : null}
                </div>
              </ButtonsGroup>
            </CardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
