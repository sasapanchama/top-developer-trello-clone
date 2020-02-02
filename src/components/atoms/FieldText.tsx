import React, { FC } from 'react';
import '../../styles/atoms/FieldText.scss';

type Props = { text: string, onChangeHandler: (e: any) => void, onKeyDownHandler?: (e: any) => void };

const FieldText: FC<Props> = ({ text, onChangeHandler, onKeyDownHandler }) => {
  return (
    <input
      className="FieldText"
      type="text"
      value={text}
      onChange={(e) => onChangeHandler(e)}
      onKeyDown={(e) => onKeyDownHandler !== undefined ? onKeyDownHandler(e) : null}
    />
  );
};

export default FieldText;