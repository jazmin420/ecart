import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card, Row, Col, Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Slices/productSlice'


function Home() {

  const dispatch = useDispatch()
  const { allProducts, error,loading } = useSelector(state => state.productReducer)
  // console.log(allProducts,error,loading);

  const [currentPage, setCurrentPage] = useState(1)
  const productperPage = 8
  const totalPages = Math.ceil(allProducts.length / productperPage)
  const lastProductIndex = currentPage * productperPage
  const firstProductIndex = lastProductIndex - productperPage
  const visibleCards = allProducts?.slice(firstProductIndex, lastProductIndex)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[]);

  const navigateTonext = () => {
    if(currentPage!= totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToprev = () => {
    if(currentPage!= 1){
      setCurrentPage(currentPage-1)
    }
  }


  return (
    <>
    <Header insideHome/> 
    <div className='container' style={{marginTop: '150px'}}>

      {
        loading? ( <div className="mt-5 text-center fw-bolder"><Spinner animation="border" variant="danger" className='me-2' />Loading...</div>
  )
        : (
        <Row>
        { allProducts?. length>0?
           visibleCards?.map(product =>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded'>
              <Card.Img style={{height:'180px'}} variant='top' src={product?.thumbnail}></Card.Img>
              <Card.Body>
                <Card.Title>{product?.title.slice(0,15)}...</Card.Title>
                <div className='text-center'><Link to={`/view/${product?.id}`} variant='primary'>View more...</Link></div>
              </Card.Body>
              </Card>
            </Col>
           )) :
           <div className="fw-bolder text-primary text-center mt-5 mb-5 fs-4">Nothing to display!!!!</div>
          
        }
      </Row>
      ) }
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <span onClick={navigateToprev} style={{cursor: 'pointer'}}>
          <i className='fa-solid fa-backward me-5'></i>
        </span>
        <span className='fw-bolder'>{currentPage} of {totalPages}</span>
        <span onClick={navigateTonext} style={{cursor: 'pointer'}}>
          <i className='fa-solid fa-forward ms-5'></i>
        </span>
      </div>
    </div>
    </>
  )
}

export default Home