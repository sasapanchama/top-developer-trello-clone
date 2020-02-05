import React, { FC, useState } from 'react';
import '../../styles/organisms/ListCreate.scss';
import FieldText from '../atoms/FieldText';
import ButtonCancel from '../atoms/ButtonCancel';
import ButtonCreate from '../atoms/ButtonCreate';

type Props = { listsHandlers: any };

const ListCreate: FC<Props> = ({ listsHandlers }) => {

  const [stateIsOpen, setStateIsOpen] = useState<boolean>(false);
  const [stateText, setStateText] = useState<string>('');

  const addList = listsHandlers.addList;

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
      addList(stateText);
      setStateIsOpen(false);
      setStateText('');
    };
  };

  return (
    <li className={'ListCreate ' + (stateIsOpen ? 'is-Open' : 'is-Hidden')}>
      <button className="ListCreate_Label" onClick={() => onClickHandlerLabel()}>
        Create New List!
      </button>
      <div className="ListCreate_Box">
      <FieldText text={stateText} onChangeHandler={onChangeHandlerFieldText} />
        <div className="ListCreate_Box_Button">
          <ButtonCancel onClickHandler={onClickHandlerButtonCencel} />
          <ButtonCreate onClickHandler={onClickHandlerButtonCreate} />
        </div>
      </div>
    </li>
  );
};

export default ListCreate;