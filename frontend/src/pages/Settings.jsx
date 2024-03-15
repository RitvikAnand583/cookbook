import styled from "styled-components";
import Row from "../ui/Row";
import List from "../ui/List";
import ListItem from "../ui/ListItem";

function Settings() {
  return (
    <Row type="vertical">
      <h1>Settings</h1>
      <List>
        <ListItem>Change avatar</ListItem>
        <ListItem>Change username</ListItem>
        <ListItem>Change password</ListItem>
        <ListItem>Toggle theme</ListItem>
      </List>
    </Row>
  );
}

export default Settings;
