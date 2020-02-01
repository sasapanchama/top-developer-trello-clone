import React, { FC, useEffect } from 'react';
import '../../styles/pages/Base.scss';
import Lists from '../organisms/Lists';
import Base from '../templates/Base';

type Props = { };

const BottomPage: FC<Props> = () => {

  return (
    <Base>
      <Lists />
    </Base>
  );
};

export default BottomPage;