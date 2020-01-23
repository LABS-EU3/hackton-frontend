import React from "react";

import HackathonForm from "../templates/HackathonForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const HackathonFormPage = () => {
  const { id } = useParams();
  const event = useSelector(state =>
    state.events.data.find(e => e.id === Number(id))
  );
  return <HackathonForm initialState={event} />;
};

export default HackathonFormPage;
