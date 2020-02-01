import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/molecules/Board.scss';

type Props = { text: string };

const Board: FC<Props> = ({ text }) => {
  return (
    <li className="Board">
      <Link to={{ pathname: `/bottom` }}>{text}</Link>
      {/* <Link to={{ pathname: `/${user}/${board}`, state: { index } }}>{text}</Link> */}
    </li>
  );
};

export default Board;