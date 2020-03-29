import React from 'react';
import { Breadcrumb, BreadcrumbItem, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <Breadcrumb>
      <BreadcrumbItem><Link to = '/login'>Login</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to = '/dashboard'>Dashboard</Link></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Home;