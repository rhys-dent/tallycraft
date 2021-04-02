import styled from "styled-components";

const CraftGroup = styled.article`
  display: flex;
  height: 90vh;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
  }
`;
const Crafts = styled.section`
  width: 50%;
  height: 50vh;
  margin: 0 auto;
  overflow-y: scroll;
  border: 1vh solid lavender;
`;
const Craft = styled.div`
  display: flex;
  height: 50vh;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1vh solid lavender;
  border-right: 1vh solid lavender;
  padding: 4vh;
  background-color: whitesmoke;
  img {
    max-height: 100%;
  }
  h2 {
    display: inline;
    font-size: 2rem;
  }
`;

export default function ({ title, group: group, keys }) {
  console.log(group);
  console.log(keys);
  return (
    <CraftGroup>
      <h1>{title}</h1>
      <Crafts>
        <div>
          {keys.map((key) => (
            <Craft>
              <h2>{key.toUpperCase()}</h2>
              <img
                src={`https://tallycraft-images.s3-us-west-2.amazonaws.com/${group}-${key}-512.png`}
              />
            </Craft>
          ))}
        </div>
      </Crafts>
    </CraftGroup>
  );
}
