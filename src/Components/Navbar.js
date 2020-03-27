import React, {Component} from 'react'

render() {
  return (
    <>
      <NavigationBar color='dark' dark expand='md'>
        <NavbarBrand>Ticketing</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className='ml-auto' navbar>
            {this.props.isLogin &&(
              <NavItem>
                <Logout className='nav-link' onClick={this.onLogout}>Logout</Logout>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </NavigationBar>
      {this.state.isLoading && (<Loading/>)}
    </>
  )
}
}