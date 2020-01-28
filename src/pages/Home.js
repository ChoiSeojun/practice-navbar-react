import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

import Bg from "../images/background.jpg";

const Styled = styled.div``;

const Img = styled.img`
  width: 100vw;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <Styled>
        <h1>
          Home
          <Typing>
            <span>This page ...</span>
            <Typing.Backspace count={13} />
          </Typing>
        </h1>
      </Styled>

      <h1>Home</h1>
      <Img src={Bg} />
    </>
  );
};

export default Home;
