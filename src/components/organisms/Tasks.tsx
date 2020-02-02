import React, { FC } from 'react';
import { TaskType } from '../../store/types';
import '../../styles/organisms/Tasks.scss';
import Task from '../molecules/Task';
import TaskCreate from './TaskCreate';

type Props = { index: number, tasks: TaskType[] | null, tasksHandlers: any };

const Tasks: FC<Props> = ({ index, tasks, tasksHandlers }) => {

  let taskItems = null;
  if (tasks !== null) {
    taskItems = tasks.map((task, index) => {
      return (
        <Task
          key={task.created_at}
          index={index}
          text={task.text}
        />
      )
    })
  }

  return (
    <ul className="Tasks">
      {taskItems}
      <TaskCreate index={index} tasksHandlers={tasksHandlers} />
    </ul>
  );
};

export default Tasks;