import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import Label from "./Label";
import Message from "./Message";
import Row from "./Row";
import TextArea from "./Textarea";

function Profile() {
  return (
    <div>
      <div>
        <Row type="vertical" variation="one-liner">
          <Heading as="h3">Basic Details</Heading>
          <Message
            style={{ fontSize: "0.8rem", fontWeight: 400, color: "grey" }}
          >
            Update your name & birth date
          </Message>
        </Row>
        <section>
          <div>
            <Row variation="normal">
              <Row type="vertical" variation="one-liner">
                <Label size="0.8rem" color="grey">
                  First Name
                </Label>
                <Input type="text"></Input>
              </Row>
              <Row type="vertical" variation="one-liner">
                <Label size="0.8rem" color="grey">
                  Last Name
                </Label>
                <Input type="text"></Input>
              </Row>
            </Row>
            <Row type="vertical" variation="one-liner">
              <Label size="0.8rem" color="grey">
                Birth Date
              </Label>
              <Input type="text"></Input>
            </Row>
          </div>
        </section>
        <br />
        <hr style={{ borderTop: "1px solid #f4f4f5" }} />
        {/* <div style={{ border: "1px solid grey" }}></div> */}
      </div>
      <div>
        <Row type="vertical" variation="one-liner">
          <Heading as="h3">Advanced Details</Heading>
          <Message
            style={{ fontSize: "0.8rem", fontWeight: 300, color: "grey" }}
          >
            Update your avatar and bio
          </Message>
        </Row>
        <div>
          <Row type="vertical" variation="one-liner">
            <Label size="0.8rem" color="grey">
              Change avatar
            </Label>
            <Input type="file"></Input>
          </Row>
          <Row type="vertical" variation="one-liner">
            <Label size="0.8rem" color="grey">
              Short Bio
            </Label>
            <TextArea>Write something here</TextArea>
          </Row>
        </div>
        <br />
        <hr style={{ borderTop: "1px solid #f4f4f5" }} />
      </div>
      <div>
        <Row type="vertical" variation="one-liner">
          <Heading as="h3">Geographic Details</Heading>
          <Message
            style={{ fontSize: "0.8rem", fontWeight: 300, color: "grey" }}
          >
            Update your city, country and postal code
          </Message>
        </Row>
        <section>
          <div>
            <Row type="vertical" variation="one-liner">
              <Label size="0.8rem" color="grey">
                City
              </Label>
              <Input type="text"></Input>
            </Row>
            <Row type="vertical" variation="one-liner">
              <Label size="0.8rem" color="grey">
                Country
              </Label>
              <Input type="text"></Input>
            </Row>
            <Row type="vertical" variation="one-liner">
              <Label size="0.8rem" color="grey">
                Postal Code
              </Label>
              <Input type="text"></Input>
            </Row>
          </div>
        </section>
        <br />
        <hr style={{ borderTop: "1px solid #f4f4f5" }} />
      </div>
      <br />
      <Button>Save changes</Button>
    </div>
  );
}

//can make a reusable compo with heading, message as props and rest of the 'section' in children

export default Profile;
