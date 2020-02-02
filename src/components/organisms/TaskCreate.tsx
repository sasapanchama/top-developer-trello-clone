import React, { FC, useState } from 'react';
import '../../styles/organisms/TaskCreate.scss';
import FieldText from '../atoms/FieldText';

type Props = { index: number, tasksHandlers: any };

const TaskCreate: FC<Props> = ({ index, tasksHandlers }) => {

  const [stateText, setStateText] = useState<string>('');

  const addTask = tasksHandlers.addTask;

  const onChangeHandlerFieldText = (e: any) => {
    setStateText(e.target.value);
  };

  const onKeyDownHandlerFieldText = (e: any) => {
    if (stateText !== '' && e.key === 'Enter') {
      addTask(index, stateText);
      setStateText('');
    };
  };

  return (
    <li className="TaskCreate">
      <FieldText text={stateText} onChangeHandler={onChangeHandlerFieldText} onKeyDownHandler={onKeyDownHandlerFieldText} />
    </li>
  );
};

export default TaskCreate;