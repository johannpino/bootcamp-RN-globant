/* eslint-disable no-alert */
/* eslint-disable no-console */

/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import NavbarContext from './navbarContext';

const NavbarState = (props) => {
  // Set an initializing state whilst Firebase connects
  const [navbarHidden, setNavbarHidden] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        navbarHidden,
        setNavbarHidden,
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

NavbarState.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default NavbarState;
