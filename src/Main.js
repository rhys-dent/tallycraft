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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint,
          repellat quidem, placeat aperiam non nemo et deserunt, sit vitae
          doloremque rerum eos distinctio voluptatem! Ducimus laudantium
          deserunt earum illo.
        </p>
      </Intro>
      {Object.keys(data).map((groupKey) => (
        <CraftGroup
          title={data[groupKey].title}
          group={groupKey}
          keys={data[groupKey].keys}
        />
      ))}
      <article>Contact</article>
    </Main>
  );
}
