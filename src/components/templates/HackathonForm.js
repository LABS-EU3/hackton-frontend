import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
import { ButtonGradientGrey, ButtonGradientGreen } from "../atoms/Button";

import { useDispatch } from "react-redux";
import {
  createEvent,
  fetchEventCategories,
  updateEvent
} from "../../store/events/actions";
import { Formik, Form } from "formik";

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
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>{formValues.id ? `Edit Hackathon` : `Create New Hackathon`}</H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <Formik onSubmit={handleSubmit} initialValues={defaultState}>
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
                      <ButtonGradientGrey>Cancel</ButtonGradientGrey>
                    </Link>
                    <ButtonGradientGreen type="submit">
                      Submit
                    </ButtonGradientGreen>
                  </RowBody>
                </Form>
              </Formik>
              s
            </CardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
