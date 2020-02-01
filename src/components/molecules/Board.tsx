import React, { FC } from 'react';
import '../../styles/molecules/Board.scss';

type Props = { text: string };

const Board: FC<Props> = ({ text }) => {
  return (
    <li className="Board">
      <a href="#">
        {text}
      </a>
    </li>
  );
};

export default Board;