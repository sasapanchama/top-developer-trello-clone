import React, { FC } from 'react';
import '../../styles/molecules/Task.scss';
import AreaText from '../atoms/AreaText';

type Props = { index: number, text: string };

const Task: FC<Props> = ({ index, text }) => {
  return (
    <li className="Task">
      <AreaText text={text} />
    </li>
  );
};

export default Task;