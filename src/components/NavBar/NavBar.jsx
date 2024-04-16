import { MenuItem, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Menu>
      <MenuItem as={NavLink} to="/" id="home">
        Home
      </MenuItem>

      <MenuItem as={NavLink} to="faq" id="faq">
        FAQ
      </MenuItem>
    </Menu>
  );
};

export default NavBar;
