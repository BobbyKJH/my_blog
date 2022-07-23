import styled, { keyframes } from "styled-components";

const CardStyle = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const MainPageStyle = styled.div`
  display: block;
  width: 1440px;
  margin: 10px auto;
  text-align: center;
  .nav-box {
    display: inline-block;
    transition: 1s;
    padding: 20px;
    width: 350px;
    height: 400px;
    border: 5px solid black;
    border-radius: 8px;
    margin: 100px 20px 20px 0;
    animation: ${CardStyle} 1s;

    span {
      display: block;
      font-size: 36px;
      margin: 20px 0;
    }
  }
`;
