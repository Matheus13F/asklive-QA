import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: #292929;
  height: 100vh;

  header {
    padding: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};

    > div {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }

      div {
        display: flex;
        gap: 16px;

        button {
          height: 40px;
          background-color: transparent;
          color: ${(props) => props.theme.colors.white.light};
        }
      }
    }
  }

  @media (max-width: 650px) {
    header {
      padding: 0.5rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};

      > div {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        > img {
          max-height: 30px;
          margin-bottom: 10px;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 5px;

          button {
            height: 40px;
            background-color: transparent;
            color: ${(props) => props.theme.colors.white.light};
          }
        }
      }
    }
  }

  main {
    width: min(92%, 800px);
    margin: 0 auto;

    .question-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.white.light};
      }

      span {
        margin-left: 1rem;
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 9999px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 14px;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 1rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.secondary};
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: ${(props) => props.theme.colors.white.dark};
            font-weight: 500;
            font-size: 14px;
          }
        }

        > span {
          font-size: 14px;
          color: ${(props) => props.theme.colors.white.dark};
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            color: ${(props) => props.theme.colors.primary};
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }

  .empty-question {
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 20px;

      h3 {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.white.light};
        text-align: center;
      }

      span {
        text-align: center;
        color: ${(props) => props.theme.colors.white.dark};
      }

      > img {
        width: 250px;
      }
    }
  }
`;
