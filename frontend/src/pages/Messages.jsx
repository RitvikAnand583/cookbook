import styled from "styled-components";

import Row from "../ui/Row";
import Message from "../ui/Message";
import Heading from "../ui/Heading";

const currentUser = {
  name: "Jai",
  username: "jai18",
  email: "some@abc.com",
};

const MessageContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* justify-content: space-around; */
  /* gap: 1rem; */
`;

const UserList = styled.ul`
  /* padding: 10px; */
  background-color: cyan;
  height: 100%;
  width: 350px;
`;

const MessageWindow = styled.div`
  width: 100%;
`;

function Messages() {
  return (
    <Row type="vertical" style={{ height: "100%" }}>
      <Row type="vertical" variation="one-liner">
        <Heading as="h2">Inbox</Heading>
        <Message style={{ fontSize: "1rem", fontWeight: 200, color: "grey" }}>
          {" "}
          Message your friends...
        </Message>
      </Row>
      <MessageContainer style={{ height: "100%" }}>
        <UserList>
          <div>Div</div>
          <div>Harsh</div>
          <div>Viral</div>
          <div>Ritvik</div>
          <div>Tiwari</div>
        </UserList>
        <MessageWindow style={{ backgroundColor: "red" }}>
          {" "}
          messages are here
        </MessageWindow>
      </MessageContainer>
    </Row>
  );
}

export default Messages;
