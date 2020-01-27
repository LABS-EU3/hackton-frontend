import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { CardWide } from "../atoms/Card";
import { ErrorSpan } from "../atoms/Span";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import {
  fetchAllSubmissions,
  submitProject
} from "../../store/projectSubmission/actions";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const defaultState = {
  project_title: "",
  participant_or_team_name: "",
  git_url: "",
  video_url: "",
  project_writeups: ""
};

const ParticipantSubmission = ({ initialState = defaultState }) => {
  const { id } = useParams();
  const event_id = Number(id);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentEvent = useSelector(state =>
    state.events.data.find(e => e.id === event_id)
  );

  useEffect(() => {
    dispatch(fetchAllSubmissions(event_id));
  }, [dispatch, event_id]);

  const handleSubmit = values => {
    dispatch(submitProject({ ...values, event_id }, history));
  };

  const requireGithubUrl = currentEvent.requirements.includes('github_url');
  const requireVideoUrl = currentEvent.requirements.includes('video_url');

  const schema = Yup.object().shape({
    project_title: Yup.string()
      .min(3, "Project title must be atleast 3 characters")
      .required("Project title is required"),
    participant_or_team_name: Yup.string()
      .min(2, "Team/participants name must be atleast 2 characters")
      .required("Team/participants name is required"),
    git_url: requireGithubUrl
      ? Yup.string()
          .min(8, "GIt url name must be atleast 8 characters")
          .required("github url is required")
      : Yup.string(),
    video_url: requireVideoUrl ? Yup.string()
      .min(8, "Video url must be atleast 8 characters")
      .required("Video url is required"): Yup.string(),
    project_writeups: Yup.string()
      .min(8, "Project writeup must be atleast 8 characters")
      .required("Project writeup is required")
  });

  return (
    <div>
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>Submit Project</H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <H4>
                You are making a submission for the {currentEvent.event_title}{" "}
                2020 Hackathon. Please ensure you have read the event guidelines
                and have gone through the grading rubrics for this event before
                you make your submission.
              </H4>
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialState}
                validationSchema={schema}
                enableReinitialize
              >
                {() => (
                  <Form>
                    <RowBody>
                      <Input
                        type="text"
                        name="project_title"
                        placeholder="Project Title"
                      />
                      <ErrorSpan>
                        <ErrorMessage name="project_title" component="div" />
                      </ErrorSpan>
                      <Input
                        type="text"
                        name="participant_or_team_name"
                        placeholder="Team/Participant Name"
                      />
                      <ErrorSpan>
                        <ErrorMessage
                          name="participant_or_team_name"
                          component="div"
                        />
                      </ErrorSpan>
                    </RowBody>

                    {requireGithubUrl && (
                      <RowBody>
                        <Input
                          type="text"
                          name="git_url"
                          placeholder="Github Url"
                          style={{ width: "100%" }}
                        />
                        <ErrorSpan>
                          <ErrorMessage name="git_url" component="div" />
                        </ErrorSpan>
                      </RowBody>
                    )}

                    {requireVideoUrl && (
                      <RowBody>
                        <Input
                          type="text"
                          name="video_url"
                          placeholder="Video Url"
                          style={{ width: "100%" }}
                        />
                        <ErrorSpan>
                          <ErrorMessage name="video_url" component="div" />
                        </ErrorSpan>
                      </RowBody>
                    ) }
                    <RowBody>
                      <TextArea
                        wide
                        as="textarea"
                        type="text"
                        name="project_writeups"
                        placeholder="Project Writeup"
                      />
                      <ErrorSpan>
                        <ErrorMessage name="project_writeups" />
                      </ErrorSpan>
                    </RowBody>

                    <RowBody>
                      <Button to="/dashboard" color="grey" anchor>
                        Cancel
                      </Button>
                      <Button color="green" type="submit">
                        Submit
                      </Button>
                    </RowBody>
                  </Form>
                )}
              </Formik>
            </CardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default ParticipantSubmission;
