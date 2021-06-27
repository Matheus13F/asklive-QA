import styled from 'styled-components';

export const ContainerNewRoom = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 2rem "Poppins", sans-serif;
      line-height: 1.5rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;
    background-color: #fff;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
    max-width: 300px;
  }

  h2 {
    color: #212121;
    font-size: 1.5rem;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }

  form {
    box-sizing: border-box;
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 1rem;
      background-color: #fff;
      border: 1px solid ${(props) => props.theme.colors.primary};
    }

    button {
      margin-top: 1rem;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    color: #000;
    font-size: 14px;
    color: #737380;
    margin-top: 1rem;

    a {
      color: #e559f9;
    }
  }
`;

