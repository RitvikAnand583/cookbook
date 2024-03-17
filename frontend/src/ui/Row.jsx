import styled, { css } from "styled-components";

const StyledRow = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

  ${(props) =>
    props.variation === "one-liner" &&
    css`
      gap: 0;
    `}
  ${(props) =>
    props.variation === "normal" &&
    css`
      /* gap: 0; */
      justify-content: inherit;
    `}
`;

StyledRow.defaultProps = {
  type: "horizontal",
};

function Row({ children, style, type, variation }) {
  return (
    <StyledRow type={type} style={style && style} variation={variation}>
      {children}
    </StyledRow>
  );
}

export default Row;
