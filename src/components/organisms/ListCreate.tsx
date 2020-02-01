import React, { FC, useState } from 'react';
import '../../styles/organisms/ListCreate.scss';
import FieldText from '../atoms/FieldText';
import ButtonCancel from '../atoms/ButtonCancel';
import ButtonCreate from '../atoms/ButtonCreate';

type Props = { };

const ListCreate: FC<Props> = () => {

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
    <li className={'ListCreate ' + (stateIsOpen ? 'is-Open' : 'is-Hidden')}>
      <button className="ListCreate_Label" onClick={() => onClickHandlerLabel()}>
        Create New Board!
      </button>
      <div className="ListCreate_Box">
        <FieldText />
        <div className="ListCreate_Box_Button">
          <ButtonCancel onClickHandler={onClickHandlerButtonCencel} />
          <ButtonCreate onClickHandler={onClickHandlerButtonCreate} />
        </div>
      </div>
    </li>
  );
};

export default ListCreate;