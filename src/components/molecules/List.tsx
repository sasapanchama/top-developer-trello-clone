import React, { FC } from 'react';
import '../../styles/molecules/List.scss';
import AreaText from '../atoms/AreaText';
import Tasks from '../organisms/Tasks';

type Props = { text: string };

const List: FC<Props> = ({ text }) => {
  return (
    <li className="List">
      <AreaText text={text} />
      <Tasks />
    </li>
  );
};

export default List;