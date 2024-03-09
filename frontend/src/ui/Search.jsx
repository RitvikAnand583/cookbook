import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

// const InputSVG = styled.IoSearchOutline``;

const InputContainer = styled.div`
  margin: 0;
  padding: 0.8rem;
  font-size: 1.8rem;
  vertical-align: middle;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #d8d3d3;
  border-radius: 0.6rem;
  height: 0.5rem;
`;

const Input = styled.input`
  border: none;
  width: 15rem;
  /* padding: 0.6rem; */
  background-color: inherit;
  color: #000;
  font-size: 1.6rem;
  &:focus {
    outline: none;
  }
`;

function Search() {
  return (
    <InputContainer>
      <IoSearchOutline />
      <Input></Input>
    </InputContainer>
  );
}

export default Search;
