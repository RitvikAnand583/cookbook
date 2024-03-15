import styled from "styled-components";

const Input = styled.input``;

function InputText({ placeholder }) {
  return <Input type="text" placeholder={placeholder}></Input>;
}

export default InputText;
