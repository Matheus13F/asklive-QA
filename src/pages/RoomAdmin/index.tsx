import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRoom } from "../../hook/useRoom";

import LogoAskLive from "../../assets/images/logoasklive.png";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";
import noQuestionsYet from '../../assets/images/empty-questions.svg';
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";
import { BsSun, BsMoon } from 'react-icons/bs';

import { Container } from "./styles";
import { database } from "../../services/firebase";
import { useTheme } from "../../styles/Hook/theme";

type RoomParams = {
  id: string;
};

export default function RoomAdmin() {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
  const params = useParams<RoomParams>();
  const history = useHistory();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  function handleChangeTheme() {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Tem certeza que você quer excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighLightQuestion(questionId: string) {
     await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
       isHighLighted: true,
     });
  }

  return (
    <Container>
      <header>
        <div>
          <img src={LogoAskLive} alt="logo" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
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
          <h1>Sala: {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

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
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighLightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Apagar Pergunta" />
                </button>
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
              Compartilhe seu codigo de sala para sua audiencia entrar e
              começar a enviar perguntas!
            </span>
          </div>
        ) : (
          ""
        )}
      </footer>
    </Container>
  );
};
