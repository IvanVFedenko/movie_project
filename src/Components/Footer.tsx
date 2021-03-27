import React from 'react';
import { FooterPaper, StyledHeaderLinks } from '../Styles/styles';

const Footer = () => {
  return (
    <header>
      <FooterPaper elevation={2}>
        <StyledHeaderLinks href="#" className=" header__link">
          news
        </StyledHeaderLinks>

        <StyledHeaderLinks href="#" className=" header__link">
          about
        </StyledHeaderLinks>

        <StyledHeaderLinks href="#" className=" header__link">
          services
        </StyledHeaderLinks>

        <StyledHeaderLinks href="#" className=" header__link">
          contacts
        </StyledHeaderLinks>
      </FooterPaper>
      <div className="header__background"></div>
    </header>
  );
};

export default Footer;
