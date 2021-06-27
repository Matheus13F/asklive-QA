import { ReactElement } from 'react';

import copyImg from '../../assets/images/copy.svg';
import { Container } from './styles';

type RoomCodeProps = {
  code: string;
}

export default function RoomCode(props: RoomCodeProps): ReactElement {
  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container>
      <button onClick={copyRoomCodeToClipBoard}>
        <div>
          <img src={copyImg} alt="Copy Room Code" />
        </div>
        <span>Code #{props.code}</span>
      </button>
    </Container>
  );
}
