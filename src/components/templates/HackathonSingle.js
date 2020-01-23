import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
import user_icon from "../../assets/user_icon.svg";

import {
  fetchAllParticipants,
  registerEvent,
  unregisterEvent
} from "../../store/eventParticipants/actions";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

export const NormalSpan = styled(BoldSpan)`
  font-weight: normal;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  padding-bottom: 10px;
  margin-right: 10px;
`;

export const PTags = styled(Paragraph)`
  background-color: #fbe192;
  margin: 10px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const PHosted = styled(Paragraph)`
  font-size: 12px;
  color: darkgray;
`;

export const EventCardWide = styled(CardWide)`
  width: 60%;
`;

export const RegisterCardWide = styled(CardWide)`
  width: 30%;
  padding: 0px;
  height: 50%;
  border: none;
  box-shadow: none;
  background-color: #f2f2f2;
  opacity: 1;
  button {
    margin-left: 10px;
    margin-top: 10px;
    width: 100%;
  }
`;

export const TagsCardWide = styled(CardWide)`
  width: 100%;
  padding: 20px;
  height: 80%;
  line-height: 30px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  .tags-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
  .status {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
  .date {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
  .tags {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: none;
    text-align: center;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const TitleContainer = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  align-items: baseline;
`;

const JudgesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .judge-header {
    padding: 10px;
    display: flex;
    flex-direction: row;
  }
  .judge-name {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
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

const HackathonSingle = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { participants } = useSelector(state => state);
  const { userId } = useSelector(state => state.currentUser);

  // Filter out event by URL param & grab user ID
  const {
    creator_id,
    event_title,
    event_description: description,
    start_date,
    end_date,
    guidelines,
    participation_type,
    tag_name,
    location,
    organizer_email,
    organizer_name
  } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );

  // Date formatting
  const formattedStartDate = new Date(start_date).toLocaleDateString();
  const formattedEndDate = new Date(end_date).toLocaleDateString();

  // Event is open or closed for registration
  const today = new Date().getTime();
  const startTime = new Date(start_date).getTime();
  const endTime = new Date(end_date).getTime();
  const isOpen = today <= startTime;
  const isRegistered = participants.find(p => p.user_id === userId);
  const isEnded = today > endTime;

  useEffect(() => {
    dispatch(fetchAllParticipants(id));
  }, [dispatch, id]);

  // Number of participants registered
  const registeredPartcipants = participants.length;

  // Redacting user emails before rendering
  let redactedEmail = organizer_email.split("");
  let atIndex = redactedEmail.indexOf("@");
  let emailUser = redactedEmail.slice(0, atIndex);
  let emailHost = redactedEmail.slice(atIndex, redactedEmail.length);

  emailUser = emailUser
    .map((redact, index) => {
      if (index === 0 || index === emailUser.length - 1) {
        return redact;
      } else {
        redact = "*";
        return redact;
      }
    })
    .concat(emailHost)
    .join("");

  // Grab the first letter of title
  const initial = event_title[0];

  const handleRegistration = e => {
    e.preventDefault();
    if (isRegistered) {
      return dispatch(unregisterEvent(id, history));
    }
    return dispatch(registerEvent(id, history));
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
              <Separator />
              <Paragraph>
                <BoldSpan>Rubrics:</BoldSpan>
                {guidelines}
              </Paragraph>
              <Separator />
              <JudgesContainer>
                <div className="judge-header">
                  <BoldSpan>Judges:</BoldSpan>
                </div>
                <div className="judge-name">
                  <Image src={user_icon} alt="user_icon" />
                  <Paragraph>Mildred Pascal</Paragraph>
                  <Image src={user_icon} alt="user_icon" />
                  <Paragraph>Mildred Pascal</Paragraph>
                  <Image src={user_icon} alt="user_icon" />
                  <Paragraph>Mildred Pascal</Paragraph>
                </div>
              </JudgesContainer>
              <Separator />
              <JudgesContainer>
                <div className="judge-header">
                  <BoldSpan>
                    Registered Participants: {registeredPartcipants}
                  </BoldSpan>
                </div>
              </JudgesContainer>
              <ButtonsGroup>
                <div>
                  <Button anchor to={"/dashboard"} color="grey">
                    Back to Dashboard
                  </Button>
                  {creator_id === userId && (
                    <Button
                      anchor
                      to={`/dashboard/event/${id}/edit`}
                      color="blue"
                    >
                      Edit event
                    </Button>
                  )}
                </div>
              </ButtonsGroup>
            </EventCardWide>
            <RegisterCardWide>
              <TagsCardWide>
                <div className="tags-header">
                  <Image src={user_icon} alt="user_icon" />
                  <div>
                    <BoldSpan>Hosted by:</BoldSpan>
                    {organizer_name !== null ? (
                      <PHosted>{organizer_name}</PHosted>
                    ) : (
                      <PHosted>{emailUser}</PHosted>
                    )}
                  </div>
                </div>
                <div className="status">
                  <BoldSpan>
                    Status:
                    <NormalSpan>{isOpen ? " Open" : " Closed"}</NormalSpan>
                  </BoldSpan>
                  <BoldSpan>
                    Participation type:{" "}
                    <NormalSpan>{participation_type}</NormalSpan>
                  </BoldSpan>
                </div>
                <div className="date">
                  <BoldSpan>
                    From: <NormalSpan>{formattedStartDate}</NormalSpan>
                  </BoldSpan>
                  <BoldSpan>
                    To: <NormalSpan>{formattedEndDate}</NormalSpan>
                  </BoldSpan>
                </div>
                <div className="tags">
                  <BoldSpan>Event Tags</BoldSpan>
                  <div>
                    {tag_name && tag_name.length !== 0 ? (
                      tag_name.map((tagged, index) => {
                        return <PTags key={index}>{tagged}</PTags>;
                      })
                    ) : (
                      <Paragraph>No tags provided for this event</Paragraph>
                    )}
                  </div>
                </div>
              </TagsCardWide>
              {creator_id === userId && !isEnded ? (
                <div>
                  <Button
                    anchor
                    to={`/dashboard/event/${id}/team`}
                    color="green"
                  >
                    Add Co-organizer or Judges
                  </Button>
                </div>
              ) : (
                <div>
                  {!isOpen ? (
                    <Button
                      style={{
                        border: "2px solid lightgray",
                        color: "lightgray"
                      }}
                      color="grey"
                      disabled
                    >
                      Registration Closed
                    </Button>
                  ) : (
                    <Button
                      color={isRegistered ? "grey" : "green"}
                      onClick={handleRegistration}
                    >
                      {isRegistered ? `Unregister` : `Register`}
                    </Button>
                  )}
                </div>
              )}
            </RegisterCardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default HackathonSingle;
