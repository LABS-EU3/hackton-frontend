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