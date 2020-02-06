import React, { useEffect } from "react";
import BodyContainer from "../atoms/BodyContainer";
import styled from "styled-components";
import { BoldSpan } from "../atoms/Span";
import Button from "../atoms/Button";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LetterIcon } from "../atoms/Icon";
import { useTeammates } from "../../hooks";
import user_icon from "../../assets/user_icon.svg";

const TeamView = ({ team }) => {
  const { id } = useParams();

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );

  const [teammates, fetchTeammates] = useTeammates(team?.id);
  const initial = team?.team_name[0] || "U";

  let memberProfile;

  useEffect(() => {
    fetchTeammates();
  }, [fetchTeammates]);

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

  const NormalSpan = styled(BoldSpan)`
    font-weight: normal;
    padding: 5px;
  `;

  return (
    <TeamsCont>
      <StyledLetterIcon>{initial}</StyledLetterIcon>
      <FancyBoldSpan>Your Team</FancyBoldSpan>
      <FancyBoldSpan>
        Team Name:
        <NormalSpan>{team.team_name}</NormalSpan>
      </FancyBoldSpan>
      <FancyBoldSpan style={{ borderBottom: "none" }}>
        Team Members:
      </FancyBoldSpan>
      {teammates.length !== 0 ? (
        <div
          style={{
            borderBottom: "1px solid lightgray",
            width: "100%",
            paddingBottom: "10px"
          }}
        >
          {" "}
          {teammates.map((member,i) =>
            member.team_member_avatar === null ? (
              <img
              key={i}
                style={{
                  width: "7%",
                  height: "7%",
                  marginLeft: "1%",
                  objectFit: "cover"
                }}
                alt="team member profile pic"
                src={user_icon}
              />
            ) : (
              member.team_member_avatar.map((mem, index) => {
                memberProfile = JSON.parse(mem);
                return (
                  <img
                    key={index}
                    style={{
                      width: "7%",
                      height: "7%",
                      marginLeft: "1%",
                      objectFit: "cover",
                      borderRadius: "5px"
                    }}
                    alt="team member profile pic"
                    src={memberProfile.avatar}
                  />
                );
              })
            )
          )}
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
          to={`/dashboard/event/${id}/participant-teams/${team.id}`}
        >
          Add Teammate
        </NavLink>{" "}
      </Button>
    </TeamsCont>
  );
};

export default TeamView;
