import React, { FC } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

type Props = { }

const Base: FC<Props> = ({ children }) => {
  return (
    <>
    <Header/>
    { children }
    <Footer/>
    </>
  );
};

export default Base;