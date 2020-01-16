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
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import InputTag from "../atoms/TagsInput.js";

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

const HackathonForm = ({ initialState = defaultState }) => {
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
                      <Input
                        type="text"
                        name="event_title"
                        placeholder="Title"
                      />
                      <Input
                        type="date"
                        name="start_date"
                        placeholder="Event starts"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="start_date" />
                      <Input
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
                        <option value="">Event Category</option>
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
                      {" "}
                      <InputTag />
                    </RowBody>
                    <RowBody>
                      <TextArea
                        wide
                        as="textarea"
                        type="text"
                        name="event_description"
                        placeholder="Description"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="event_description" />
                    </RowBody>
                    <RowBody>
                      <Input
                        type="text"
                        name="location"
                        placeholder="Address"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="location" />
                    </RowBody>
                    <RowBody>
                      <TextArea
                        wide
                        as="textarea"
                        type="text"
                        name="guidelines"
                        placeholder="Guidelines"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                      <ErrorMessage name="guidelines" />
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
