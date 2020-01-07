import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
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

import { ButtonGradientGrey, ButtonGradientGreen } from "../atoms/Button";
import { useDispatch } from "react-redux";
import { createEvent } from "../../store/events/actions";

const BodyContainerColumn = styled(BodyContainer)`
  flex-direction: column;
  justify-content: space-around;
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

const Onboarding = ({ user }) => {
  const [formValues, setFormValues] = useState(defaultState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formValues.title !== "") {
      dispatch(createEvent(formValues, history));
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
      <UserHeader user={user} />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>Create New Hackathon</H3>
          </RowHead>

          <RowBody>
            <CardWide>
              <form onSubmit={handleSubmit}>
                <RowBody>
                  <Input
                    type="text"
                    name="event_title"
                    placeholder="Title"
                    onChange={handleInputChange}
                    value={event_title}
                  />
                  <Input
                    type="text"
                    name="start_date"
                    placeholder="Event starts"
                    onChange={handleInputChange}
                    value={start_date}
                  />
                  <Input
                    type="text"
                    name="end_date"
                    placeholder="Event ends"
                    onChange={handleInputChange}
                    value={end_date}
                  />
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
              </form>
            </CardWide>
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default Onboarding;
