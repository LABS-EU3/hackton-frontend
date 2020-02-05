import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { media } from "../index";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import Nav from "../molecules/Nav";
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
import { useSubmissions } from "../../hooks";
import Spinner from "../molecules/Spinner";

const HackathonProjects = () => {
  const { id } = useParams();
  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const [submissions, fetchSubmissions, loading] = useSubmissions(id);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>
              Submitted projects for <Strong>"{event_title}"</Strong>
            </H3>
          </RowHead>

          <Column>
            <Card>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <RowBody>
                    {submissions.length === 0 &&
                      "No projects were submitted for this hackathon."}
                    {submissions.map((s, i) => {
                      return (
                        <SubmissionEntry key={s.id}>
                          <Team>
                            <H3>
                              {s.participant_or_team_name || s.project_title}
                            </H3>
                          </Team>
                          <Description>{s.project_writeups}</Description>
                          {s.average_rating > 0 ? (
                            <RatingGroup>
                              <Rating
                                initialRating={s.average_rating}
                                readonly
                                emptySymbol={
                                  <img alt="Rubric star" src={emptyStar} />
                                }
                                fullSymbol={
                                  <img alt="Rubric star" src={fullStar} />
                                }
                              />
                              <JudgeCount>
                                {`${s.acted_judges}/${s.number_of_judges +
                                  1} voted`}
                              </JudgeCount>
                            </RatingGroup>
                          ) : (
                            "Not rated."
                          )}
                          <Button
                            anchor
                            color="blue"
                            to={`/dashboard/event/${id}/project/${s.id}`}
                          >
                            View
                          </Button>
                        </SubmissionEntry>
                      );
                    })}
                  </RowBody>
                  <Button anchor to={`/dashboard/event/${id}`} color="grey">
                    Back to event
                  </Button>
                </>
              )}
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

  @media ${media.tablet} {
    max-width: 100%;
    margin: 0 0 20px 0;
    padding: 0 20px;
  }

  @media ${media.mobile} {
    padding: 0;
  }
`;

const RatingGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.tablet} {
    margin: 0 0 20px 0;
  }
`;

const JudgeCount = styled.span`
  font-size: 12px;
  margin: 5px 0 0 0;
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
