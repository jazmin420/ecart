import React from 'react'
import { Nav, Navbar, Form, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../Slices/productSlice';


function Header({ insideHome }) {

    const dispatch = useDispatch()
    const wishlistCount = useSelector(state => state.wishlistReducer).length
    const cartCount = useSelector(state => state.cartReducer).length

    return (
        <div>
            <Navbar style={{ zIndex: '100' }} className="bg-secondary text-light position-fixed top-0 w-100">
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'} style={{ textDecoration: 'none' }} className='text-white'>
                            <i style={{ height: '25px' }} className="fa-solid fa-truck-fast me-3 text-dark"></i>E-Cart
                        </Link>
                    </Navbar.Brand>
                    {insideHome && <Nav.Link className='text-light w-50'>
                        <Form.Control onChange={(e) => dispatch(searchProduct(e.target.value.toLowerCase()))} type="text" placeholder="Search Products here..." />
                    </Nav.Link>
                    }
                    <div>
                        <Link to={'/wishlist'} style={{ textDecoration: 'none' }} className='text-white'>
                            <i className="fa-solid fa-heart pe-1 text-dark"></i>WISHLIST
                            <Badge bg="primary ms-2">{wishlistCount}</Badge>
                        </Link>
                        <Link to={'/cart'} style={{ textDecoration: 'none' }} className='text-white ps-5'> <i className="fa-solid fa-cart-shopping pe-2 text-dark"></i>CART  <Badge bg="primary ms-2">{cartCount}</Badge></Link>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header