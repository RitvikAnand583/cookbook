import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: inherit;
  width: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border: 1px solid #e6e6e8;

  /* &:focus {
    background-color: inherit;
    border-radius: 0px;
  }

  & > option {
    background-color: pink;
    //border: 3px solid green;
  }

  & > option > div:hover {
    background-color: green;
  } */

  /* border-radius: 0; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function Select({ children }) {
  return <StyledSelect>{children}</StyledSelect>;
}

export default Select;
