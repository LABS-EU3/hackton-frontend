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
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { CardWide } from "../atoms/Card";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import { Paragraph } from "../atoms/Paragraph";

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
  guidelines: "",
  participation_type: "team",
  category_id: 1
};

const HackathonForm = ({ initialState = defaultState }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector(state => state.events);
  useEffect(() => {
    dispatch(fetchEventCategories());
  }, [dispatch]);

  const handleSubmit = values => {
    if (values.title !== "" && !values.id) {
      dispatch(createEvent(values, history));
    } else if (values.title !== "" && values.id) {
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

  return (
    <div>
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>
              {initialState.id ? `Edit Hackathon` : `Create New Hackathon`}
            </H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialState}
                validationSchema={schema}
                enableReinitialize
              >
                {({ errors, touched }) => (
                  <Form>
                    <RowBody>
                      <Label for="event_title">Hackathon Title</Label>
                      <Input
                        id="event_title"
                        display="wide"
                        type="text"
                        name="event_title"
                      />
                    </RowBody>
                    <RowBody>
                      <Label for="start_date">Event starts</Label>
                      <Input
                        id="start_date"
                        type="date"
                        name="start_date"
                        placeholder="Event starts"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="start_date" />
                      <Label for="end_date">Event ends</Label>
                      <Input
                        id="end_date"
                        type="date"
                        name="end_date"
                        placeholder="Event ends"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="end_date" />
                    </RowBody>
                    <RowBody>
                      <Label for="event_description">Description</Label>
                      <TextArea
                        wide
                        id="event_description"
                        as="textarea"
                        type="text"
                        name="event_description"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="event_description" />
                    </RowBody>
                    <RowBody>
                      <Label for="participation_type">Participation Type</Label>
                      <Select id="participation_type" name="participation_type">
                        <option value="" selected disabled hidden>Choose</option>
                        <option value="individual">Individual</option>
                        <option value="team">Team</option>
                        <option value="both">Both</option>
                      </Select>
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="participation_type" />
                      <Label for="event_category">Event Category</Label>
                      <Select id="event_category" name="event_category">
                        <option value="" selected disabled hidden>Choose</option>
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
                      <Label for="location">Location</Label>
                      <Input
                        display="wide"
                        id="location"
                        type="text"
                        name="location"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="location" />
                    </RowBody>
                    
                    <Label for="grading_rubrics">Grading Rubrics</Label>
                    <RowBody id="grading_rubrics">
                      <Paragraph>Judges  will be expected to grade project submissions on  which one of the following* (tick on all that apply)</Paragraph>
                      
                      <div>
                        <input id="presentation" name="presentation" type="checkbox" />
                        <label for="presentation">Presentation</label>
                      </div>

                      <div>
                        <input id="market_fit" name="market_fit" type="checkbox" />
                        <label for="market_fit">Product Market Fit</label>
                      </div>

                      <div>
                        <input id="innovation" name="innovation" type="checkbox" />
                        <label for="innovation">Innovation</label>
                      </div>

                      <div>
                        <input id="product_design" name="product_design" type="checkbox" />
                        <label for="product_design">Product Design</label>
                      </div>

                      <div>
                        <input id="functionality" name="functionality" type="checkbox" />
                        <label for="functionality">Functionality</label>
                      </div>

                      <div>
                        <input id="extensibility" name="extensibility" type="checkbox" />
                        <label for="extensibility">Extensibility</label>
                      </div>

                      <Paragraph>*10 star rating system is used in each metric.</Paragraph>
                    </RowBody>
                    <RowBody>
                      <Label for="guidelines">Guidelines</Label>
                      <TextArea
                        id="guidelines"
                        wide
                        as="textarea"
                        type="text"
                        name="guidelines"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="guidelines" />
                    </RowBody>
                    <Label for="submission_requirements">Project Submission Requirements</Label>
                    <RowBody id="submission_requirements">
                      <Paragraph>Participants will be expected to submit which one of the following (tick on all that apply)</Paragraph>
                      
                      <div>
                        <input id="video" name="video" type="checkbox" />
                        <label for="video">Video</label>
                      </div>

                      <div>
                        <input id="url" name="url" type="checkbox" />
                        <label for="url">URL</label>
                      </div>

                      <div>
                        <input id="images" name="images" type="checkbox" />
                        <label for="images">Images</label>
                      </div>

                      <div>
                        <input id="writeups" name="writeups" type="checkbox" />
                        <label for="writeups">Writeups</label>
                      </div>
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

export default HackathonForm;
