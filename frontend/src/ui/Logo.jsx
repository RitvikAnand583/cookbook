import styled from "styled-components";
import { IoFastFoodSharp as CookbookLogo } from "react-icons/io5";


const StyledLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
  margin-top: 1rem;
  margin-left: 2rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <CookbookLogo />
      CookBook
    </StyledLogo>
  );
}

export default Logo;
