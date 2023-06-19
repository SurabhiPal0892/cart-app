import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Nav,
  Badge,
  Button
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext, ProductsContext } from "../context/context";
import { useContext } from "react";
import axios from "axios";

export function Header() {
  const { cart } = useContext(CartContext);
  const { setProducts } = useContext(ProductsContext);

    const searchProducts=(e)=>{
        return axios.get(`https://dummyjson.com/products/search?q=${e}`).then(res=>{
            setProducts(res.data.products)
        })
        
    }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brand-name">Just Shop</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              placeholder="search a product"
              style={{ width: 500 }}
              className="m-auto"
              onChange={(e)=>searchProducts(e.target.value)}
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alignRight>
              <Link to="/cart">
                  <Button variant="success">
                  <FaShoppingCart color="white" fontSize="25px" />
                <Badge variant="light">{cart.length}</Badge>
                  </Button>
                
              </Link>
              <Dropdown.Menu></Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
