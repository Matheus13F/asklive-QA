import styled from 'styled-components';

export const Container = styled.section`
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 8px;
  padding: 24px;

  & + section {
    margin-top: 20px;
  }

  &.answered {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  &.highlighted {
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 3px 15px ${(props) => props.theme.colors.primary};

    footer {
      .user-info {
        span {
          color: ${(props) => props.theme.colors.white.dark};
        }
      }
    }
  }

  p {
    color: ${(props) => props.theme.colors.white.light};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

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
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 8px;

        &.liked {
          color: #835afd;

          svg path {
            stroke: #835afd;
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;
