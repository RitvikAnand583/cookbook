import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 1.1rem;
`;

function Label({ size, color, children }) {
  return (
    <StyledLabel style={{ fontSize: size, color: color }}>
      {children}
    </StyledLabel>
  );
}

export default Label;
