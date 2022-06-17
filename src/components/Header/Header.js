import { Column } from "../Column";

const Header = () => (
  <div style={{ display: "flex" }}>
    <Column>Story</Column>
    <Column>Not Started</Column>
    <Column>In Progress</Column>
    <Column>Done</Column>
  </div>
);

export { Header };
