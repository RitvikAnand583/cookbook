import Heading from "./Heading";
import Input from "./Input";
import Message from "./Message";
import Row from "./Row";

function Profile() {
  return (
    <div style={{ overflow: "auto", scrollbarWidth: "none" }}>
      <div>
        <Row type="vertical" variation="one-liner">
          <Heading as="h3">Basic Details</Heading>
          <Message style={{ fontSize: "0.8rem", fontWeight: 400 }}>
            Update your name & birth date
          </Message>
        </Row>
        <section>
          <div>
            <Row type="vertical" variation="one-liner">
              <label>First Name</label>
              <Input type="text"></Input>
            </Row>
            <Row type="vertical" variation="one-liner">
              <label>Last Name</label>
              <Input type="text"></Input>
            </Row>
            <Row type="vertical" variation="one-liner">
              <label>Birth Date</label>
              <Input type="text"></Input>
            </Row>
          </div>
        </section>
        <hr />
      </div>
      <div>
        <Row type="vertical" variation="one-liner">
          <Heading as="h3">Advanced Details</Heading>
          <Message style={{ fontSize: "0.8rem", fontWeight: 300 }}>
            Update your avatar and bio
          </Message>
        </Row>
        <section>
          <div>
            <Row type="vertical" variation="one-liner">
              <label>Change avatar</label>
              <Input type="file"></Input>
            </Row>
            <Row type="vertical" variation="one-liner">
              <label>Short Bio</label>
              <textarea></textarea>
            </Row>
          </div>
        </section>
        <hr />
      </div>
      <div>
        <Row type="vertical" variation="one-liner">
          <Heading as="h3">Geographic Details</Heading>
          <Message style={{ fontSize: "0.8rem", fontWeight: 300 }}>
            Update your city, country and postal code
          </Message>
        </Row>
        <section>
          <div>
            <Row type="vertical" variation="one-liner">
              <label>City</label>
              <Input type="text"></Input>
            </Row>
            <Row type="vertical" variation="one-liner">
              <label>Country</label>
              <Input type="text"></Input>
            </Row>
            <Row type="vertical" variation="one-liner">
              <label>Postal Code</label>
              <Input type="text"></Input>
            </Row>
          </div>
        </section>
        <hr />
      </div>
      {/* <div>
        <Heading as="h3">Basic Details</Heading>
      </div> */}
    </div>
  );
}

export default Profile;
