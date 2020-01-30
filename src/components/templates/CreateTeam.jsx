import React, { useEffect } from "react";
import { Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import BodyContainer from "../atoms/BodyContainer";
import styled from "styled-components";
import { RowHead } from "../atoms/RowHead";
import { H3 } from "../atoms/Heading";
import Button from "../atoms/Button";
import {
  createTeamName,
  fetchTeams
} from "../../store/participantTeams/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Formik } from "formik";

const CreateTeam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchTeams(id));
  }, [id, dispatch]);

  const BodyRow = styled(BodyContainer)`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    max-width: 100vw;
  `;

  const BodyColumn = styled(BodyContainer)`
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    max-width: 100vw;
  `;

  const Form = styled.form`
    background-color: white;
    width: 50%;
    height: 35vh;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 25%;
    border-radius: 6px;
    h4 {
      margin: 10px;
      padding: 5px;
    }
    label {
      margin: 10px;
    }
    input {
      width: 50%;
      padding: 10px;
      margin: 10px;
      border: 1px solid lightgray;
      border-radius: 6px;
    }
    button {
      width: 50%;
      margin: 10px;
    }
  `;

  const handleTeamSubmit = values => {
    const teamData = {
      team_name: values.team_name,
      eventId: id
    };
    dispatch(createTeamName(teamData, history));
  };

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );


  return (
    <div>
      <UserHeader></UserHeader>
      <BodyRow>
        <RowHead>
          <H3>Participant Teams</H3>
        </RowHead>
        <BodyColumn>
          <Formik initialValues={{ team_name: '' }} onSubmit={handleTeamSubmit}>
            {props => (
              <Form onSubmit={props.handleSubmit}>
                <h4>
                  You are creating a team for{" "}
                  <span
                    style={{ color: "#273F92", backgroundColor: "aliceblue" }}
                  >
                    {event_title}
                  </span>
                </h4>
                <label>Team Name</label>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="team_name"
                />
                <Button type='submit' color="green">
                  Submit
              </Button>
              </Form>
            )}
          </Formik>
        </BodyColumn>
      </BodyRow>
      <Footer></Footer>
    </div>
  );
};

export default CreateTeam;
