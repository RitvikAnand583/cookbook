import styled, { css } from "styled-components";

const StyledHeading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.1rem;
      font-weight: 500;
    `} /* line-height */
`;

Heading.defaultProps = {
  as: "h2",
  style: {},
};

function Heading({ children, as, style }) {
  return (
    <StyledHeading as={as} style={style && style}>
      {children}
    </StyledHeading>
  );
}

export default Heading;
