import React, { FC } from 'react';
import '../../styles/organisms/TaskCreate.scss';
import FieldText from '../atoms/FieldText';

type Props = { };

const TaskCreate: FC<Props> = () => {
  return (
    <li className="TaskCreate">
      <FieldText />
    </li>
  );
};

export default TaskCreate;