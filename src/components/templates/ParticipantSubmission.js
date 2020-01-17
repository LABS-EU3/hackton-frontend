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
import { Paragraph } from "../atoms/Paragraph";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
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
  event_title: "",
  start_date: "",
  end_date: "",
  event_description: "",
  location: "",
  tag_name: [],
  guidelines: "",
  participation_type: "team",
  category_id: 1
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
    event_title: Yup.string()
      .min(10, "title must be atleast 10 characters")
      .required("title is required"),
    start_date: Yup.string().required("start date is required"),
    end_date: Yup.string().required("end date is required"),
    event_description: Yup.string()
      .min(50, "description must be atleast 50 characters")
      .required("description is required"),
    location: Yup.string().required("location is required"),
    guidelines: Yup.string()
      .min(50, "guidelines must be atleast 50 characters")
      .required("guidelines is required"),
    participation_type: Yup.string().required("participation type is required"),
    category_id: Yup.number()
      .required("select event category")
      .positive()
      .integer()
  });

  const grading_rubrics = [
    { value: "presentation", label: "Presentation" },
    { value: "product_market_fit", label: "Product market fit" },
    { value: "innovation", label: "Innovation" },
    { value: "product_design", label: "Product design" },
    { value: "functionality", label: "Functionality" },
    { value: "extensibility", label: "Extensibility" }
  ];

  const submission_requirements = [
    { value: "video", label: "video" },
    { value: "url", label: "URL" },
    { value: "images", label: "Images" },
    { value: "writeups", label: "Write Ups" }
  ];

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
                        name="participation_type"
                        placeholder="Participation Type"
                      />
                      <Input
                        type="text"
                        name="team/participant_name"
                        placeholder="Team/Participant Name"
                      />
                    </RowBody>

                    <RowBody>
                      <Input
                        type="text"
                        name="github_url"
                        placeholder="Github Url"
                        style={{ width: "33%" }}
                      />
                      <Input
                        type="text"
                        name="video_url"
                        placeholder="Video Url"
                        style={{ width: "33%" }}
                      />
                    </RowBody>

                    <RowBody>
                      <Select name="participation_type">
                        <option value="">Participation Type</option>
                        <option value="team">team</option>
                        <option value="individual">individual</option>
                        <option value="both">both</option>
                      </Select>
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="participation_type" />
                      <Select name="event_category">
                        <option value="">Hackathon Category</option>
                        {categories.map(({ id, category_name }) => (
                          <option key={id} value={id}>
                            {category_name}
                          </option>
                        ))}
                      </Select>
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="event_category" />
                    </RowBody>

                    <RowBody>
                      <Input
                        type="text"
                        name="images"
                        placeholder="Images submission"
                        style={{ width: "100%" }}
                      />
                    </RowBody>

                    <div>
                      <H3>Grading Rubrics</H3>
                      <H4 style={{ "font-size": "13px" }}>
                        *Judges will be expected to grade Project submissions on
                        which one of the following (tick on all that apply)
                      </H4>
                      <RowBody>
                        {grading_rubrics.map(tag => (
                          <label
                            key={tag.value}
                            style={{ width: "30%", margin: "10px" }}
                          >
                            <input
                              name="tags"
                              type="checkbox"
                              value={tag}
                              style={{ width: "30%" }}
                            />
                            <span>{tag.label}</span>
                          </label>
                        ))}
                      </RowBody>
                    </div>

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

                    <div>
                      <H3>Project Submission Requirements</H3>
                      <H4 style={{ "font-size": "13px" }}>
                        *Participants will be required to submit which one of
                        the following (tick on all that apply)
                      </H4>
                      <RowBody>
                        {grading_rubrics.map(tag => (
                          <label
                            key={tag.value}
                            style={{ width: "30%", margin: "10px" }}
                          >
                            <input
                              name="tags"
                              type="checkbox"
                              value={tag}
                              style={{ width: "30%" }}
                            />
                            <span>{tag.label}</span>
                          </label>
                        ))}
                      </RowBody>
                    </div>

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
