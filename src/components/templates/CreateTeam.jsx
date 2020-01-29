import React, { useState, useEffect } from "react";
import { Header, Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import BodyContainer from "../atoms/BodyContainer";
import styled from "styled-components";
import { RowHead } from "../atoms/RowHead";
import { H2, H3 } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";
import { BoldSpan } from "../atoms/Span";
import Button from "../atoms/Button";
import { NavLink } from "react-router-dom";
import {
  createTeamName,
  fetchTeams,
  fetchTeamMates
} from "../../store/participantTeams/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { LetterIcon } from "../atoms/Icon";

const CreateTeam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const [inputValues, setInputValues] = useState({ team_name: "" });
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

  const TeamsCont = styled(BodyContainer)`
    background-color: white;
    width: 50%;
    height: 40%;
    overflow-y: auto;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 25%;
    border-radius: 6px;
    padding: 20px;

    p {
      margin: 0;
      padding: 3px;
    }

    button {
      margin: 20px;
    }
  `;

  const FancyBoldSpan = styled(BoldSpan)`
    border-bottom: 1px solid lightgray;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
  `;

  const StyledLetterIcon = styled(LetterIcon)`
    margin: 0 20px 0 0 !important;
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
  const NormalSpan = styled(BoldSpan)`
    font-weight: normal;
    padding: 5px;
  `;

  let formValue;
  const handleChange = e => {
    formValue = e.target.value;
  };

  const handleTeamSubmit = e => {
    e.preventDefault();
    const teamData = {
      team_name: formValue,
      eventId: id
    };
    dispatch(createTeamName(teamData, history));
  };

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const { userId } = useSelector(state => state.currentUser);
  const createdTeam = useSelector(state =>
    state.participantTeams.fetchTeamData.find(team => team.team_lead === userId)
  );
  useEffect(() => {
    if (createdTeam !== undefined) {
      dispatch(fetchTeamMates(createdTeam.id));
    }
  }, [createdTeam, dispatch]);
  const fetchedTeamMembers = useSelector(
    state => state.participantTeams.fetchTeamMateData
  );
  const initial = createdTeam.team_name[0];
  console.log("created Team", createdTeam);

  return (
    <div>
      <UserHeader></UserHeader>
      <BodyRow>
        <RowHead>
          <H3>Participant Teams</H3>
        </RowHead>
        <BodyColumn>
          {createdTeam === undefined ? (
            <Form>
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
                onChange={e => handleChange(e)}
                name="team_name"
              />
              <Button onClick={handleTeamSubmit} color="green">
                Submit
              </Button>
            </Form>
          ) : (
            <TeamsCont>
              <StyledLetterIcon>{initial}</StyledLetterIcon>
              <FancyBoldSpan>Your Team</FancyBoldSpan>
              <FancyBoldSpan>
                Team Name:
                <NormalSpan>{createdTeam.team_name}</NormalSpan>
              </FancyBoldSpan>
              <FancyBoldSpan style={{ borderBottom: "none" }}>
                Team Members:
              </FancyBoldSpan>
              {fetchedTeamMembers.length !== 0 ? (
                <div
                  style={{
                    borderBottom: "1px solid lightgray",
                    width: "100%",
                    paddingBottom: "10px"
                  }}
                >
                  {fetchedTeamMembers.map(member => {
                    return member.team_member_fullname === null ? (
                      <Paragraph key={member.id}>
                        {member.team_member_email}
                      </Paragraph>
                    ) : (
                      <Paragraph key={member.id}>
                        {member.team_member_fullname}
                      </Paragraph>
                    );
                  })}
                </div>
              ) : (
                <FancyBoldSpan>This team has no members</FancyBoldSpan>
              )}
              <FancyBoldSpan>
                Hackathon Name:
                <NormalSpan>{event_title}</NormalSpan>
              </FancyBoldSpan>
              <Button color="green">
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/dashboard/event/participant-teams/${createdTeam.id}/add-members`}
                >
                  Add Teammate
                </NavLink>{" "}
              </Button>
            </TeamsCont>
          )}
        </BodyColumn>
      </BodyRow>
      <Footer></Footer>
    </div>
  );
};

export default CreateTeam;
