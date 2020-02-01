import React, { FC } from 'react';
import '../../styles/organisms/Tasks.scss';
import Task from '../molecules/Task';
import TaskCreate from './TaskCreate';

type Props = { };

const Tasks: FC<Props> = () => {
  return (
    <ul className="Tasks">
      <Task text={'TaskTitle aaaaa'} />
      <Task text={'TaskTitle bbbbb'} />
      <Task text={'TaskTitle ccccc'} />
      <Task text={'TaskTitle ddddd'} />
      <Task text={'TaskTitle eeeee'} />
      <TaskCreate />
    </ul>
  );
};

export default Tasks;