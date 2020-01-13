import React from "react";
import { useDispatch } from "react-redux";
import { EventOnboarding } from "../templates";
import { fetchAllEvents } from "../../store/events/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return <EventOnboarding />;
};

export default Dashboard;
