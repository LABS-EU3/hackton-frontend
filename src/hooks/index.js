import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { axiosWithAuth, selectToken } from '../utils/api';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector(selectToken);

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

  return users;
}

export const useSearchUserByEmail = () => {
  const [searchString, setSearchString] = useState('');
  const [matches, setMatches] = useState([]);
  const users = useUsers();

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

  return [matches, searchString, setSearchString];
}

export const useParticipants = id => {
  const [participants, setParticipants] = useState([]);
  const token = useSelector(selectToken);
  const fetchParticipants = async () => {
    const {
      data: { body }
    } = await axiosWithAuth(token).get(`/api/events/${id}/participants`);
    setParticipants(body);
  };

  useEffect(() => {
    fetchParticipants();
  });

  return [participants, fetchParticipants];
}

export const useEventTeam = id => {
  const [team, setTeam] = useState([]);
  const token = useSelector(selectToken);
  const fetchEventTeam = async () => {
    const {
      data: { body: { members } }
    } = await axiosWithAuth(token).get(`/api/events/${id}/team`);
    setTeam(members);
  };

  useEffect(() => {
    fetchEventTeam();
  })

  return [team, fetchEventTeam];
}

export const useJudges = id => {
  const team = useEventTeam(id);
  const judges = team.filter(t => t.role_type === 'judge');
  return judges;
}