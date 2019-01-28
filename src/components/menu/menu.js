import React from 'react';
import { Navbar, Form } from 'react-bootstrap';

import Logo from './logo';
import Navigation from './navigation';
// import Toggle from './toggle';
import Search from './search';

const Menu = () => (
  <Navbar bg="rebeccapurple" variant="dark">
    <Form inline>
      <Logo />
      <Navigation />
      {/* <Toggle /> */}
      <Search />
    </Form>
  </Navbar>
);

export default Menu;
