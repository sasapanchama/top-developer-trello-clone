import React, { FC, useEffect } from 'react';
import { ListType, TaskType, RootState } from '../../store/types';
import { setBoards } from '../../store/actions';
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router';
import { firebaseData, firebaseObject } from '../../firebase/data';
import '../../styles/pages/Base.scss';
import Lists from '../organisms/Lists';
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

type Props = {} & ConnectedProps<typeof connector> & RouteComponentProps<{ user: string, board: string }>;

const BottomPage: FC<Props> = ({ boards, setBoards, history, location, match }) => {

  const user = match.params.user;
  const boardIndex = Number(location.state);

  useEffect(() => {
    const refUser = firebaseData.ref(`users/${user}`);
    refUser.off();
    refUser.on('value', (snapshot) => {
      if (snapshot.val().boards !== undefined) {
        setBoards(snapshot.val().boards);
      }
    });
  }, []);

  const lists: ListType[] | null = boards !== null && boards[boardIndex].lists !== undefined
    ? boards[boardIndex].lists
    : null;

  const moveArray = (array: ListType[] | TaskType[], index: number, at: number) => {
    const value = array[index];
    const tail = array.slice(index + 1);
    array.splice(index);
    Array.prototype.push.apply(array, tail);
    array.splice(at, 0, value);
    return array;
  };

  const detectDrag = (e: any, index: number, type: string) => {
    e.dataTransfer.setData(type, index);
  };

  const detectDrop = (e: any, index: number, type: string) => {
    e.preventDefault();
    let draggedIndex = Number(e.dataTransfer.getData(type));
    let droppedIndex = index;
    e.dataTransfer.clearData();
    return [draggedIndex, droppedIndex];
  };

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

  const addList = (text: string) => {
    const refLists = firebaseData.ref(`users/${user}/boards/${boardIndex}/lists`);
    const newList: ListType = { text: text, created_at: firebaseObject.ServerValue.TIMESTAMP, tasks: null};
    const oldLists: ListType[] | null = boards !== null && boards[boardIndex].lists !== undefined
      ? boards[boardIndex].lists
      : null;
    oldLists !== null
      ? refLists.update([newList, ...oldLists])
      : refLists.update([newList]);
  };

  const replaceList = (indexes: number[]) => {
    const refLists = firebaseData.ref(`users/${user}/boards/${boardIndex}/lists`);
    const oldLists: ListType[] | null = boards !== null && boards[boardIndex].lists !== undefined
      ? boards[boardIndex].lists
      : null;
    if (oldLists !== null) {
      let newLists = moveArray(oldLists, indexes[0], indexes[1]);
      refLists.update(newLists);
    };
  };

  const addTask = (listIndex: number, text: string) => {
    const refTasks = firebaseData.ref(`users/${user}/boards/${boardIndex}/lists/${listIndex}/tasks`);
    const newTask: TaskType = { text: text, created_at: firebaseObject.ServerValue.TIMESTAMP };
    const oldLists: ListType[] | null = boards !== null && boards[boardIndex].lists !== undefined
      ? boards[boardIndex].lists
      : null;
    const oldTasks: TaskType[] | null = oldLists !== null && oldLists[listIndex].tasks !== undefined
      ? oldLists[listIndex].tasks
      : null;
    oldTasks !== null
      ? refTasks.update([...oldTasks, newTask])
      : refTasks.update([newTask]);
  };

  const replaceTask = (listIndex: number, indexes: number[]) => {
    const refTasks = firebaseData.ref(`users/${user}/boards/${boardIndex}/lists/${listIndex}/tasks`);
    const oldLists: ListType[] | null = boards !== null && boards[boardIndex].lists !== undefined
      ? boards[boardIndex].lists
      : null;
    const oldTasks: TaskType[] | null = oldLists !== null && oldLists[listIndex].tasks !== undefined
      ? oldLists[listIndex].tasks
      : null;
    if (oldTasks !== null) {
      let newTasks = moveArray(oldTasks, indexes[0], indexes[1]);
      refTasks.update(newTasks);
    };
  };

  const listsHandlers = { detectDrag, allowDrop, detectDrop, addList, replaceList };

  const tasksHandlers = { detectDrag, allowDrop, detectDrop, addTask, replaceTask };

  return (
    <Base>
      <Lists user={user} lists={lists} listsHandlers={listsHandlers} tasksHandlers={tasksHandlers} />
    </Base>
  );
};

export default connector(withRouter(BottomPage));