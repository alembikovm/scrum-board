import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEntities, selectEntities, updateEntity } from "../../entitySlice";
import { EntityStatus, EntityType } from "../Board";
import { Column } from "../Column";
import { EntityCard } from "../EntityCard";
import { Row } from "../Row";

const Body = () => {
  const dispatch = useDispatch();
  const entities = useSelector(selectEntities);

  useEffect(() => {
    dispatch(getEntities());
  }, [dispatch]);

  const handleDragStart = (e, currentEntity) => {
    console.log("drag", currentEntity);
    const data = JSON.stringify(currentEntity);
    e.dataTransfer.setData("entity", data);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentEntity = JSON.parse(e.dataTransfer.getData("entity"));

    const currentStatus = e.target.id || currentEntity.status;

    dispatch(updateEntity({ ...currentEntity, status: currentStatus }));
  };

  const renderColumns = (currentStatus, currentType, storyEntity) => {
    if (currentType === EntityType.STORY) {
      return (
        <Column currentStatus={currentStatus}>
          <EntityCard key={storyEntity.id} backgroundColor="aqua">
            <div style={{ fontWeight: "bold" }}>{storyEntity.title}</div>
            <div>{storyEntity.description}</div>
          </EntityCard>
        </Column>
      );
    }

    return (
      <Column
        currentStatus={currentStatus}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {entities
          ?.filter(
            (entity) =>
              entity.status === currentStatus &&
              entity.type === currentType &&
              entity.parent_id === storyEntity.id
          )
          .map((entity) => (
            <EntityCard
              key={entity.id}
              entity={entity}
              backgroundColor="yellow"
              onDragStart={handleDragStart}
            >
              <div style={{ fontWeight: "bold" }}>{entity.title}</div>
              <div>{entity.description}</div>
            </EntityCard>
          ))}
      </Column>
    );
  };

  return (
    <div style={{}}>
      {entities
        .filter((entity) => entity.type === EntityType.STORY)
        .map((entity) => (
          <Row key={entity.id}>
            {renderColumns(EntityStatus.STORY, EntityType.STORY, entity)}
            {renderColumns(EntityStatus.NOT_STARTED, EntityType.TASK, entity)}
            {renderColumns(EntityStatus.IN_PROGRESS, EntityType.TASK, entity)}
            {renderColumns(EntityStatus.DONE, EntityType.TASK, entity)}
          </Row>
        ))}
    </div>
  );
};

export { Body };
