import styled from "styled-components";

const StyledUserCard = styled.div`
  display: flex;
  gap: 1.2rem;
  text-align: left;
`;

function UserCard({ userImg, name, username }) {
  return (
    <StyledUserCard>
      <img
        src={userImg}
        style={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{name}</span>
        <span>{username}</span>
      </div>
    </StyledUserCard>
  );
}

export default UserCard;
