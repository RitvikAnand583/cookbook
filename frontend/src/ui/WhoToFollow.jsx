import styled from "styled-components";
import Button from "./Button";
import UserCard from "./UserCard";

const users = [
  {
    name: "Divyansh",
    userImg: `src/data/images/shirley/${
      Math.floor(Math.random() * 40) + 1
    }.jpg`,
    username: "Web Devloper",
  },
  {
    name: "Jai",
    userImg: `src/data/images/shirley/${
      Math.floor(Math.random() * 40) + 1
    }.jpg`,
    username: "Web Devloper",
  },
  {
    name: "Viral",
    userImg: `src/data/images/shirley/${
      Math.floor(Math.random() * 40) + 1
    }.jpg`,
    username: "Data Scientist",
  },
  {
    name: "Harsh",
    userImg: `src/data/images/shirley/${
      Math.floor(Math.random() * 40) + 1
    }.jpg`,
    username: "AI Engineer",
  },
  {
    name: "Tiwari",
    userImg: `src/data/images/shirley/${
      Math.floor(Math.random() * 40) + 1
    }.jpg`,
    username: "Chore Boy",
  },
];

const StyledWhoToFollow = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f4;
  margin-top: 3vh;
  height: 60vh;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1.2rem;
  text-align: center;
  margin-right: 2rem;
`;

const StyledProfileCard = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

function ProfileCard({ user }) {
  const { name, userImg, username } = user;
  return (
    <StyledProfileCard>
      <UserCard name={name} userImg={userImg} username={username} />
      <Button>+</Button>
    </StyledProfileCard>
  );
}

function WhoToFollow() {
  return (
    <StyledWhoToFollow>
      <h2>Who To follow</h2>
      {users.map((user) => (
        <ProfileCard user={user} key={user.name} />
      ))}
      <Button> View More...</Button>
    </StyledWhoToFollow>
  );
}

export default WhoToFollow;
