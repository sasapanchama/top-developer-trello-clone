import React, { FC, useState, useEffect } from 'react';
import '../../styles/atoms/AreaText.scss';

type Props = { text: string };

const AreaText: FC<Props> = ({ text }) => {

  const [stateText, setStateText] = useState<string>(text);

  // const initResize = () => {

  // };

  const onChangeHandler = (e: any) => {
    setStateText(e.target.value);
  };

  const onKeyDownHandler = (target: any) => {
    const targetHeight = target.scrollHeight === 25 ? 24 : target.scrollHeight;
    setTimeout(() => {
      target.style = 'height: auto; padding: 0;';
      target.style = `height: ${targetHeight}px`;
    }, 0);
  };

  // useEffect(() => {

  // }, []);

  return (
    <textarea
      className="AreaText"
      value={stateText}
      onChange={(e) => onChangeHandler(e)}
      onKeyDown={(e) => onKeyDownHandler(e.target)}
    >  
    </textarea>
  );
};

export default AreaText;