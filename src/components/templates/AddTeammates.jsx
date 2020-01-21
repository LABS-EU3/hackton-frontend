import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { axiosWithAuth } from "../../utils/api";
import { Footer } from "../organisms/index";
import UserHeader from "../organisms/UserHeader";
import WideBody from "../atoms/WideBody";
import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import Button from "../atoms/Button";
import { type, Solid, media } from "../index";
import { addTeamMember } from "../../store/events/actions";

const AddTeammates = () => {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState("");
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

  const handleSubmit = () => {
    const { email } = selectedUser;
    const data = {
      eventId: Number(id),
      email,
      role
    };
    dispatch(addTeamMember(data, history));
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

  const Radio = ({ label, value, type = "radio", ...radioProps }) => {
    const Container = styled.label`
      /* Customize the label (the container) */
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      /* Hide the browser's default radio button */
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        /* When the radio button is checked, add a blue background */
        &:checked ~ span {
          background-color: #2196f3;
        }

        /* Show the indicator (dot/circle) when checked */
        &:checked ~ span:after {
          display: block;
        }
      }

      /* Create a custom radio button */
      span {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;

        /* Create the indicator (the dot/circle - hidden when not checked) */
        &:after {
          content: "";
          position: absolute;
          display: none;

          /* Style the indicator (dot/circle) */
          top: 9px;
          left: 9px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
        }
      }

      /* On mouse-over, add a grey background color */
      &:hover {
        input ~ span {
          background-color: #ccc;
        }
      }
    `;

    return (
      <Container>
        {label || value}
        <input type={type} {...radioProps} />
        <span></span>
      </Container>
    );
  };

  const RoleWidget = () => {
    return (
      <StyledContainer>
        <RowBody direction="column-reverse">
          <Radio
            label="organiser"
            name="role"
            onChange={() => setRole("organiser")}
            checked={role === "organiser"}
          />
          <Radio
            name="role"
            label="judge"
            onChange={() => setRole("judge")}
            checked={role === "judge"}
          />
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

export default AddTeammates;
