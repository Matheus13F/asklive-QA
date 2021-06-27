import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logoasklive.png';
import googleIconImg from '../../assets/images/google-icon.svg';
import { ContainerHome, MainContent } from "./style";
import { useAuth } from '../../context/AuthContext';
import { database } from '../../services/firebase';

export default function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomcode] = useState('');

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    }
    history.push('rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if(roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      alert('Sala nao existe!');
      return;
    }

    if(roomRef.val().endedAt) {
      alert('Esta sala foi fechada!');
      return;
    }

    history.push(`/rooms/${roomCode}`);

  }

  return (
    <ContainerHome>
      <aside>
        <img src={illustrationImg} alt="imagem home" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="any ask" />
          <button className="create-room-google" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input type="text" placeholder="Digite o codigo da sala" onChange={e => setRoomcode(e.target.value)} value={roomCode} />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </ContainerHome>
  );
}