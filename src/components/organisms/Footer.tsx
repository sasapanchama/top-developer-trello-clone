import React, { FC } from 'react';
import '../../styles/organisms/Footer.scss';

type Props = { };

const Footer: FC<Props> = () => {
  return (
    <footer className="Footer">
      <p className="Footer_Copyright">&copy;copyright.</p>
    </footer>
  );
};

export default Footer;