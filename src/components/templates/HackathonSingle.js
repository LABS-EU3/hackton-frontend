import React from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
import Button from "../atoms/Button";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

export const EventCardWide = styled(CardWide)`
  width: 60%;
`;

export const RegisterCardWide = styled(CardWide)`
  width: 30%;
  padding: 0px;
  height: 50%;
  border:none;
  box-shadow: none;
  background-color: #FAFAFA;

  button {
    margin-left:10px;
    margin-top:10px;
    width: 100%;
  }
`;

export const TagsCardWide = styled(CardWide)`
  width: 100%;
  padding: 20px;
  height: 80%;
  line-height: 30px;
  .tags-header {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: 1px solid lightgray;
  }
  .status {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid lightgray;
  }
  .date {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid lightgray;
  }
  .tags {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: none;
    text-align: center;
    div {
      display: flex;
      flex-direction: row;
      h5 {
        background-color: #fbe192;
        width: 30%;
        margin: 10px;
      }
    }
  }
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

const Onboarding = () => {
  const { id } = useParams();
  const history = useHistory();

  // Filter out event by URL param & grab user ID
  const events = useSelector(state => state.events.data);
  const event = events.find(event => event.id === Number(id));
  const { userId } = useSelector(state => state.currentUser);

  console.log("events body", event);
  // Destructure object inside array
  const {
    creator_id,
    event_title,
    event_description: description,
    start_date,
    end_date,
    guidelines,
    participation_type,
    location
  } = event;

  // Grab the first letter of title
  const initial = event_title[0];

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
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>{event_title}</H3>
          </RowHead>

          <RowBody>
            <EventCardWide className="single-event">
              <TitleContainer>
                <StyledLetterIcon>{initial}</StyledLetterIcon>
                <H2>{event_title}</H2>
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
                    <Button color="grey">Back to Dashboard</Button>
                  </Link>
                  {creator_id === userId ? (
                    <Link to={"#"}>
                      <Button color="blue" onClick={handleEditClick}>
                        Edit
                      </Button>
                    </Link>
                  ) : null}
                </div>
              </ButtonsGroup>
            </EventCardWide>
            <RegisterCardWide>
              <TagsCardWide>
                <div className="tags-header">
                  <StyledLetterIcon>{initial}</StyledLetterIcon>
                  <div>
                    <h4>Hosted by:</h4>
                    <h5>Mildred Pascal</h5>
                  </div>
                </div>
                <div className="status">
                  <h4>
                    Status: <span>Open</span>
                  </h4>
                  <h5>
                    Type: <span>{participation_type}</span>
                  </h5>
                </div>
                <div className="date">
                  <h4>
                    From: <span>{formattedStartDate}</span>
                  </h4>
                  <h5>
                    To: <span>{formattedEndDate}</span>
                  </h5>
                </div>
                <div className="tags">
                  <div>
                    <h5>Tag1</h5>
                    <h5>Tag1</h5>
                    <h5>Tag1</h5>
                  </div>
                  <div>
                    <h5>Tag1</h5>
                    <h5>Tag1</h5>
                    <h5>Tag1</h5>
                  </div>
                </div>
              </TagsCardWide>
              <Button color="green">Register</Button>
            </RegisterCardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
