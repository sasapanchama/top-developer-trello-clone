import React, { FC, useEffect } from 'react';
import '../../styles/pages/Base.scss';

type Props = { }

const BottomPage: FC<Props> = () => {

  const initResize = () => {
    const textNode = document.querySelectorAll('.AreaText');
    const textArray = Array.prototype.slice.call(textNode, 0);
    textArray.forEach((element) => {
      const target = element;
      const targetHeight = target.scrollHeight === 25 ? 24 : target.scrollHeight;
      setTimeout(() => {
        target.style = 'height: auto; padding: 0;';
        target.style = `height: ${targetHeight}px`;
      }, 0);
    });
  };

  const autoResize = (e: any) => {
    const target = e.target;
    const targetHeight = target.scrollHeight === 25 ? 24 : target.scrollHeight;
    setTimeout(() => {
      target.style = 'height: auto; padding: 0;';
      target.style = `height: ${targetHeight}px`;
    }, 0);
  };

  useEffect(() => {
    initResize();
  }, []);

  return (
    <>
    <header className="Header"></header>
    <ul className="Lists">
      <li className="List">
        <textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>ListTitleListTitle</textarea>
        <ul className="Tasks">
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitleTaskTitleTaskTitleTaskTitleTaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task TaskCreate"><input className="Field FieldText" type="text" /></li>
        </ul>
      </li>
      <li className="List">
        <textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>ListTitleListTitleListTitleListTitleListTitleListTitle</textarea>
        <ul className="Tasks">
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task TaskCreate"><input className="Field FieldText" type="text" /></li>
        </ul>
      </li>
      <li className="List">
        <textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>ListTitleListTitleListTitleListTitleListTitleListTitleListTitleListTitleListTitleListTitle</textarea>
        <ul className="Tasks">
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task"><textarea className="AreaText" onKeyDown={(e) => autoResize(e)}>TaskTitle</textarea></li>
          <li className="Task TaskCreate"><input className="Field FieldText" type="text" /></li>
        </ul>
      </li>
      <li className="List ListCreate">
      <button className="ListCreate_Label">
          Create New List!
        </button>
        <div className="ListCreate_Box">
          <input className="Field FieldText" type="text" />
          <div className="ListCreate_Box_Button">
            <button className="Button ButtonCancel">CANCEL</button>
            <button className="Button ButtonCreate">CREATE</button>
          </div>
        </div>
      </li>
    </ul>
    <footer className="Footer">
      <p className="Footer_Copyright">&copy;copyright.</p>
    </footer>
    </>
  );
};

export default BottomPage;