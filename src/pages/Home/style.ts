import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
      flex: 7;
      background-color: ${props => props.theme.colors.primary};
      color: #FFF;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 120px 80px;

      img {
          max-width: 320px;
      }

      strong {
          font: 700 2rem 'Poppins', sans-serif;
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
    background-color: #FFF;

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

  .create-room-google {
    margin-top: 4rem;
    height: 3rem;
    border-radius: 8px;
    font-weight: 500;
    background-color: #ea4335;
    color: #FFF;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;

    transition: ease all 0.3s;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-left: 16px;
    }
  }
`;
