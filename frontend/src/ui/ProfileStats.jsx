import styled from "styled-components";

const Stats = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* gap: 0; */
`;

const StatsItem = styled.div`
  padding: 8px;
  /* border: solid; */
`;

const StatsItemName = styled.div`
  font-size: 1rem;
  font-weight: 200;
`;

const StatsItemValue = styled.div`
  font-size: 1.2rem;
`;

function Stat({ name, value }) {
  return (
    <StatsItem>
      <StatsItemValue>{value}</StatsItemValue>
      <StatsItemName>{name}</StatsItemName>
    </StatsItem>
  );
}

function ProfileStats({ followers, posts, following }) {
  return (
    <Stats>
      <Stat name="Posts" value={posts} />
      <Stat name="Followers" value={followers} />
      <Stat name="Following" value={following} />
    </Stats>
  );
}

export default ProfileStats;
