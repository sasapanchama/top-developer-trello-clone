import React, { FC, useState } from 'react';
import '../../styles/organisms/BoardCreate.scss';
import FieldText from '../atoms/FieldText';
import ButtonCancel from '../atoms/ButtonCancel';
import ButtonCreate from '../atoms/ButtonCreate';

type Props = { boardsHandlers: any };

const BoardCreate: FC<Props> = ({ boardsHandlers }) => {

  const [stateIsOpen, setStateIsOpen] = useState<boolean>(false);
  const [stateText, setStateText] = useState<string>('');

  const addBoard = boardsHandlers.addBoard;

  const onClickHandlerLabel = () => {
    setStateIsOpen(true);
  };

  const onChangeHandlerFieldText = (e: any) => {
    setStateText(e.target.value);
  };

  const onClickHandlerButtonCencel = () => {
    setStateIsOpen(false);
    setStateText('');
  };

  const onClickHandlerButtonCreate = () => {
    if (stateText !== '') {
      addBoard(stateText);
      setStateIsOpen(false);
      setStateText('');
    };
  };

  return (
    <li className={'BoardCreate ' + (stateIsOpen ? 'is-Open' : 'is-Hidden')}>
      <button className="BoardCreate_Label" onClick={() => onClickHandlerLabel()}>
        Create New Board!
      </button>
      <div className="BoardCreate_Box">
        <FieldText text={stateText} onChangeHandler={onChangeHandlerFieldText} />
        <div className="BoardCreate_Box_Button">
          <ButtonCancel onClickHandler={onClickHandlerButtonCencel} />
          <ButtonCreate onClickHandler={onClickHandlerButtonCreate} />
        </div>
      </div>
    </li>
  );
};

export default BoardCreate;