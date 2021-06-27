import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { database } from "../../services/firebase";
import { useAuth } from "../../context/AuthContext";

import Button from "../../components/Button";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logoasklive.png";

import { ContainerNewRoom, MainContent } from "./styles";

function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === '') {
      return ;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    });

    history.replace(`/admin/rooms/${firebaseRoom.key}`)

  }

  return (
    <ContainerNewRoom>
      <aside>
        <img src={illustrationImg} alt="imagem home" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="any ask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input type="text" placeholder="Nome da sala" onChange={e => setNewRoom(e.target.value)} value={newRoom} />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </MainContent>
      </main>
    </ContainerNewRoom>
  );
}

export default NewRoom;
