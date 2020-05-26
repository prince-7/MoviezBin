import React from 'react';
import Nav from 'react-bootstrap/Nav'

const Topdiv=({storage}) =>
{
	return(
		<div className='bg-black'>
			<Nav className='f2'>
			  <Nav.Item>
			  <Nav.Link className='white' href="/Watchlist">Watchlist</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link className='white' href="/">Search</Nav.Link>
			  </Nav.Item>
			</Nav>
		</div>
		);
}

export default Topdiv;
