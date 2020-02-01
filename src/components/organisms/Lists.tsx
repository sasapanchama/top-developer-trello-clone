import React, { FC } from 'react';
import '../../styles/organisms/Lists.scss';
import List from '../molecules/List';
import ListCreate from './ListCreate';

type Props = { };

const Lists: FC<Props> = () => {
  return (
    <ul className="Lists">
      <List text={'ListTitle aaaaa'} />
      <List text={'ListTitle bbbbb'} />
      <List text={'ListTitle ccccc'} />
      <List text={'ListTitle ddddd'} />
      <List text={'ListTitle eeeee'} />
      <ListCreate />
    </ul>
  );
};

export default Lists;