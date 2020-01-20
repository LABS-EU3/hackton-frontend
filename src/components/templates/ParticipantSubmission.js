import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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

import {
  createEvent,
  fetchEventCategories,
  updateEvent
} from "../../store/events/actions";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: start;
`;

const defaultState = {
  project_name: "",
  team_or_participant_name: "",
  participation_type: "",
  event_category: "",
  writeup: ""
};

const ParticipantSubmission = ({ initialState = defaultState }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector(state => state.events);
  useEffect(() => {
    dispatch(fetchEventCategories());
  }, [dispatch]);

  const handleSubmit = values => {
    let tagss = JSON.parse(window.localStorage.getItem("tags"));

    if (values.title !== "" && !values.id) {
      values.tag_name = tagss;
      dispatch(createEvent(values, history));
    } else if (values.title !== "" && values.id) {
      values.tag_name = tagss;
      dispatch(updateEvent(values, history));
    }
  };

  const schema = Yup.object().shape({
    project_name: Yup.string()
      .min(3, "project name must be atleast 3 characters")
      .required("title is required"),
    team_or_participant_name: Yup.string()
      .min(2, "Team/participants name must be atleast 2 characters")
      .required("Team/participants name is required"),
    participation_type: Yup.string()
      .required("Participation type is required"),
    event_category: Yup.string()
      .required("Event category is required"),
    writeup: Yup.string()
        .min(50, "project writeup must be atleast 50 characters")
        .required("project writeup is required"),
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
                        name="project_name"
                        placeholder="Project Name"
                      />
                      <Input
                        type="text"
                        name="team_or_participant_name"
                        placeholder="Team/Participant Name"
                      />
                    </RowBody>

                    <RowBody>
                      <Input
                        type="text"
                        name="github_url"
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
                        name="writeup"
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
