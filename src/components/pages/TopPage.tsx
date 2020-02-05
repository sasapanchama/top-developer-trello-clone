import React, { FC, useEffect } from 'react';
import { BoardType, RootState } from '../../store/types';
import { setBoards } from '../../store/actions';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { firebaseData, firebaseObject } from '../../firebase/data';
import '../../styles/pages/Base.scss';
import Boards from '../organisms/Boards';
import Base from '../templates/Base';

const mapState = (state: RootState) => ({
  boards: state.boards
})
const mapDispatch = {
  setBoards
};
const connector = connect(
  mapState,
  mapDispatch
);

type Props = {} & ConnectedProps<typeof connector> & RouteComponentProps<{ user: string }>;

const TopPage: FC<Props> = ({ boards, setBoards, history, location, match }) => {

  const user = match.params.user;

  useEffect(() => {
    const refUser = firebaseData.ref(`users/${user}`);
    refUser.off();
    refUser.on('value', (snapshot) => {
      if (snapshot.val().boards !== undefined) setBoards(snapshot.val().boards)
    });
  }, []);

  const addBoard = (text: string) => {
    const refBoards = firebaseData.ref(`users/${user}/boards`);
    const newBoard: BoardType = { text: text, created_at: firebaseObject.ServerValue.TIMESTAMP, lists: null};
    boards !== null
      ? refBoards.update([newBoard, ...boards])
      : refBoards.update([newBoard]);
  };

  const boardsHandlers = { addBoard };

  return (
    <Base>
      <Boards user={user} boards={boards} boardsHandlers={boardsHandlers} />
    </Base>
  );
};

export default connector(withRouter(TopPage));