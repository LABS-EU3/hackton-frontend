import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
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

const Onboarding = ({ initialState = defaultState }) => {
  const [formValues, setFormValues] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEventCategories());
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formValues.title !== "" && !formValues.id) {
      dispatch(createEvent(formValues, history));
    } else if (formValues.title !== "" && formValues.id) {
      dispatch(updateEvent(formValues, history));
    }
  };

  const schema = Yup.object().shape({
    event_title: Yup.string()
      .length(10, "title must be atleast 10 characters")
      .required("title is required"),
    start_date: Yup.string().required("start date is required"),
    end_date: Yup.string().required("end date is required"),
    event_description: Yup.string()
      .length(10, "description must be atleast 50 characters")
      .required("description is required"),
    location: Yup.string().required("location is required"),
    guidelines: Yup.string()
      .length(10, "guidelines must be atleast 50 characters")
      .required("guidelines is required"),
    participation_type: Yup.string().required("participation type is required"),
    category_id: Yup.number()
      .required("select event category")
      .positive()
      .integer()
  });

  const {
    event_title,
    start_date,
    end_date,
    event_description,
    guidelines,
    location
  } = formValues;

  return (
    <div>
      <UserHeader user={"DDD"} />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>{formValues.id ? `Edit Hackathon` : `Create New Hackathon`}</H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <Formik
                onSubmit={handleSubmit}
                initialValues={defaultState}
                validationSchema={schema}
              >
                <Form>
                  <RowBody>
                    <Input
                      type="text"
                      name="event_title"
                      placeholder="Title"
                      onChange={handleInputChange}
                      value={event_title}
                    />
                    <Input
                      type="date"
                      name="start_date"
                      placeholder="Event starts"
                      onChange={handleInputChange}
                      value={start_date}
                    />
                    <Input
                      type="date"
                      name="end_date"
                      placeholder="Event ends"
                      onChange={handleInputChange}
                      value={end_date}
                    />
                  </RowBody>
                  <RowBody>
                    <Select name="participation_type">
                      <option value="">Participation Type</option>
                      <option value="team">team</option>
                      <option value="individual">individual</option>
                      <option value="both">both</option>
                    </Select>
                    <Select name="event_category">
                      <option value="">Event Category</option>
                      {categories.map(({ id, category_name }) => (
                        <option key={id} value={id}>
                          {category_name}
                        </option>
                      ))}
                    </Select>
                  </RowBody>
                  <RowBody>
                    <TextArea
                      wide
                      type="text"
                      name="event_description"
                      placeholder="Description"
                      onChange={handleInputChange}
                      value={event_description}
                    />
                  </RowBody>
                  <RowBody>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Address"
                      onChange={handleInputChange}
                      value={location}
                    />
                  </RowBody>
                  <RowBody>
                    <TextArea
                      wide
                      type="text"
                      name="guidelines"
                      placeholder="Guidelines"
                      onChange={handleInputChange}
                      value={guidelines}
                    />
                  </RowBody>
                  <RowBody>
                    <Link to="/dashboard">
                      <Button color="grey">Cancel</Button>
                    </Link>
                    <Button color="green" type="submit">
                      Submit
                    </Button>
                  </RowBody>
                </Form>
              </Formik>
            </CardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
