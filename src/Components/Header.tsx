import React from 'react';
import { HeaderPaper, StyledHeaderLinks } from '../Styles/styles';

const Header = () => {
  return (
    <header>
      <HeaderPaper elevation={2}>
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

        <StyledHeaderLinks href="#" className=" header__link">
          shop
        </StyledHeaderLinks>
      </HeaderPaper>
      <div className="header__background"></div>
    </header>
  );
};

export default Header;
