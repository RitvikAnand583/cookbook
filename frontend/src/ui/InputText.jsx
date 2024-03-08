import styled from "styled-components";

const StyledInput = styled.input``;

function InputText({ placeholder }) {
  return <StyledInput type="text" placeholder={placeholder}></StyledInput>;
}

export default InputText;
