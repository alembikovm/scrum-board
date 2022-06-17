import React from "react";

export const EntityCard = ({
  children,
  backgroundColor,
  entity,
  onDragStart: handleDragStart,
}) => {
  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        border: "solid 3px #000",
        backgroundColor,
        borderRadius: "16px",
      }}
      {...(entity?.type === "task" && {})}
    >
      <div
        {...(entity?.type === "task" && {
          draggable: true,
          onDrop: () => false,
          onDragStart: (e) => handleDragStart(e, entity),
        })}
      >
        {children}
      </div>
    </div>
  );
};
