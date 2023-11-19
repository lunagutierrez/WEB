import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import classnames from 'classnames';

import Recs from './recs/Recs';
import Reviews from './reviews/Reviews';
import Faq from './faq/Faq';
import Descrip from './descrip/Descrip';

const ProdTabs = () => {
  return (
    <Router>
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              as={Link}
              to="/descrip"
              className={classnames({ active: window.location.pathname === '/descrip' })}
            >
              Descrip
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              to="/recs"
              className={classnames({ active: window.location.pathname === '/recs' })}
            >
              Recs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              to="/reviews"
              className={classnames({ active: window.location.pathname === '/reviews' })}
            >
              Reviews
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              to="/faq"
              className={classnames({ active: window.location.pathname === '/faq' })}
            >
              FAQ
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent>
          <Routes>
            <Route path="/descrip" element={<TabPane><Descrip /></TabPane>} />
            <Route path="/recs" element={<TabPane><Recs /></TabPane>} />
            <Route path="/reviews" element={<TabPane><Reviews /></TabPane>} />
            <Route path="/faq" element={<TabPane><Faq /></TabPane>} />
          </Routes>
        </TabContent>
      </div>
    </Router>
  );
};

export default ProdTabs;
