import React, { FC } from 'react';
import '../../styles/atoms/FieldText.scss';

type Props = { };

const FieldText: FC<Props> = () => {
  return (
    <input className="FieldText" type="text" />
  );
};

export default FieldText;