import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Page = (props) => {
  return (
    <Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={this.prevData} color='primary' href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={this.nextData} color='primary' href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

<Row>
  <Col md={12} className='text-right'>
      Page {this.state.pageInfo.page}/{this.state.pageInfo.totalPage} Total Data {this.state.pageInfo.totalData} Limit {this.state.pageInfo.perPage}
  </Col>
</Row>
<Row>
  <Col md={6} className='text-center'>
    <Pagination  onClick={this.prevData} color='primary'>Prev</Pagination>
  </Col>
  <Col md={6} className='text-center'>
    <Pagination  onClick={this.nextData} color='primary'>Next</Pagination>
  </Col>
</Row>

export default Page;