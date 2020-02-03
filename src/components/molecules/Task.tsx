import React, { FC } from 'react';
import '../../styles/molecules/Task.scss';
import AreaText from '../atoms/AreaText';

type Props = { listIndex: number, taskIndex: number, text: string, tasksHandlers: any };

const Task: FC<Props> = ({ listIndex, taskIndex, text, tasksHandlers }) => {

  const detectDrag = tasksHandlers.detectDrag;
  const detectDrop = tasksHandlers.detectDrop;
  const allowDrop = tasksHandlers.allowDrop;
  const replaceTask = tasksHandlers.replaceTask;

  const onDragStartHandler = (e: any) => {
    detectDrag(e, taskIndex, 'task');
    console.log(taskIndex);
  };

  const onDropHandler = (e: any) => {
    replaceTask(listIndex, detectDrop(e, taskIndex, 'task'));
  };

  const onDragOverHandler = (e: any) => {
    allowDrop(e);
  };

  return (
    <li className="Task" onDragStart={(e) => onDragStartHandler(e)} onDrop={(e) => onDropHandler(e)} onDragOver={(e) => onDragOverHandler(e)} draggable>
      <AreaText text={text} />
    </li>
  );
};

export default Task;