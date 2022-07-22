import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  max-height: 53px;
  padding: 10px 0;

  #header {
    display: flex;
    width: 1440px;
    margin: 0 auto;
    transition: 0.5s;
    .logo {
      font-size: 48px;
      width: 40%;
      text-align: center;
    }
    .nav {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 58px;
      cursor: pointer;

      &:hover {
        border-bottom: 5px solid #fff;
        background-color: #000;
        height: 58px;
      }
    }
  }
`;
