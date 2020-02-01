import React, { FC } from 'react';
import '../../styles/pages/Base.scss';
import Boards from '../organisms/Boards';
import Base from '../templates/Base';

type Props = { };

const TopPage: FC<Props> = () => {
  return (
    <Base>
      <Boards />
    </Base>
  );
};

export default TopPage;