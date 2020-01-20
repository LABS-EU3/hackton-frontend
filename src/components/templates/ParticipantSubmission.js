import React, { useEffect, useState } from "react";
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
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import { createSubmission, fetchAllSubmissions } from "../../store/projectSubmission/actions";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const defaultState = {
  project_name: "",
  participant_or_team_name: "",
  git_url: "",
  video_url: "",
  project_writeups: ""
};

const ParticipantSubmission = ({ initialState = defaultState }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // const [ submissionData, setSubmissionData ] = useState([])
  
  useEffect(() => {
    dispatch(fetchAllSubmissions(id));
  }, [dispatch]);


  const handleSubmit = values => {
    const event_id = Number(id);
    // if (project_name !== "" && team_or_participant_name !== "") {
      dispatch(createSubmission({...values, event_id}, history));
    // }
  };

  const schema = Yup.object().shape({
    project_title: Yup.string()
      .min(3, "project name must be atleast 3 characters")
      .required("title is required"),
    participant_or_team_name: Yup.string()
      .min(2, "Team/participants name must be atleast 2 characters")
      .required("Team/participants name is required")
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
                        placeholder="Project Name"
                      />
                      <ErrorMessage name='project_title' component='div' />
                      <Input
                        type="text"
                        name="participant_or_team_name"
                        placeholder="Team/Participant Name"
                      />
                      <ErrorMessage name='participant_or_team_name' component='div' />
                    </RowBody>

                    <RowBody>
                      <Input
                        type="text"
                        name="git_url"
                        placeholder="Github Url"
                        style={{"width": "100%"}}
                      />
                    </RowBody>

                    <RowBody>
                      <Input
                        type="text"
                        name="video_url"
                        placeholder="Video Url"
                        style={{"width": "100%"}}
                      />
                    </RowBody>

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
