import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { axiosWithAuth } from "../../utils/api";
import { Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3} from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Button from "../atoms/Button";
import { type, Solid, media } from "../index";
import { addParticipantTeamMember } from "../../store/participantTeams/actions";

const AddParticipantTeam = () => {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { token } = useSelector(state => state.currentUser);

  useEffect(() => {
    const getUsers = async () => {
      const {
        data: {
          body: { users }
        }
      } = await axiosWithAuth(token).get("/api/users");
      setUsers(users);
    };
    getUsers();
  }, [token]);

  useEffect(() => {
    const match = searchString
      ? users
          .filter(user =>
            user?.email.toUpperCase().includes(searchString.toUpperCase())
          )
          .filter((_, i) => i < 5)
      : [];
    setMatches(match);
  }, [searchString, users]);

  const { userId } = useSelector(state => state.currentUser);
  const createdTeam = useSelector(state =>
    state.participantTeams.fetchTeamData.find(team => team.team_lead === userId)
  );

  const handleSubmit = () => {
    const data = {
      team_id: Number(id),
      team_member: selectedUser.id,
      eventId: createdTeam.event_id
    };
    dispatch(addParticipantTeamMember(data, history));
  };

  const redirect = (location = "/dashboard") => {
    history.push(location);
  };

  const BodyContainerColumn = styled(BodyContainer)`
    flex-direction: column;
    justify-content: start;
  `;

  const StyledContainer = styled.div`
    display: block;
    position: relative;
  `;

  const UserWidget = ({ user, select, ...otherProps }) => {
    const StyledWidget = styled.div`
      margin-bottom: 10px;
      cursor: pointer;
    `;
    return (
      <StyledWidget key={user.id} onClick={() => select(user)} {...otherProps}>
        {user.email}
      </StyledWidget>
    );
  };

  const SearchWidget = () => {
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    }, []);

    const Container = styled.div`
      input {
        font-family: ${type.ROBOTO};
        font-size: 16px;
        font-weight: 500;
        color: ${Solid.BLACK};
        border: 1px solid ${Solid.BORDER_GREY};
        border-radius: 6px;
        padding: 10px;
        margin: 0 20px 10px 0;
        ${({ display }) =>
          display === "wide" ? `width: 100%;` : `width: 180px;`}

        &:focus {
          transition: all 0.5s;
          box-shadow: 0 0 3px #ddd;
        }
      }

      @media ${media.tablet} {
        width: 100%;
        margin-right: 0;
      }
    `;

    return (
      <Container display="wide">
        <input
          type="text"
          value={searchString}
          onChange={e => {
            setSearchString(e.target.value);
          }}
          placeholder="Search by email"
          ref={inputRef}
        />
        {matches.map(user => (
          <UserWidget key={user.id} user={user} select={setSelectedUser} />
        ))}
        <Button color="grey" onClick={() => redirect()}>
          Back to dashboard
        </Button>
      </Container>
    );
  };


  const RoleWidget = () => {
    return (
      <StyledContainer>
        <RowBody direction="column-reverse">
          <h6>
            You are adding{" "}
            <span style={{ color: "#273F92", backgroundColor: "aliceblue" }}>
              {selectedUser.email}
            </span>{" "}
            to your team
          </h6>
        </RowBody>
        <RowBody>
          <Button color="grey" onClick={() => redirect()}>
            Back to dashboard
          </Button>
          <Button color="green" onClick={handleSubmit}>
            Add teammate
          </Button>
        </RowBody>
      </StyledContainer>
    );
  };

  return (
    <div>
      <UserHeader />
      <WideBody>
        <BodyContainerColumn>
          <RowHead>
            <H3>Add Teammates</H3>
          </RowHead>
          <Column>
            <CardWide>
              {!selectedUser ? <SearchWidget /> : <RoleWidget />}
            </CardWide>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default AddParticipantTeam;
