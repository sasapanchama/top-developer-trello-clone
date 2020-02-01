import React, { FC, useState } from 'react';
import '../../styles/organisms/BoardCreate.scss';
import FieldText from '../atoms/FieldText';
import ButtonCancel from '../atoms/ButtonCancel';
import ButtonCreate from '../atoms/ButtonCreate';

type Props = { };

const BoardCreate: FC<Props> = () => {

  const [stateIsOpen, setStateIsOpen] = useState(false);

  const onClickHandlerLabel = () => {
    setStateIsOpen(true);
  };

  const onClickHandlerButtonCencel = () => {
    setStateIsOpen(false);
  };

  const onClickHandlerButtonCreate = () => {
    alert('send');
  };

  return (
    <li className={'BoardCreate ' + (stateIsOpen ? 'is-Open' : 'is-Hidden')}>
      <button className="BoardCreate_Label" onClick={() => onClickHandlerLabel()}>
        Create New Board!
      </button>
      <div className="BoardCreate_Box">
        <FieldText />
        <div className="BoardCreate_Box_Button">
          <ButtonCancel onClickHandler={onClickHandlerButtonCencel} />
          <ButtonCreate onClickHandler={onClickHandlerButtonCreate} />
        </div>
      </div>
    </li>
  );
};

export default BoardCreate;