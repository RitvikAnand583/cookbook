// /* eslint-disable react/prop-types */

import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) => props.type === "normal" && css``}
  border: 2px solid #ecebee;
  height: 1.7rem;
  border-radius: 0.4rem;
  width: min-content;
  padding-left: 0.6rem;

  /* ${(props) =>
    props.type === "checkbox" &&
    css`
      height: 2.4rem;
      width: 2.4rem;
      outline-offset: 2px;
      transform-origin: 0;
      accent-color: var(--color-brand-600);
    `} */
  /* margin: 1.5rem; */
  /* width: 20rem;
  height: 2rem; */
`;

Input.defaultProps = {
  type: "normal",
};

export default Input;
