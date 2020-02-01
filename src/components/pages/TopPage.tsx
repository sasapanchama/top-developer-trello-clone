import React, { FC } from 'react';
import '../../styles/pages/Base.scss';

type Props = { }

const TopPage: FC<Props> = () => {
  return (
    <>
    <header className="Header"></header>
    <ul className="Boards">
      <li className="Board">
        <a href="#">
          BoardTitle
        </a>
      </li>
      <li className="Board">
        <a href="#">
          BoardTitle
        </a>
      </li>
      <li className="Board">
        <a href="#">
          BoardTitle
        </a>
      </li>
      <li className="Board">
        <a href="#">
          BoardTitle
        </a>
      </li>
      <li className="Board">
        <a href="#">
          BoardTitle
        </a>
      </li>
      <li className="Board">
        <a href="#">
          BoardTitle
        </a>
      </li>
      <li className="Board BoardCreate">
        <button className="BoardCreate_Label">
          Create New Board!
        </button>
        {/* <div className="BoardCreate_Box">
          <input className="Field FieldText" type="text" />
          <div className="BoardCreate_Box_Button">
            <button className="Button ButtonCancel">CANCEL</button>
            <button className="Button ButtonCreate">CREATE</button>
          </div>
        </div> */}
      </li>
    </ul>
    <footer className="Footer">
      <p className="Footer_Copyright">&copy;copyright.</p>
    </footer>
    </>
  );
};

export default TopPage;