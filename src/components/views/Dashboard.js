import React from "react";
import EventOnboarding from "../templates/Onboarding";
import { useDispatch } from "react-redux";
import { fetchAllEvents } from "../../store/events/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllEvents());
  }, []);

  return <EventOnboarding user="Mildred Pascal" />;
};

export default Dashboard;
