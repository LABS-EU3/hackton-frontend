import React, { useState } from "react";
import styled from "styled-components";
import Rating from "react-rating";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { media } from "../index";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import emptyStar from "../../assets/star-hollow.png";
import fullStar from "../../assets/star-full.png";

const HackathonSingleProject = () => {
  const { id } = useParams();
  const events = useSelector(state => state.events.data);
  console.log("EVENTS: ", events);
  const event = events.find(event => event.id === Number(id));
  console.log("EVENT: ", event);

  const { event_title } = event;

  const [grade, setGrade] = useState({});

  const changeHandler = rate => {
    console.log("RATING IS: ", rate);
  };

  return (
    <div>
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>
              Submitted project for <Strong>"{event_title}"</Strong>
            </H3>
          </RowHead>

          <Column>
            <Card>
              <SubmissionEntry>
                <Team>
                  <H3>Cool Team</H3>
                </Team>
                <Label htmlFor="project_writeup">Project writeup</Label>
                <Description id="project_writeup">
                  Cool description about the project submission. Could be a
                  little bit longer so we need to trim it down on the project
                  submissions page. Cool description about the project
                  submission. Could be a little bit longer so we need to trim it
                  down on the project submissions page. Cool description about
                  the project submission. Could be a little bit longer so we
                  need to trim it down on the project submissions page.
                </Description>
                <Label htmlFor="rubrics">Ratings</Label>
                <Rubrics id="rubrics">
                  <div>
                    Presentation{" "}
                    <Rating
                      id="presentation"
                      onChange={changeHandler}
                      emptySymbol={<img src={emptyStar} />}
                      fullSymbol={<img src={fullStar} />}
                    />
                  </div>
                  <div>
                    Market Fit{" "}
                    <Rating
                      onChange={changeHandler}
                      emptySymbol={<img src={emptyStar} />}
                      fullSymbol={<img src={fullStar} />}
                    />
                  </div>
                  <div>
                    Innovation{" "}
                    <Rating
                      onChange={changeHandler}
                      emptySymbol={<img src={emptyStar} />}
                      fullSymbol={<img src={fullStar} />}
                    />
                  </div>
                </Rubrics>
                <Label htmlFor="feedback">Feedback</Label>
                <Feedback wide id="feedback" />
              </SubmissionEntry>
              <Link to={`/dashboard/event/${id}/projects`}>
                <Button color="grey">Back to projects</Button>
              </Link>
              <Link to={`/dashboard/event/${id}/projects`}>
                <Button color="green">Submit Grading</Button>
              </Link>
            </Card>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default HackathonSingleProject;

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const Card = styled(CardWide)`
  width: 800px;
`;

const Team = styled.div`
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  padding: 0 0 10px 0;
  margin: 0 0 20px 0;

  h3 {
    font-size: 22px;
    font-weight: bold;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Description = styled(Paragraph)`
  display: block;
  margin: 0;
  border-bottom: 1px solid #c8c8c8;
  padding: 0 0 20px 0;
  margin: 0 0 20px 0;
`;

const SubmissionEntry = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: 0;
  }

  @media ${media.tablet} {
    flex-direction: column;
  }
`;

const Rubrics = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  padding: 0 0 20px 0;
  margin: 0 0 20px 0;

  div {
    margin: 0 0 10px 0;
  }
`;

const Feedback = styled.textarea`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #212121;
  border: 1px solid #c8c8c8;
  border-radius: 6px;
  padding: 10px;
  margin: 0 0 10px 0;
  min-height: 100px;

  &:focus {
    transition: all 0.5s;
    box-shadow: 0 0 3px #ddd;
  }

  ${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};
`;
