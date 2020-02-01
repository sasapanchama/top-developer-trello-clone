import React, { FC } from 'react';
import '../../styles/atoms/ButtonCreate.scss';

type Props = { onClickHandler: () => void };

const ButtonCreate: FC<Props> = ({ onClickHandler }) => {
  return (
    <button className="ButtonCreate" onClick={() => onClickHandler()}>CREATE</button>
  );
};

export default ButtonCreate;