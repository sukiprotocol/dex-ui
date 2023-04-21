import React from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as QuickIcon } from 'assets/images/suki-icon.svg';
import 'components/styles/Footer.scss';

const Footer: React.FC = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <Box className='footer'>
      <QuickIcon />
      <p>© {copyrightYear} SukiSwap.</p>
    </Box>
  );
};

export default Footer;
