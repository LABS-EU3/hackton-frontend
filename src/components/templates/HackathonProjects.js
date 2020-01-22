import React, { useEffect } from "react";
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
import Rating from "react-rating";
import emptyStar from "../../assets/star-hollow.png";
import fullStar from "../../assets/star-full.png";
import { fetchAllSubmissions } from "../../store/projectSubmission/actions";

const HackathonProjects = () => {
  const { id } = useParams();
  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const { submissions } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSubmissions(Number(id)));
  }, [id, dispatch]);

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
                {submissions.map((s, i) => {
                  return (
                    <SubmissionEntry key={s.id}>
                      <Team>
                        <H3>{s.participant_or_team_name}</H3>
                      </Team>
                      <Description>{s.project_writeups}</Description>
                      <Rating
                        initialRating={2 + i}
                        readonly
                        emptySymbol={<img alt="Rubric star" src={emptyStar} />}
                        fullSymbol={<img alt="Rubric star" src={fullStar} />}
                      />
                      <Link to={`/dashboard/event/${id}/project/${s.id}`}>
                        <Button color="blue">View</Button>
                      </Link>
                    </SubmissionEntry>
                  );
                })}
              </RowBody>
              <Button anchor to={`/dashboard/event/${id}`} color="grey">
                Back to event
              </Button>
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
