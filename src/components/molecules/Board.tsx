import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/molecules/Board.scss';

type Props = { index: number, text: string, pathname: string };

const Board: FC<Props> = ({ index, text, pathname }) => {
  return (
    <li className="Board">
      <Link to={{ pathname, state: index }}>{text}</Link>
    </li>
  );
};

export default Board;