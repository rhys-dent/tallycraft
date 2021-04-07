import { useEffect, useRef } from "react";
import styled from "styled-components";

export const headerMinHeight = "10vh";

const Header = styled.header`
  box-sizing: content-box;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 50%;
  min-height: ${headerMinHeight};
  background-color: lavender;
  border-bottom: 1vh solid lavenderblush;
  box-shadow: 0 -2px 8px darkred;
`;
const Logo = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 4rem;
  min-width: min-content;
  padding-bottom: ${headerMinHeight};
  a {
    color: lavenderblush;
    text-shadow: 0 0 2px darkred;
  }
`;
const NavLinks = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: ${headerMinHeight};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: min-content;
`;
const NavLink = styled.a`
  display: inline-block;
  font-size: 2rem;
  padding-right: 1rem;
  color: lavenderblush;
  text-shadow: 0 0 2px darkred;
`;
const CraftLink = styled.a`
  display: inline-block;
  position: relative;

  :hover {
    .craft-link-title {
      height: 0%;
    }
    .craft-links {
      height: 400%;
    }
  }
  .craft-links {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: lavender;
    font-size: 1.5rem;
    color: lavenderblush;
    text-shadow: 0 0 2px darkred;
    height: 0vh;
    transition: height 0.25s ease-in-out;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 4px 4px rosybrown;
  }
`;

export default function () {
  const header = useRef();

  useEffect(function () {
    document.addEventListener(
      "scroll",
      function (e) {
        const scrollTop = e.target.scrollingElement.scrollTop;
        const children = Object.values(header.current.children);
        const logo = children[0];
        const links = children[1];
        let widthDim = scrollTop * 4;
        logo.style.width = `calc(100% - ${widthDim}px)`;
        links.style.width = `calc(100% - ${widthDim}px)`;
        links.style.marginLeft = `auto`;
        header.current.style.height = `calc(50% - ${
          Math.pow(scrollTop, 3) / 100000
        }px)`;
        logo.style.paddingBottom = `calc(10vh - ${scrollTop * 2}px)`;
      },
      []
    );
  });
  return (
    <Header ref={header}>
      <Logo>
        <a href="/">Tallycraft</a>
      </Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <CraftLink>
          <NavLink>Crafts</NavLink>
          <span className="craft-links">
            <a href="#coaster">Coasters</a>
            <a href="#journal">Journals</a>
            <a href="#hat-lady">Hat Ladies</a>
          </span>
        </CraftLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Header>
  );
}
