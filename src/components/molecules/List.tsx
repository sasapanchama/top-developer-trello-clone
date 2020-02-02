import React, { FC } from 'react';
import { ListType, TaskType } from '../../store/types';
import '../../styles/molecules/List.scss';
import AreaText from '../atoms/AreaText';
import Tasks from '../organisms/Tasks';

type Props = { index: number, text: string, tasksHandlers: any, lists: ListType[] | null };

const List: FC<Props> = ({ index, text, tasksHandlers, lists }) => {

  const tasks: TaskType[] | null = lists !== null && lists[index].tasks !== undefined
    ? lists[index].tasks
    : null;

  return (
    <li className="List">
      <AreaText text={text} />
      <Tasks index={index} tasks={tasks} tasksHandlers={tasksHandlers} />
    </li>
  );
};

export default List;