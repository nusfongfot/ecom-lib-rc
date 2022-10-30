import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap"
import { useThemeHook } from "../GlobalComponents/ThemeProvider"
import { BiSearch } from "react-icons/bi"
import { useState, useEffect } from "react"
import axios from 'axios'
import FilterResults   from 'react-filter-search'
import ProductCard from '../components/ProductCard'

function Home() {
  const [theme] = useThemeHook()
  const [searchInput, setSearchInput] = useState('')
  const [productData, setProductData] =useState([])

  const getResponse = async () => { 
    const res = await axios.get('https://fakestoreapi.com/products')
    const data = res?.data  
    setProductData(data)
   }


  useEffect(() => {
    getResponse()
  }, [])
  
  return (
    <Container className="py-4">
      <Row className="d-flex flex-column align-items-center justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Search Products
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              }
            >
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              }
            />
          </InputGroup>
        </Col>
        <FilterResults value={searchInput} data={productData}  renderResults={results => (
          <Row className="justify-content-center">
              {results.map((item,i) => (
                <ProductCard key={i} data={item} />
              ))}
          </Row>
        )}/>

      </Row>
    </Container>
  )
}

export default Home
