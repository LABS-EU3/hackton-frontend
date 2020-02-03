import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { axiosWithAuth, selectToken } from '../utils/api';

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

export const useCreatedTeam = (eventId, userId) => {
  const [teams, fetchTeams] = useTeams(eventId);
  const team = teams.find(team => team.team_lead === Number(userId));

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return team;
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
