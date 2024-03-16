import styled, { css } from "styled-components";

const StyledRow = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-around;
      align-items: center;
      gap: 1rem;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

StyledRow.defaultProps = {
  type: "horizontal",
};

function Row({ children, style, type }) {
  console.log(style);
  return (
    <StyledRow type={type} style={style && style}>
      {children}
    </StyledRow>
  );
}

export default Row;
