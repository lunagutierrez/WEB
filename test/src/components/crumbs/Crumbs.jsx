import './Crumbs.css'

import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Crumbs = ({ paths }) => {
  return (
    <Breadcrumb className="path-bar_pl">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItem>
            {index < paths.length - 1 ? (
              <a href={path.link}>{path.name}</a>
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
