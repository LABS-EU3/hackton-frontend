import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { media } from "../index";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";

const entries = [1, 2, 3];

const HackathonProjects = () => {
  const { id } = useParams();
  const events = useSelector(state => state.events.data);
  const event = events.find(event => event.id === Number(id));
  const { event_title } = event;

  return (
    <div>
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>
              Submitted projects for <Strong>"{event_title}"</Strong>
            </H3>
          </RowHead>

          <Column>
            <Card>
              <RowBody>
                {entries.map((e, i) => {
                  return (
                    <SubmissionEntry key={e + i}>
                      <Team>
                        <H3>Cool Team</H3>
                      </Team>
                      <Description>
                        Cool description about the project submission. Could be
                        a little bit longer so we need to trim it down on the
                        project submissions page.
                      </Description>
                      <Rating>
                        {e === 2 ? "Not rated." : "⭐️⭐️⭐️⭐️⭐️"}
                      </Rating>
                      <Link to={`projects/${i}`}>
                        <Button color="blue">View</Button>
                      </Link>
                    </SubmissionEntry>
                  );
                })}
              </RowBody>
              <Link to={`/dashboard/event/${id}`}>
                <Button color="grey">Back to event</Button>
              </Link>
            </Card>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default HackathonProjects;

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const Card = styled(CardWide)`
  width: 800px;
`;

const Team = styled.div`
  display: block;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Description = styled(Paragraph)`
  display: block;
  max-width: 240px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubmissionEntry = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c8c8c8;
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

const Rating = styled.div``;
