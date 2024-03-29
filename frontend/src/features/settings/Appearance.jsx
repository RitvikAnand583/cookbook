import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Message from "../../ui/Message";
import Row from "../../ui/Row";
import Select from "../../ui/Select";

function Appearance() {
  return (
    <div>
      <Row type="vertical">
        <Row type="vertical" variation="one-liner">
          <Heading as="h3">Theme Preferences</Heading>
          <Message
            style={{ fontSize: "0.8rem", fontWeight: 400, color: "grey" }}
          >
            Update your theme
          </Message>
        </Row>
        <section>
          <div>
            <Row variation="normal">
              {/* <Row type="vertical" variation="one-liner"> */}
              <Label size="0.9rem" color="grey">
                Theme
              </Label>
              {/* <Input type="text"></Input> */}
              <Select name="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="others">Others</option>
              </Select>
            </Row>
          </div>
        </section>
        {/* <br /> */}
        <hr style={{ borderTop: "1px solid #f4f4f5" }} />
        {/* <div style={{ border: "1px solid grey" }}></div> */}
      </Row>
      <Button>Save changes</Button>
    </div>
  );
}

export default Appearance;
