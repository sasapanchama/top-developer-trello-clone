import React, { FC } from 'react';
import '../../styles/atoms/FieldText.scss';

type Props = { text: string, onChangeHandler: (e: any) => void };

const FieldText: FC<Props> = ({ text, onChangeHandler }) => {
  return (
    <input className="FieldText" type="text" value={text} onChange={(e) => onChangeHandler(e)} />
  );
};

export default FieldText;