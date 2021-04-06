import styled from "styled-components";
import CraftGroup from "./CraftGroup";
import data from "./data";

const Main = styled.main`
  position: relative;
  padding-top: 50vh;
  min-height: 100%;
`;
const Intro = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 50%;
  margin: 0 auto;
  section {
  }
`;
export default function () {
  return (
    <Main>
      <Intro>
        <p>
          Welcome to my website! I have a listed below several different craft
          ideas, each implemented in a variety of ways. I'd love to hear your
          feedback or even potentially make one custom for you. Feel free to get
          in touch!
        </p>
      </Intro>
      {Object.keys(data).map((groupKey) => (
        <CraftGroup
          title={data[groupKey].title}
          group={data[groupKey].groupKey}
          keys={data[groupKey].keys}
        />
      ))}
      <article>Contact</article>
    </Main>
  );
}
