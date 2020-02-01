import React, { FC } from 'react';
import '../../styles/organisms/Boards.scss';
import Board from '../molecules/Board';
import BoardCreate from './BoardCreate';

type Props = { };

const Boards: FC<Props> = () => {
  return (
    <ul className="Boards">
      <Board text={'boardTitle aaaaa'} />
      <Board text={'boardTitle bbbbb'} />
      <Board text={'boardTitle ccccc'} />
      <Board text={'boardTitle ddddd'} />
      <Board text={'boardTitle eeeee'} />
      <BoardCreate />
    </ul>
  );
};

export default Boards;