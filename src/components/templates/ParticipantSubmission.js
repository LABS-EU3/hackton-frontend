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
  createSubmission,
  fetchAllSubmissions
} from "../../store/projectSubmission/actions";
import { fetchAllEvents } from "../../store/events/actions";

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
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector(state => state.events.data);
  console.log("events data", events);

  useEffect(() => {
    dispatch(fetchAllSubmissions(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, []);

  let currentEvent = events.find(e => e.id == id);
  console.log("current", currentEvent);

  const handleSubmit = values => {
    const event_id = Number(id);
    dispatch(createSubmission({ ...values, event_id }, history));
  };

  const schema = Yup.object().shape({
    project_title: Yup.string()
      .min(3, "Project title must be atleast 3 characters")
      .required("Project title is required"),
    participant_or_team_name: Yup.string()
      .min(2, "Team/participants name must be atleast 2 characters")
      .required("Team/participants name is required"),
    git_url: Yup.string()
      .min(8, "GIt url name must be atleast 8 characters")
      .required("Git url is required"),
    video_url: Yup.string()
      .min(8, "Video url must be atleast 8 characters")
      .required("Video url is required")
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
                You are making a submission for the Hacky Hacks 2020 Hackathon.
                Please ensure you have read the event guidelines and have gone
                through the grading rubrics for this event before you make your
                submission.
              </H4>
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialState}
                validationSchema={schema}
                enableReinitialize
              >
                {({ errors, touched }) => (
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

                    {currentEvent.requirements.includes("github_url") ? (
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
                    ) : null}

                    {currentEvent.requirements.includes("video_url") ? (
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
                    ) : null}
                    <RowBody>
                      <TextArea
                        wide
                        as="textarea"
                        type="text"
                        name="project_writeups"
                        placeholder="Project Writeup"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="event_description" />
                    </RowBody>

                    <RowBody>
                      <Button to="/dashboard" color="grey" anchor>
                        Cancel
                      </Button>
                      <Button color="green" type="submit" to="/dashboard">
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
