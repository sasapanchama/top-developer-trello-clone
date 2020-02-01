import React, { FC } from 'react';
import '../../styles/atoms/ButtonCancel.scss';

type Props = { onClickHandler: () => void };

const ButtonCancel: FC<Props> = ({ onClickHandler }) => {
  return (
    <button className="ButtonCancel" onClick={() => onClickHandler()}>CANCEL</button>
  );
};

export default ButtonCancel;