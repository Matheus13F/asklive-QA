import styled from 'styled-components';

export const ContainerButton = styled.div`
  button {
    height: 3rem;
    border-radius: 8px;
    font-weight: 500;
    background-color: #835afd;
    color: #fff;
    padding: 0 32px;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;

    transition: ease all 0.3s;

    img {
      margin-right: 8px;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.outlined {
      background-color: ${(props) => props.theme.colors.background};
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
