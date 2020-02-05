import React, { FC } from 'react';
import { TaskType } from '../../store/types';
import '../../styles/organisms/Tasks.scss';
import Task from '../molecules/Task';
import TaskCreate from './TaskCreate';

type Props = { listIndex: number, tasks: TaskType[] | null, tasksHandlers: any };

const Tasks: FC<Props> = ({ listIndex, tasks, tasksHandlers }) => {

  let taskItems = null;
  if (tasks !== null) {
    taskItems = tasks.map((task, taskIndex) => {
      return (
        <Task
          key={task.created_at}
          listIndex={listIndex}
          taskIndex={taskIndex}
          text={task.text}
          tasksHandlers={tasksHandlers}
        />
      )
    })
  }

  return (
    <ul className="Tasks">
      {taskItems}
      <TaskCreate listIndex={listIndex} tasksHandlers={tasksHandlers} />
    </ul>
  );
};

export default Tasks;