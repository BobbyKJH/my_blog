import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  padding: 20px 0;
  #header {
    display: flex;
    width: 1440px;
    max-height: 50px;
    background: aqua;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    #logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      background: #fff;
      color: #000;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      .nav {
        width: 50%;
      }
    }
  }
`;
