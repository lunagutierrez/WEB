import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import classnames from 'classnames';

import Recs from './recs/Recs';
import Reviews from './reviews/Reviews';
import Faq from './faq/Faq';
import Descrip from './descrip/Descrip';

const ProdTabs = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
      <div>
        <Nav tabs justified className='bg-light'>
          <NavItem>
            <NavLink
              onClick={() => {
                setCurrentTab(1)
              }}
              active={currentTab === 1}
              className='text-dark'
            >
              Descrip
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                setCurrentTab(2)
              }}
              active={currentTab === 2}
              className='text-dark'
            >
              Recs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                setCurrentTab(3)
              }}
              active={currentTab === 3}
              className='text-dark'
            >
              Reviews
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                setCurrentTab(4)
              }}
              active={currentTab === 4}
              className='text-dark'
            >
              FAQ
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={currentTab}>
          <TabPane tabId={1}>
            <Descrip />
          </TabPane>
          <TabPane tabId={2}>
            <Recs />
          </TabPane>
          <TabPane tabId={3}>
            <Reviews />
          </TabPane>
          <TabPane tabId={4}>
            <Faq />
          </TabPane>
        </TabContent>
      </div>
  );
};

export default ProdTabs;
