import React, { FC } from 'react';
import { ListType } from '../../store/types';
import '../../styles/organisms/Lists.scss';
import List from '../molecules/List';
import ListCreate from './ListCreate';

type Props = { user: string, lists: ListType[] | null, listsHandlers: any, tasksHandlers: any };

const Lists: FC<Props> = ({ user, lists, listsHandlers, tasksHandlers }) => {
  
  let listItems = null;
  if (lists !== null) {
    listItems = lists.map((list, listIndex) => {
      return (
        <List
          key={list.created_at}
          listIndex={listIndex}
          text={list.text}
          lists={lists}
          listsHandlers={listsHandlers}
          tasksHandlers={tasksHandlers}
        />
      )
    })
  }
  return (
    <ul className="Lists">
      {listItems}
      <ListCreate listsHandlers={listsHandlers} />
    </ul>
  );
};

export default Lists;