import React from "react";
import HackathonForm from "./HackathonForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditHackathon = () => {
  const { id } = useParams();
  const event = useSelector(state =>
    state.events.data.find(ev => ev.id === Number(id))
  );

  return <HackathonForm initialState={event} />;
};

export default EditHackathon;
