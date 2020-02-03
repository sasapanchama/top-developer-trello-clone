import React, { FC } from 'react';
import { ListType, TaskType } from '../../store/types';
import '../../styles/molecules/List.scss';
import AreaText from '../atoms/AreaText';
import Tasks from '../organisms/Tasks';

type Props = { listIndex: number, text: string, listsHandlers: any, tasksHandlers: any, lists: ListType[] | null };

const List: FC<Props> = ({ listIndex, text, listsHandlers, tasksHandlers, lists }) => {

  const detectDrag = listsHandlers.detectDrag;
  const detectDrop = listsHandlers.detectDrop;
  const allowDrop = listsHandlers.allowDrop;
  const replaceList = listsHandlers.replaceList;

  const onDragStartHandler = (e: any) => {
    detectDrag(e, listIndex, 'list');
  };

  const onDropHandler = (e: any) => {
    replaceList(detectDrop(e, listIndex, 'list'));
  };

  const onDragOverHandler = (e: any) => {
    allowDrop(e);
  };

  const tasks: TaskType[] | null = lists !== null && lists[listIndex].tasks !== undefined
    ? lists[listIndex].tasks
    : null;

  return (
    <li className="List" onDragStart={(e) => onDragStartHandler(e)} onDrop={(e) => onDropHandler(e)} onDragOver={(e) => onDragOverHandler(e)} draggable>
      <AreaText text={text} />
      <Tasks listIndex={listIndex} tasks={tasks} tasksHandlers={tasksHandlers} />
    </li>
  );
};

export default List;