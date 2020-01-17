import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
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
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import { Paragraph } from "../atoms/Paragraph";
import { ErrorSpan } from "../atoms/Span";

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
      .min(10, "Title must be at least 10 characters long.")
      .required("Title is required."),
    start_date: Yup.string().required("Start date is required."),
    end_date: Yup.string().required("End date is required."),
    event_description: Yup.string()
      .min(50, "Description must be at least 50 characters long.")
      .required("Description is required."),
    location: Yup.string().required("Location is required."),
    guidelines: Yup.string()
      .min(50, "Guidelines must be at least 50 characters long.")
      .required("Guidelines are required."),
    participation_type: Yup.string().required(
      "Participation type is required."
    ),
    category_id: Yup.number()
      .required("Please select event category.")
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

          <Column>
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
                      <Label htmlFor="event_title">Hackathon Title</Label>
                      <Input
                        id="event_title"
                        display="wide"
                        type="text"
                        name="event_title"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorSpan>
                        <ErrorMessage name="event_title" />
                      </ErrorSpan>
                    </RowBody>
                    <RowBody>
                      <Column>
                        <Label htmlFor="start_date">Event Starts</Label>
                        <Input
                          id="start_date"
                          type="date"
                          name="start_date"
                          placeholder="Event starts"
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                        <ErrorSpan>
                          <ErrorMessage name="start_date" />
                        </ErrorSpan>
                      </Column>
                      <Column>
                        <Label htmlFor="end_date">Event Ends</Label>
                        <Input
                          id="end_date"
                          type="date"
                          name="end_date"
                          placeholder="Event ends"
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                        <ErrorSpan>
                          <ErrorMessage name="end_date" />
                        </ErrorSpan>
                      </Column>
                    </RowBody>
                    <RowBody>
                      <Label htmlFor="event_description">Description</Label>
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
                      <ErrorSpan>
                        <ErrorMessage name="event_description" />
                      </ErrorSpan>
                    </RowBody>
                    <RowBody>
                      <Column>
                        <Label htmlFor="participation_type">
                          Participation Type
                        </Label>
                        <Select
                          id="participation_type"
                          name="participation_type"
                        >
                          <option value="" disabled hidden>
                            Choose
                          </option>
                          <option value="individual">Individual</option>
                          <option value="team">Team</option>
                          <option value="both">Both</option>
                        </Select>
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                        <ErrorSpan>
                          <ErrorMessage name="participation_type" />
                        </ErrorSpan>
                      </Column>
                      <Column>
                        <Label htmlFor="event_category">Event Category</Label>
                        <Select id="event_category" name="event_category">
                          <option value="" disabled hidden>
                            Choose
                          </option>
                          {categories.map(({ id, category_name }) => (
                            <option key={id} value={id}>
                              {category_name}
                            </option>
                          ))}
                        </Select>
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                        <ErrorSpan>
                          <ErrorMessage name="event_category" />
                        </ErrorSpan>
                      </Column>
                    </RowBody>
                    <RowBody>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        display="wide"
                        id="location"
                        type="text"
                        name="location"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorSpan>
                        <ErrorMessage name="location" />
                      </ErrorSpan>
                    </RowBody>

                    <RowBody id="grading_rubrics">
                      <Label htmlFor="grading_rubrics">Grading Rubrics</Label>
                      <Paragraph>
                        Judges will be expected to grade project submissions on
                        which one of the following* (tick on all that apply)
                      </Paragraph>

                      <div>
                        <input
                          id="presentation"
                          name="presentation"
                          type="checkbox"
                        />
                        <Label htmlFor="presentation">Presentation</Label>
                      </div>

                      <div>
                        <input
                          id="market_fit"
                          name="market_fit"
                          type="checkbox"
                        />
                        <Label htmlFor="market_fit">Product Market Fit</Label>
                      </div>

                      <div>
                        <input
                          id="innovation"
                          name="innovation"
                          type="checkbox"
                        />
                        <Label htmlFor="innovation">Innovation</Label>
                      </div>

                      <div>
                        <input
                          id="product_design"
                          name="product_design"
                          type="checkbox"
                        />
                        <Label htmlFor="product_design">Product Design</Label>
                      </div>

                      <div>
                        <input
                          id="functionality"
                          name="functionality"
                          type="checkbox"
                        />
                        <Label htmlFor="functionality">Functionality</Label>
                      </div>

                      <div>
                        <input
                          id="extensibility"
                          name="extensibility"
                          type="checkbox"
                        />
                        <Label htmlFor="extensibility">Extensibility</Label>
                      </div>

                    </RowBody>
                    <RowBody>
                      <Label htmlFor="guidelines">Guidelines</Label>
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
                      <ErrorSpan>
                        <ErrorMessage name="guidelines" />
                      </ErrorSpan>
                    </RowBody>
                    <Label htmlFor="submission_requirements">
                      Project Submission Requirements
                    </Label>
                    <RowBody id="submission_requirements">
                      <Paragraph>
                        Participants will be expected to submit which one of the
                        following (tick on all that apply)
                      </Paragraph>

                      <div>
                        <input id="video" name="video" type="checkbox" />
                        <Label htmlFor="video">Video</Label>
                      </div>

                      <div>
                        <input id="url" name="url" type="checkbox" />
                        <Label htmlFor="url">URL</Label>
                      </div>

                      <div>
                        <input id="images" name="images" type="checkbox" />
                        <Label htmlFor="images">Images</Label>
                      </div>

                      <div>
                        <input id="writeups" name="writeups" type="checkbox" />
                        <Label htmlFor="writeups">Writeups</Label>
                      </div>
                    </RowBody>
                    <RowBody>
                      <Link to="/dashboard">
                        <Button color="grey" to="/dashboard">
                          Cancel
                        </Button>
                      </Link>
                      <Button color="green" type="submit">
                        Submit
                      </Button>
                    </RowBody>
                  </Form>
                )}
              </Formik>
            </CardWide>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default HackathonForm;
