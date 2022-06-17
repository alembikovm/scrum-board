import React from "react";
import { EntityStatus } from "./Board";

export const Column = ({
  currentStatus,
  children,
  onDragOver: handleDragOver,
  onDrop: handleDrop,
}) => {
  return (
    <div
      style={{
        flex: 1,
        border: "solid #000 1px",
      }}
      data-testid="col"
      {...(currentStatus &&
        currentStatus !== EntityStatus.STORY && {
          onDragOver: (e) => handleDragOver(e),
          onDrop: (e) => handleDrop(e),
        })}
      id={currentStatus}
    >
      {children}
    </div>
  );
};
