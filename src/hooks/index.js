import { useState, useEffect, useCallback } from 'react';
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
  const fetchParticipants = useCallback(() => {
    const fetchData = async () => {
      const {
        data: { body }
      } = await axiosWithAuth(token).get(`/api/events/${id}/participants`);
      setParticipants(body);
    };
    fetchData();
  }, [id, token])

  useEffect(() => {
    fetchParticipants();

  }, [fetchParticipants]);

  return [participants, fetchParticipants];
}

export const useEventTeam = id => {
  const [team, setTeam] = useState([]);
  const token = useSelector(selectToken);
  const fetchEventTeam = useCallback(() => {
    const fetchData = async () => {
      const {
        data: { body: { members } }
      } = await axiosWithAuth(token).get(`/api/events/${id}/team`);
      setTeam(members);
    };
    fetchData();
  }, [id, token]);

  useEffect(() => {
    fetchEventTeam();

  }, [fetchEventTeam])

  return [team, fetchEventTeam];
}

export const useJudges = id => {
  const team = useEventTeam(id);
  const judges = team.filter(t => t.role_type === 'judge');
  return judges;
}

export const useTeams = id => {
  const [teams, setTeams] = useState([]);
  const token = useSelector(selectToken);

  const fetchTeams = useCallback(() => {
    const fetchData = async () => {
      const { data: { body }
      } = await axiosWithAuth(token).get(
        `/api/events/${id}/participant-teams`
      );
      setTeams(body);
    }
    fetchData();
  }, [id, token]);

  useEffect(() => {
    fetchTeams();

  }, [fetchTeams]);

  return [teams, fetchTeams];
}

export const useSubmissions = id => {
  const [submissions, setSubmissions] = useState([]);
  const token = useSelector(selectToken);
  const fetchSubmissions = useCallback(() => {
    const fetchData = async () => {
      const { data: { body }
      } = await axiosWithAuth(token).get(
        `/api/events/${id}/projects`
      );
      setSubmissions(body);
    }
    fetchData();
  }, [id, token]);

  useEffect(() => {
    fetchSubmissions();

  }, [fetchSubmissions]);

  return [submissions, fetchSubmissions];
}

export const useTeammates = id => {
  const [teammates, setTeammates] = useState([]);
  const token = useSelector(selectToken);
  const fetchTeammates = useCallback(() => {
    const fetchData = async () => {
      const {
        data: { body }
      } = await axiosWithAuth(token).get(
        `/api/events/participant-teams/${id}/members`
      );
      setTeammates(body);
    }
    fetchData();
  }, [id, token]);

  useEffect(() => {
    fetchTeammates();

  }, [fetchTeammates]);

  return [teammates, fetchTeammates];
}