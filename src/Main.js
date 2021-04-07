import styled from "styled-components";
import CraftGroup from "./CraftGroup";
import data from "./data";

const Main = styled.main`
  position: relative;
  padding-top: 50vh;
  min-height: 100%;
  .contact-info {
    height: 100vh;
    padding: 4rem;
    h2 {
      padding: 1rem;
      a {
        color: navy;
        text-decoration: underline;
      }
    }
    iframe {
      border: 1vh solid lavender;
    }
  }
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
      <article id="contact" className="contact-info">
        <h2>
          This website is part of a web development portfolio. The contact form
          below is the form used on the creator's portfolio website. It can be
          used from this website or you can navigate to the portfolio site{" "}
          <a href="https://master.d3qv1htzcb2k0c.amplifyapp.com/">HERE</a>
        </h2>
        <iframe
          src="https://master.d3qv1htzcb2k0c.amplifyapp.com/contact"
          frameborder="0"
          height="100%"
          width="100%"
        ></iframe>
      </article>
    </Main>
  );
}
