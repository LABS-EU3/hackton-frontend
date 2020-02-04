import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { axiosWithAuth, selectToken } from '../utils/api';

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

export const useGrades = (projectId) => {
  const [grades, setGrades] = useState([]);
  const token = useSelector(selectToken);

  const fetchGrades = useCallback(() => {
    const getData = async () => {
      const { data: { body } } = await axiosWithAuth(token).get(
        `/api/events/projects/${projectId}/grading`
      );
      setGrades(body);
    }
    getData();
  }, [projectId, token]);

  useEffect(() => {
    fetchGrades();
  }, [fetchGrades]);

  return [grades, fetchGrades];
}

