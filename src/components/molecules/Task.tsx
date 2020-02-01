import React, { FC } from 'react';
import '../../styles/molecules/Task.scss';
import AreaText from '../atoms/AreaText';

type Props = { text: string };

const Task: FC<Props> = ({ text }) => {
  return (
    <li className="Task">
      <AreaText text={text} />
    </li>
  );
};

export default Task;