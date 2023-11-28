import './Crumbs.css'

import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Crumbs = ({ paths }) => {
  return (
    <Breadcrumb listClassName="path-bar_pl  ps-4">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItem className="ms-0">
            {index < paths.length - 1 ? (
              <Link to={path.link}>{path.name}</Link>
            ) : (
              <span>{path.name}</span>
            )}
          </BreadcrumbItem>
        </React.Fragment>
      ))}
    </Breadcrumb>
  );
};

export default Crumbs;
