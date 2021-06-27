import { ReactElement, ReactNode } from "react";
import cx from 'classnames';

import { Container } from './styles';

type QuestionsProps = {
  content: string;
  author: {
      name: string;
      avatar: string;
  }
  children?: ReactNode,
  isAnswered?: boolean,
  isHighLighted?: boolean,
}

export default function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighLighted = false,
}: QuestionsProps): ReactElement {
  return (
    <Container
      className={cx(
        "",
        { answered: isAnswered },
        { highlighted: isHighLighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </Container>
  );
}
