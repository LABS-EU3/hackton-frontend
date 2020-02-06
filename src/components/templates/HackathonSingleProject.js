import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from "react-rating";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { media } from "../index";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import Nav from "../molecules/Nav";
import BodyContainer from "../atoms/BodyContainer";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import emptyStar from "../../assets/star-hollow.png";
import fullStar from "../../assets/star-full.png";
import { gradeSubmission } from "../../store/projectSubmission/actions";
import { useJudges, useGrades, useSubmissions } from "../../hooks";

const HackathonSingleProject = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, projectId } = useParams();
  const { event_title, rubrics } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const judges = useJudges(id);
  const [grades, fetchGrades] = useGrades(projectId);
  const { userId } = useSelector(state => state.currentUser);
  const [averages, setAverages] = useState({});
  const [submissions, fetchSubmissions] = useSubmissions(id);
  const submission = submissions.find(p => p.id === Number(projectId));
  const isJudge = judges.find(j => j.user_id === userId);
  const hasGraded = grades.find(g => g.judge_id === userId);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  useEffect(() => {
    fetchGrades();
  }, [fetchGrades]);

  useEffect(() => {
    const features = {
      comments: []
    };

    rubrics.forEach(r => {
      features[r] = 0;
    });

    if (grades.length > 0) {
      // setAverages(averages);
      const averageGrades = grades.reduce((accum, c) => {
        const newObj = { ...accum };
        if (c["judge_comments"]) newObj.comments.push(c["judge_comments"]);
        rubrics.forEach(key => {
          const value = c[key];
          newObj[key] += value;
        });
        return newObj;
      }, features);

      const averages = {};
      Object.keys(averageGrades).forEach(key => {
        const value = averageGrades[key];
        if (key === "comments") {
          averages[key] = value;
        } else averages[key] = value / grades.length;
      });
      setAverages(averages);
    } else setAverages(features);
  }, [hasGraded, grades, rubrics]);

  // Convert rubrics names to Title Case
  const toTittleCase = item => {
    return item
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [grade, setGrade] = useState({
    product_design: null,
    functionality: null,
    innovation: null,
    product_fit: null,
    extensibility: null,
    presentation: null,
    project_event_id: id,
    judge_comments: ""
  });

  const changeHandler = ([rubric, rating]) => {
    setGrade(grade => ({ ...grade, [rubric]: rating }));
  };

  const handleSubmit = () => {
    dispatch(gradeSubmission(projectId, grade, history));
  };

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
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
                  <H3>
                    {submission?.participant_or_team_name ||
                      submission?.project_title}
                  </H3>
                </Team>
                <Label htmlFor="project_writeup">Project writeup</Label>
                <Description id="project_writeup">
                  <Paragraph>{submission?.project_writeups}</Paragraph>
                  {submission?.git_url && (
                    <>
                      <Label htmlFor="github_url">GitHub URL</Label>
                      <Paragraph id="github_url">
                        <a
                          href={submission?.git_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {submission?.git_url}
                        </a>
                      </Paragraph>
                    </>
                  )}
                  {submission?.video_url && (
                    <>
                      <Label htmlFor="video_url">Video URL</Label>
                      <Paragraph id="video_url">
                        <a
                          href={submission?.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {submission?.video_url}
                        </a>
                      </Paragraph>
                    </>
                  )}
                </Description>
                {isJudge && !hasGraded ? (
                  <JudgeView>
                    <H4>Grading Form</H4>
                    <Paragraph>
                      Please rate this project submission using the rubrics
                      provided below and leave a feedback explaining your
                      grading.
                    </Paragraph>
                    <Label htmlFor="rubrics"></Label>
                    <Rubrics id="rubrics">
                      {rubrics.map(rubric => {
                        return (
                          <RubricRow key={rubric}>
                            {toTittleCase(rubric)}
                            <Rating
                              id={rubric}
                              onChange={rate => changeHandler([rubric, rate])}
                              emptySymbol={
                                <img
                                  alt={toTittleCase(rubric)}
                                  src={emptyStar}
                                />
                              }
                              fullSymbol={
                                <img
                                  alt={toTittleCase(rubric)}
                                  src={fullStar}
                                />
                              }
                              initialRating={grade[rubric]}
                            />
                          </RubricRow>
                        );
                      })}
                    </Rubrics>
                    <Label htmlFor="feedback">Feedback</Label>
                    <Feedback
                      wide
                      id="judge_comments"
                      onChange={e => {
                        const { id, value } = e.target;
                        changeHandler([id, value]);
                      }}
                      value={grade.judge_comments}
                    />
                  </JudgeView>
                ) : (
                  <JudgeView>
                    <Label htmlFor="rubrics"></Label>
                    <Rubrics id="rubrics">
                      {Object.keys(averages).map(rubric => {
                        return rubric !== "comments" ? (
                          <RubricRow key={rubric}>
                            {toTittleCase(rubric)}
                            <Rating
                              emptySymbol={
                                <img
                                  alt={toTittleCase(rubric)}
                                  src={emptyStar}
                                />
                              }
                              fullSymbol={
                                <img
                                  alt={toTittleCase(rubric)}
                                  src={fullStar}
                                />
                              }
                              initialRating={averages[rubric]}
                              readonly
                            />
                          </RubricRow>
                        ) : null;
                      })}
                    </Rubrics>
                    <Label htmlFor="feedback">Feedback</Label>
                    {averages.comments?.length > 0 ? (
                      averages.comments.map(comment => (
                        <Paragraph key={comment}>{comment}</Paragraph>
                      ))
                    ) : (
                      <Paragraph>No comments on this project</Paragraph>
                    )}
                  </JudgeView>
                )}
              </SubmissionEntry>
              <ButtonGroup>
                <Button
                  anchor
                  to={`/dashboard/event/${id}/projects`}
                  color="grey"
                >
                  Back to projects
                </Button>
                {isJudge && !hasGraded && (
                  <Button color="green" onClick={handleSubmit}>
                    Submit Grading
                  </Button>
                )}
              </ButtonGroup>
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

const Description = styled.div`
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
  padding: 10px 0 20px 0;
  margin: 0 0 20px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media ${media.tablet} {
    justify-content: center;
  }

  div {
    margin: 0 30px 20px 0;
    display: flex;
    flex-direction: column;
  }
`;

const RubricRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  & > span {
    margin: 10px 0 0 10px;
  }
`;

const Feedback = styled.textarea`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #212121;
  border: 1px solid #e8e8e8;
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

const JudgeView = styled.div`
  border-radius: 6px;
  border: 1px solid #e8e8e8;
  padding: 20px;
  background-color: #f2f2f2;
  width: 100%;
`;

const ButtonGroup = styled.div`
  a,
  button {
    width: 100%;
    display: block;
    margin: 0 0 10px 0;
  }
`;
