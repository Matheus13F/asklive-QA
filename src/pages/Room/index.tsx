import { FormEvent, useState } from "react";
import { useAuth } from '../../context/AuthContext';
import { database } from '../../services/firebase';
import { useParams } from "react-router-dom";

import LogoImg from '../../assets/images/logoasklive.png';
import noQuestionsYet from "../../assets/images/empty-questions.svg";
import Button from '../../components/Button';
import RoomCode from "../../components/RoomCode";
import Question from '../../components/Question';
import { BsSun, BsMoon } from "react-icons/bs";

import { Container } from './styles';
import { useRoom } from "../../hook/useRoom";
import { useTheme } from "../../styles/Hook/theme";

type RoomParams = {
  id: string;
}

function Room() {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );
  const { user, signInWithGoogle } = useAuth();
  const [newQuestion, setNewQuestion] = useState('');
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId); 

  function handleChangeTheme() {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();

    if(newQuestion.trim() === ''){
      return;
    }

    if(!user) {
      throw new Error('Você precisa estar logado');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighLighted: false,
      isAnswered: false
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
   if(user) {
      if (likeId) {
        await database
          .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
          .remove();
      } else {
        await database
          .ref(`rooms/${roomId}/questions/${questionId}/likes`)
          .push({
            authorId: user?.id,
          });
      }
   } else {
     alert('Faça login para curtir ou enviar uma pergunta para a sala!');
     return;
   }
  }

   async function handleCreateRoom() {
     if (!user) {
       await signInWithGoogle();
     }
   }


  return (
    <Container>
      <header>
        <div>
          <img src={LogoImg} alt="logo" />
          <div>
            <RoomCode code={roomId} />
            <button type="button" onClick={handleChangeTheme}>
              {darkTheme ? (
                <BsSun size={25} className="iconTheme" />
              ) : (
                <BsMoon size={25} className="iconTheme" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="question-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(e) => setNewQuestion(e.target.value)}
            value={newQuestion}
          />
          <div>
            {user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta,{" "}
                <button type="button" onClick={handleCreateRoom}>
                  Faça seu login
                </button>
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighLighted={question.isHighLighted}
              >
                {!question.isAnswered && (
                  <button
                    className={`like-button ${question.likeId ? "liked" : ""}`}
                    type="button"
                    aria-label="Marcar como gostei"
                    onClick={() =>
                      handleLikeQuestion(question.id, question.likeId)
                    }
                  >
                    {question.likeCount > 0 && (
                      <span>{question.likeCount}</span>
                    )}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </Question>
            );
          })}
        </div>
      </main>
      <footer className="empty-question">
        {questions.length <= 0 ? (
          <div>
            <img src={noQuestionsYet} alt="Sem perguntas no momento" />
            <h3>Nenhuma pergunta por aqui...</h3>
            <span>
              Faça seu login na plataforma e comece e enviar perguntas agora
              mesmo!
            </span>
          </div>
        ) : (
          ""
        )}
      </footer>
    </Container>
  );
}

export default Room;