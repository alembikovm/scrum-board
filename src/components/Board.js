import React from "react";
import { Body } from "./Body/Body";
import { Header } from "./Header/Header";

export const EntityStatus = {
  STORY: "story",
  NOT_STARTED: "not_started",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export const EntityType = {
  STORY: "story",
  TASK: "task",
};

export const Board = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
